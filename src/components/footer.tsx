import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image src="/brand/logo.svg" alt={site.name} width={180} height={46} className="h-10 w-auto" />
            <div className="mt-3 text-xs font-semibold text-slate-500">{site.arabicName}</div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              {site.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
                MENA
              </span>
              <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
                Enterprise-ready
              </span>
              <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
                Behavioral science + AI + gamification
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4">
            <div>
              <div className="text-sm font-bold text-slate-900">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link className="hover:text-slate-900" href="/about">About</Link></li>
                <li><Link className="hover:text-slate-900" href="/methodology">Methodology</Link></li>
                <li><Link className="hover:text-slate-900" href="/security">Security & Data</Link></li>
                <li><Link className="hover:text-slate-900" href="/ethics-psychometrics">Psychometrics Ethics</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-900">Explore</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link className="hover:text-slate-900" href="/platform">Platform</Link></li>
                <li><Link className="hover:text-slate-900" href="/solutions">Solutions</Link></li>
                <li><Link className="hover:text-slate-900" href="/products">Products</Link></li>
                <li><Link className="hover:text-slate-900" href="/resources">Resources</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-sm font-bold text-slate-900">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div>
                <div className="text-xs font-semibold text-slate-500">Email</div>
                <a className="hover:text-slate-900" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">Phone / WhatsApp</div>
                <a className="hover:text-slate-900" href={`tel:${site.contact.phone}`}>{site.contact.phone}</a>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">Regions</div>
                <div>{site.contact.regions.join(', ')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200/70 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} GoldinKollar. All rights reserved.</div>
          <div className="flex gap-4">
            <Link className="hover:text-slate-900" href="/privacy">Privacy</Link>
            <Link className="hover:text-slate-900" href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
