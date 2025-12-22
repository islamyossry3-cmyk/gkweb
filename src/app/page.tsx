import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import { OutcomesSection } from '@/components/sections/outcomes';
import { Reveal } from '@/components/effects/reveal';
import { MatrixNavigator } from '@/components/sections/matrix-navigator';
import { ProductCard } from '@/components/product-card';
import { BrandCard } from '@/components/ui/card';
import { products } from '@/content/products';

export default function HomePage() {
  const featured = [
    products.find((p) => p.slug === 'people-culture-command-center'),
    products.find((p) => p.slug === 'ai-onboarding-ecosystem'),
    products.find((p) => p.slug === 'persona-quest-ocai'),
    products.find((p) => p.slug === 'trivia-clans')
  ].filter(Boolean);

  return (
    <>
      <PageHero
        kicker="MENA • Enterprise-ready • Behavioral science + AI + gamification"
        title="People & Culture, Engineered."
        subtitle="GoldinKollar builds integrated people and culture systems—powered by behavioral science, AI, and gamification—to drive measurable attraction, retention, performance, engagement, advocacy, and compliance across the MENA region."
        primaryCta={{ label: 'Request a Demo', href: '/contact?intent=demo' }}
        secondaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
        right={<HeroMock />}
      />

      <OutcomesSection />

      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <div className="text-sm font-bold text-brand-green">Our Approach</div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-green sm:text-4xl lg:text-5xl">
                The Recipe for Effectiveness
              </h2>
              <p className="mt-4 text-base text-slate-700">
                Three core principles that make our solutions work
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <BrandCard variant="green" className="flex min-h-[400px] flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold">Customization</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/90">
                    Every solution is tailored to your organization's unique culture, challenges, and goals. No cookie-cutter approaches.
                  </p>
                </div>
              </BrandCard>

              <BrandCard variant="green" className="flex min-h-[400px] flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">
                    🔍
                  </div>
                  <h3 className="text-2xl font-bold">Deep Insights</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/90">
                    Data-driven diagnostics reveal what's really happening beneath the surface, enabling precise interventions.
                  </p>
                </div>
              </BrandCard>

              <BrandCard variant="pink" className="flex min-h-[400px] flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">
                    ⚡
                  </div>
                  <h3 className="text-2xl font-bold">Focus</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/90">
                    Clear priorities and actionable steps ensure your team knows exactly what to do next and why it matters.
                  </p>
                </div>
              </BrandCard>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-bold text-brand-green">One flagship platform</div>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  One Command Center for the Head of People & Culture
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Many organizations run people initiatives as isolated projects. GoldinKollar builds an integrated system and gives leadership a single command center to operate it.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/platform"
                    className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                  >
                    Explore the Platform
                  </Link>
                  <Link
                    href="/solutions#matrix"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5"
                  >
                    Explore the Matrix
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-[linear-gradient(135deg,rgba(12,85,74,0.08),rgba(246,119,130,0.06))] p-6 shadow-soft">
                  <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.20),transparent_60%)] blur-3xl" />
                  <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(12,85,74,0.20),transparent_60%)] blur-3xl" />

                  <div className="relative grid gap-4 md:grid-cols-2">
                    {[
                      { k: 'IC', v: 'Internal Communication' },
                      { k: 'EX', v: 'Employee Experience' },
                      { k: 'EE', v: 'Employee Engagement' },
                      { k: 'Culture', v: 'Culture' },
                      { k: 'EB', v: 'Employer Branding' },
                      { k: 'Gov', v: 'Governance + reporting' }
                    ].map((it) => (
                      <div key={it.k} className="rounded-2xl bg-white/70 p-5 ring-1 ring-slate-200/70">
                        <div className="text-xs font-bold text-slate-500">{it.k}</div>
                        <div className="mt-1 text-sm font-semibold text-slate-900">{it.v}</div>
                        <div className="mt-2 text-xs leading-relaxed text-slate-600">
                          Connected into one measurable operating cockpit.
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-6 rounded-2xl bg-slate-950 px-5 py-4 text-white">
                    <div className="text-xs font-semibold text-white/70">Designed for leadership</div>
                    <div className="mt-1 text-sm font-bold">See drift early. Activate interventions fast. Prove impact.</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-sm font-bold text-brand-green">Featured</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Start with a proven module—then connect the system
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Each module delivers value on its own. Together, they operate as one integrated People & Culture system.
                </p>
              </div>

              <Link href="/products" className="hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 md:inline-flex">
                Browse products
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {featured.map((p) => (
              <ProductCard key={p!.slug} product={p!} />
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/products" className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5">
              Browse products
            </Link>
          </div>
        </div>
      </section>

      <MatrixNavigator />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-slate-950 p-10 text-white">
            <div className="relative">
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(12,85,74,0.30),transparent_60%)] blur-3xl" />
              <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.25),transparent_60%)] blur-3xl" />

              <div className="relative grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="text-xs font-semibold text-white/70">Ready to see your fastest path?</div>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                    Book a Diagnosis—get a tailored recommendation in 30 minutes
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                    We’ll identify your biggest leverage point and recommend the cleanest starting module—then map how it connects into an integrated system.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Link href="/contact?intent=diagnosis" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                      Book a Diagnosis
                    </Link>
                    <Link href="/contact?intent=demo" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5">
                      Request Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.25),transparent_60%)] blur-3xl" />
      <div className="absolute -left-10 -bottom-12 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(12,85,74,0.25),transparent_60%)] blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-white/70">Command Center</div>
          <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/70 ring-1 ring-white/10">
            Live
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            { label: 'Attraction', value: '+18%' },
            { label: 'Retention', value: '+12%' },
            { label: 'Performance', value: '+9%' },
            { label: 'Engagement', value: '+15%' }
          ].map((k) => (
            <div key={k.label} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-[10px] font-semibold text-white/60">{k.label}</div>
              <div className="mt-1 text-xl font-semibold">{k.value}</div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 animate-shimmer bg-[linear-gradient(90deg,rgba(12,85,74,0.0),rgba(12,85,74,0.9),rgba(246,119,130,0.9),rgba(246,119,130,0.0))] bg-[length:200%_200%]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
          <div className="text-[10px] font-semibold text-white/60">Recommended next actions</div>
          <ul className="mt-2 space-y-2 text-xs text-white/75">
            <li className="flex items-center justify-between">
              <span>Launch onboarding milestone program (30/60/90)</span>
              <span className="text-white/50">EX</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Run compliance “Spot the Problem” campaign</span>
              <span className="text-white/50">IC</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Deploy culture diagnostic to top 3 units</span>
              <span className="text-white/50">Culture</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
