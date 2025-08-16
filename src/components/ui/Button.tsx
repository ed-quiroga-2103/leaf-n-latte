// components/ui/Button.tsx
import * as React from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

function cx(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(' ');
}

const base =
  'inline-flex items-center justify-center rounded-2xl font-semibold transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-2 ring-ring ring-offset-2 ring-offset-bg ' +
  'disabled:opacity-50 disabled:cursor-not-allowed';

const sizeClass: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};

const variantClass: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:brightness-110 active:brightness-75 active:brightness-75 press:brightness-75',
  secondary:
    'bg-secondary text-secondary-foreground hover:brightness-110 active:brightness-75 press:brightness-75',
  outline: 'border border-border text-fg hover:bg-surface-2',
  ghost: 'text-fg hover:bg-muted',
};

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button className={cx(base, sizeClass[size], variantClass[variant], className)} {...props} />
  );
}
