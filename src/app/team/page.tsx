import { PageHero } from '@/components/sections/page-hero';
import { Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: 'Islam Yousry',
    role: 'Head of Research & Strategy',
    image: 'https://iili.io/fEHi4vR.jpg',
    bio: 'Leading behavioral science research and strategic initiatives across the MENA region.',
    email: 'islam.yousry@goldinkollar.com',
    linkedin: '#'
  }
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Meet the experts behind GoldinKollar's innovative people and culture solutions."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-sage/10 to-brand-blue/10 p-8 transition hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-white/50 transition group-hover:ring-brand-blue/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-brand-blue">{member.role}</p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-pink px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-blue/30 bg-white/50 px-4 py-2 text-sm font-bold text-brand-blue backdrop-blur transition hover:-translate-y-0.5"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Join Our Team</h2>
            <p className="mt-4 text-slate-600">
              We're always looking for talented individuals to join our mission.
            </p>
            <Link
              href="/careers"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
