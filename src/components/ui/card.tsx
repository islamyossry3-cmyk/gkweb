import { cn } from '@/lib/cn';

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur',
        className
      )}
    >
      {children}
    </div>
  );
}

export function BrandCard({
  children,
  className,
  variant = 'default'
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'green' | 'pink';
}) {
  const styles = {
    default: 'bg-white border border-slate-200 text-slate-900',
    green: 'bg-brand-green text-white border-none',
    pink: 'bg-brand-pink text-white border-none'
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl p-8 shadow-md',
        styles[variant],
        className
      )}
    >
      {(variant === 'green' || variant === 'pink') && (
        <div className="noise absolute inset-0 z-0" />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
