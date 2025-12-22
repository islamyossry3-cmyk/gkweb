import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

export function IllustrationHero({
  title,
  subtitle,
  imageSrc,
  primaryCta
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#e6f0ee] pt-24 lg:pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(12,85,74,0.05)_100%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

        <div className="relative z-20 max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-green sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            {subtitle}
          </p>
          {primaryCta && (
            <div className="mt-8">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-xl bg-brand-pink px-8 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#ff8a95]"
              >
                {primaryCta.label}
              </Link>
            </div>
          )}
        </div>

        <div className="relative z-10 lg:h-[600px]">
           <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
             <Image
               src={imageSrc}
               alt="Hero Illustration"
               fill
               className="object-cover object-center"
               priority
             />
             <div className="noise absolute inset-0 z-10 mix-blend-overlay opacity-30" />
           </div>
        </div>
      </div>
    </section>
  );
}
