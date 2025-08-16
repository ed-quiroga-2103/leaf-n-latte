// components/ui/Typography.tsx
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const tagMap = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6' } as const;
type HeadingLevel = keyof typeof tagMap;

const sizes: Record<HeadingLevel, string> = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base',
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}

export function Heading({ level = 2, className, children, ...props }: HeadingProps) {
  const Tag = tagMap[level];
  return React.createElement(
    Tag,
    {
      className: twMerge(
        ['font-heading font-semibold text-primary tracking-tight', sizes[level], className]
          .filter(Boolean)
          .join(' '),
      ),
      ...props,
    },
    children,
  );
}

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  muted?: boolean;
  lead?: boolean;
}

export function Paragraph({ muted, lead, className, ...props }: ParagraphProps) {
  const cls = [
    'font-body',
    lead ? 'text-lg' : 'text-base',
    muted ? 'text-fg-muted' : 'text-fg',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return <p className={cls} {...props} />;
}

export function Small(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={['text-fg-muted text-sm', props.className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}
