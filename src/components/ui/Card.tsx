// components/ui/Card.tsx
import * as React from 'react';

function cx(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(' ');
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: boolean;
  imageUrl?: string; // Optional image URL for background
}

export function Card({ className, imageUrl, shadow = true, ...props }: CardProps) {
  return (
    <div
      style={
        imageUrl
          ? {
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }
      className={cx(
        'bg-surface border-border rounded-2xl border p-5',
        shadow && 'shadow-sm',
        className,
      )}
      {...props}
    />
  );
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cx('mb-3', className)} {...props} />;
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h3 className={cx('font-heading text-fg text-lg', className)} {...props} />;
}

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cx('text-fg-muted text-sm', className)} {...props} />;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl?: string; // Optional image URL for background
}
export function CardContent({ className, imageUrl, ...props }: CardContentProps) {
  return (
    <div
      style={
        imageUrl
          ? {
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }
      className={cx('text-fg', className)}
      {...props}
    />
  );
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={cx('mt-4 flex gap-3', className)} {...props} />;
}
