import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Careers'
};

const roles = [
  {
    title: 'Product / Experience Designer',
    type: 'Full-time • Hybrid',
    desc: 'Design modern human+data experiences: onboarding ecosystems, gamified learning, dashboards, and interaction systems.'
  },
  {
    title: 'People Analytics Consultant',
    type: 'Contract • Remote',
    desc: 'Translate signals into actionable models: journey friction, pulse analysis, segmentation, and governance reporting.'
  },
  {
    title: 'Facilitator (Culture & Team Experiences)',
    type: 'Part-time • On-site (MENA)',
    desc: 'Lead psychology-based experiences, team building, hackathons, and activation sessions.'
  },
  {
    title: 'Full‑Stack Engineer (React / Node)',
    type: 'Full-time • Remote',
    desc: 'Build interactive tools and platform modules. Strong UI craft + performance mindset.'
  }
] as const;

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Build the future of People & Culture systems"
        subtitle="We combine behavioral science, AI, and gamification to build products that make work better—and measurable."
        primaryCta={{ label: 'Apply', href: `/contact?intent=career` }}
        secondaryCta={{ label: 'Explore Products', href: '/products' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {roles.map((r) => (
                <div key={r.title} className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur">
                  <div className="text-xs font-semibold text-slate-500">{r.type}</div>
                  <div className="mt-2 text-xl font-semibold text-slate-900">{r.title}</div>
                  <div className="mt-3 text-sm text-slate-600">{r.desc}</div>
                  <Link
                    href={`/contact?intent=career&role=${encodeURIComponent(r.title)}`}
                    className="mt-6 inline-flex rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                  >
                    Apply for this role
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 rounded-3xl bg-slate-950 p-10 text-white">
            <div className="text-xs font-semibold text-white/70">Don’t see your role?</div>
            <div className="mt-2 font-display text-2xl font-semibold">Send a portfolio or profile anyway</div>
            <p className="mt-2 text-sm text-white/75">
              Email us at <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a> with your portfolio, CV, and a short note on how you’d contribute.
            </p>
            <div className="mt-5">
              <Link href="/contact?intent=career" className="inline-flex rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5">
                Open application form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
