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
