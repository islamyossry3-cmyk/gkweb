import Link from 'next/link';
import { ArrowRight, BarChart3, TrendingUp, Zap } from 'lucide-react';

export function MetricHero() {
  return (
    <section className="hero-gradient relative min-h-[90vh] overflow-hidden pt-24 lg:pt-32">
      <div className="noise-overlay" />

      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-pink/10 blur-3xl" />

      <div className="relative z-20 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-sage/30 bg-brand-dark/50 px-4 py-2 text-sm font-semibold text-brand-blue backdrop-blur">
              <Zap className="h-4 w-4 stroke-[1.5px]" />
              MENA • Enterprise-ready • AI-Powered
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              People & Culture,
              <span className="bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent"> Engineered.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/80">
              Integrated systems powered by behavioral science, AI, and gamification to drive measurable outcomes across attraction, retention, performance, and engagement.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?intent=demo"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-pink px-6 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-pink/90"
              >
                Request Demo
                <ArrowRight className="h-5 w-5 stroke-[1.5px] transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact?intent=diagnosis"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-brand-sage/30 bg-white/5 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:-translate-y-1"
              >
                Book Diagnosis
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card relative space-y-6 rounded-3xl p-8">
              <div className="noise-overlay rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-brand-blue">
                    Impact Dashboard
                  </div>
                  <div className="rounded-full bg-brand-green/20 px-3 py-1 text-xs font-bold text-brand-green">
                    Live
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="group">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-sm font-medium text-white/60">Average Retention</div>
                        <div className="mt-2 font-display text-5xl font-bold text-white">52<span className="text-2xl text-white/60">mo</span></div>
                      </div>
                      <TrendingUp className="h-8 w-8 stroke-[1.5px] text-brand-green" />
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 bg-gradient-to-r from-brand-green to-brand-blue" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Engagement', value: '+18%', icon: BarChart3 },
                      { label: 'Performance', value: '+12%', icon: TrendingUp },
                      { label: 'Advocacy', value: '+9%', icon: Zap }
                    ].map((metric) => (
                      <div key={metric.label} className="glass-card rounded-2xl p-4">
                        <metric.icon className="h-5 w-5 stroke-[1.5px] text-brand-blue" />
                        <div className="mt-3 text-xs text-white/60">{metric.label}</div>
                        <div className="mt-1 font-display text-2xl font-bold text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="glass-card rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-blue">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-brand-green" />
                      Next Actions Queued
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-white/75">
                      <div className="flex items-center justify-between">
                        <span>Launch onboarding milestone program</span>
                        <span className="text-xs text-white/50">EX</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Deploy culture diagnostic</span>
                        <span className="text-xs text-white/50">Culture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-2xl border border-brand-sage/20 bg-brand-dark/50 backdrop-blur" />
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rotate-12 rounded-2xl border border-brand-sage/20 bg-brand-dark/50 backdrop-blur" />
          </div>
        </div>
      </div>
    </section>
  );
}
