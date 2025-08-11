// components/ColorSwatch.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  label: string;
  bgClass: string; // e.g. "bg-primary"
  textClass?: string; // e.g. "text-primary-foreground"
  showCode?: boolean;
};

function cx(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(' ');
}

export default function ColorSwatch({ label, bgClass, textClass, showCode = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const comp = getComputedStyle(el);
    // Show the computed background-color (useful with themes)
    setValue(comp.backgroundColor);
  }, [bgClass]);

  return (
    <div className="border-border overflow-hidden rounded-xl border">
      <div
        ref={ref}
        className={cx('flex h-16 w-full items-center justify-center', bgClass, textClass)}
      >
        <span className={cx('text-sm font-medium', textClass)}>Aa</span>
      </div>
      <div className="px-3 py-2">
        <div className="text-fg text-sm font-medium">{label}</div>
        {showCode && (
          <div className="text-fg-muted mt-0.5 text-xs">
            {bgClass}
            {textClass ? ` · ${textClass}` : ''} {value ? `· ${value}` : ''}
          </div>
        )}
      </div>
    </div>
  );
}
