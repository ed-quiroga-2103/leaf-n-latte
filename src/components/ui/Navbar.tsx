'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Floating, translucent navbar that optionally auto-hides.
 *
 * Features
 * - Fixed, hovering top bar with backdrop blur or static bar that pushes content down.
 * - Pass any children (brand, nav links, search, etc.).
 * - Parametric blur amount and background colour/opacity.
 * - Hide behaviour configurable by time or scroll distance, or disabled.
 * - Reveals on scroll up (distance mode) and can pin on hover.
 * - Can be set to always fixed in layout instead of overlay.
 * - When overlay=true, content below is padded automatically.
 */

export type HideMode = 'none' | 'distance' | 'time';

export interface FloatingNavbarProps {
  /** Backdrop blur in pixels */
  blur?: number; // default 8
  /** Optional height (e.g., 64 or "4rem") */
  height?: number | string;
  /** Background colour (any CSS colour). Default is semi-transparent charcoal */
  bgColor?: string; // e.g. "rgba(60,60,60,0.6)"
  /** Border colour for bottom hairline */
  borderColor?: string;
  /** Box shadow toggle */
  elevated?: boolean;
  /** Start visible? */
  initialVisible?: boolean;

  /** Hide strategy: "none" | "distance" | "time" */
  hideMode?: HideMode;
  /**
   * If hideMode === "distance": number of pixels scrolled down before hiding.
   * If hideMode === "time": milliseconds before hiding after mount or last activity.
   */
  hideAfter?: number;
  /** For distance mode: show again when user scrolls up */
  showOnScrollUp?: boolean;
  /** Throttle scroll handling (ms) */
  throttleMs?: number;
  /** When hideMode === "time": reset the timer when user moves mouse or scrolls */
  resetTimerOnActivity?: boolean;
  /** Keep bar visible while hovered */
  pinOnHover?: boolean;
  /** Layout behaviour: true = overlay (absolute/fixed), false = pushes content down */
  overlay?: boolean;
  /** Optional className for outer container */
  className?: string;
  /** Contents inside the bar */
  children?: React.ReactNode;
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({
  blur = 8,
  height = 64,
  bgColor,
  borderColor,
  elevated = true,
  initialVisible = true,
  hideMode = 'distance',
  hideAfter = 160, // px or ms depending on mode
  showOnScrollUp = true,
  throttleMs = 80,
  resetTimerOnActivity = true,
  pinOnHover = true,
  overlay = true,
  className,
  children,
}) => {
  const [visible, setVisible] = useState(initialVisible);
  const lastScrollY = useRef<number>(0);
  const accumulatedDown = useRef<number>(0);
  const timerRef = useRef<number | null>(null);
  const hoverRef = useRef(false);
  const ticking = useRef(false);

  const style = useMemo<React.CSSProperties>(
    () => ({
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      backgroundColor: bgColor,
      borderBottom: `1px solid ${borderColor}`,
      height: typeof height === 'number' ? `${height}px` : height,
    }),
    [blur, bgColor, borderColor, height],
  );

  // TIME MODE: manage inactivity timer
  const clearTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    if (hideMode !== 'time') return;
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      if (!hoverRef.current) setVisible(false);
    }, hideAfter);
  };

  useEffect(() => {
    if (!overlay) {
      setVisible(true);
      return;
    }
    if (hideMode === 'time') {
      setVisible(true);
      startTimer();
    }
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideMode, hideAfter, overlay]);

  useEffect(() => {
    if (!overlay) return;

    const onActivity = () => {
      if (hideMode === 'time' && resetTimerOnActivity) {
        setVisible(true);
        startTimer();
      }
    };

    const onMouseEnter = () => {
      hoverRef.current = true;
      if (pinOnHover) setVisible(true);
      if (hideMode === 'time') clearTimer();
    };
    const onMouseLeave = () => {
      hoverRef.current = false;
      if (hideMode === 'time') startTimer();
    };

    window.addEventListener('mousemove', onActivity, { passive: true });
    window.addEventListener('keydown', onActivity, { passive: true });

    const el = containerRef.current;
    el?.addEventListener('mouseenter', onMouseEnter);
    el?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onActivity as any);
      window.removeEventListener('keydown', onActivity as any);
      el?.removeEventListener('mouseenter', onMouseEnter);
      el?.removeEventListener('mouseleave', onMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideMode, resetTimerOnActivity, pinOnHover, overlay]);

  // DISTANCE MODE: scroll detection
  const handleScroll = () => {
    if (!overlay || hideMode !== 'distance') return;
    const currentY = window.scrollY || window.pageYOffset;
    const delta = currentY - lastScrollY.current;

    if (delta > 0) {
      // Scrolling down
      accumulatedDown.current += delta;
      if (accumulatedDown.current >= hideAfter && !hoverRef.current) {
        setVisible(false);
      }
    } else if (delta < 0) {
      // Scrolling up
      accumulatedDown.current = 0;
      if (showOnScrollUp) setVisible(true);
    }

    lastScrollY.current = currentY <= 0 ? 0 : currentY;
  };

  useEffect(() => {
    if (!overlay || hideMode !== 'distance') return;
    lastScrollY.current = window.scrollY || window.pageYOffset;
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    let throttled: number | null = null;
    const throttler = () => {
      if (throttled) return;
      throttled = window.setTimeout(() => {
        onScroll();
        throttled && window.clearTimeout(throttled);
        throttled = null;
      }, throttleMs);
    };

    window.addEventListener('scroll', throttler, { passive: true });
    return () => {
      if (throttled) window.clearTimeout(throttled);
      window.removeEventListener('scroll', throttler as any);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideMode, hideAfter, showOnScrollUp, throttleMs, overlay]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const wrapperClass = overlay ? 'fixed left-0 right-0 top-0 z-50' : 'relative w-full';

  // When overlay is true, adjust body padding so content doesn't slide under navbar
  useEffect(() => {
    if (!overlay) return;
    const navHeight = typeof height === 'number' ? height : parseInt(height as string, 10) || 64;
    document.body.style.paddingTop = `${navHeight}px`;
    return () => {
      document.body.style.paddingTop = '';
    };
  }, [overlay, height]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={containerRef}
          initial={{ y: overlay ? -24 : 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: overlay ? -24 : 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
          role="navigation"
          aria-label="Floating navigation bar"
          className={[
            `${wrapperClass} flex items-center`,
            'px-4 md:px-6',
            elevated ? 'shadow-md' : '',
            className || '',
          ].join(' ')}
          style={style}
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import { Heading } from './Typography';

export function Navbar() {
  return (
    <FloatingNavbar
      blur={8}
      height={64}
      elevated={true}
      initialVisible={true}
      hideMode="distance"
      hideAfter={80}
      showOnScrollUp={true}
      throttleMs={80}
      resetTimerOnActivity={true}
      pinOnHover={true}
      className="bg-primary/80"
      overlay={true}
    >
      <div className="flex w-full items-center justify-center">
        <Heading className="text-inverted-fg" level={4}>
          Leaf & Latte
        </Heading>
      </div>
    </FloatingNavbar>
  );
}
