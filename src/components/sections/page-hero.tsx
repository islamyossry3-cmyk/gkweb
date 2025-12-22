import Link from 'next/link';
import { cn } from '@/lib/cn';
import { AuroraBackdrop } from '@/components/effects/aurora';
import { HeroEffects } from '@/components/effects/hero-effects';
import { Magnetic } from '@/components/effects/magnetic';
import { buttonClasses } from '@/components/ui/button';

export function PageHero({
  kicker,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  right
}: {
  kicker?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  right?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-16 pt-28 text-white">
      <AuroraBackdrop />
      <HeroEffects />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {kicker ? (
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/15">
              {kicker}
            </div>
          ) : null}

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-[linear-gradient(90deg,#ffffff,rgba(255,255,255,0.75),#ffffff)] bg-[length:200%_200%] bg-clip-text text-transparent animate-shimmer">
              {title}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta ? (
                <Magnetic>
                  <Link href={primaryCta.href} className={cn(buttonClasses('primary'), 'px-5 py-3 text-sm')}>
                    {primaryCta.label}
                  </Link>
                </Magnetic>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className={cn(buttonClasses('secondary'), 'px-5 py-3 text-sm')}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}

          <div className="mt-6 text-sm text-white/60">
            See the platform in 2 minutes. Get a tailored recommendation in 30.
          </div>
        </div>

        <div className="lg:col-span-5">
          {right ? (
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(246,119,130,0.25),transparent_55%),radial-gradient(circle_at_bottom,rgba(12,85,74,0.25),transparent_55%)] blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur">
                {right}
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute -inset-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.25),transparent_60%)] blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur">
                <div className="text-xs font-semibold text-white/70">Signature experience</div>
                <div className="mt-2 text-lg font-semibold">The 5×5 GoldinKollar Matrix</div>
                <div className="mt-2 text-sm text-white/70">
                  Explore solutions by Domain (IC / EX / EE / Culture / EB) or by Delivery Type (Measure / Strategize / Implement / Transfer / Document).
                </div>

                <div className="mt-5 grid grid-cols-5 gap-2 text-[10px] text-white/70">
                  {['IC','EX','EE','Culture','EB'].map((r) => (
                    <div key={r} className="rounded-lg bg-white/5 px-2 py-2 text-center ring-1 ring-white/10">{r}</div>
                  ))}
                  {['Measure','Strategize','Implement','Transfer','Document'].map((c) => (
                    <div key={c} className="col-span-5 mt-2 rounded-xl bg-white/5 px-3 py-2 text-center ring-1 ring-white/10">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
