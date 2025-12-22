'use client';

import * as React from 'react';
import Link from 'next/link';

import { site } from '@/lib/site';

const intents = [
  { value: 'diagnosis', label: 'Book a Diagnosis (30 min)' },
  { value: 'demo', label: 'Request a Demo' },
  { value: 'quote', label: 'Request a Quote' },
  { value: 'security', label: 'Security & Governance' },
  { value: 'ethics', label: 'Ethics & Psychometrics' },
  { value: 'case-pack', label: 'Case Pack / Examples' },
  { value: 'career', label: 'Careers' },
  { value: 'other', label: 'Other' }
];

export function ContactForm({ defaultIntent, defaultProduct }: { defaultIntent?: string; defaultProduct?: string }) {
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [role, setRole] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [region, setRegion] = React.useState('Egypt');
  const [intent, setIntent] = React.useState(defaultIntent || 'diagnosis');
  const [product, setProduct] = React.useState(defaultProduct || '');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `GoldinKollar Website — ${intent}${product ? ` — ${product}` : ''}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Role: ${role}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Region: ${region}`,
      `Intent: ${intent}`,
      `Product: ${product || '-'}`,
      '',
      'Message:',
      message
    ].join('\n');

    const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur">
      <div className="text-sm font-bold text-slate-900">Send a request</div>
      <div className="mt-2 text-sm text-slate-600">
        This form opens your email client with a prefilled message. Prefer direct email?{' '}
        <a className="font-semibold text-brand-green hover:underline" href={`mailto:${site.contact.email}`}>
          {site.contact.email}
        </a>
      </div>

      <form onSubmit={submit} className="mt-6 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full name">
            <input value={name} onChange={(e) => setName(e.target.value)} required className="input" placeholder="Your name" />
          </Field>
          <Field label="Company">
            <input value={company} onChange={(e) => setCompany(e.target.value)} className="input" placeholder="Company / organization" />
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Role / title">
            <input value={role} onChange={(e) => setRole(e.target.value)} className="input" placeholder="e.g., Head of HR" />
          </Field>
          <Field label="Region">
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="input">
              {site.contact.regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Work email">
            <input value={email} onChange={(e) => setEmail(e.target.value)} required className="input" placeholder="name@company.com" type="email" />
          </Field>
          <Field label="Phone / WhatsApp">
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input" placeholder="+20 ..." />
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Intent">
            <select value={intent} onChange={(e) => setIntent(e.target.value)} className="input">
              {intents.map((i) => (
                <option key={i.value} value={i.value}>
                  {i.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Product (optional)">
            <input value={product} onChange={(e) => setProduct(e.target.value)} className="input" placeholder="e.g., ai-onboarding-ecosystem" />
          </Field>
        </div>

        <Field label="Message">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input min-h-[120px]"
            placeholder="Tell us your objective, timeline, and scale..."
          />
        </Field>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
        >
          Send request
        </button>

        {submitted ? (
          <div className="mt-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            If your email client didn’t open, you can email us directly at{' '}
            <a className="font-semibold text-brand-green hover:underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            .
          </div>
        ) : null}

        <div className="mt-4 text-xs text-slate-500">
          By contacting us, you agree to share the provided details to respond to your request. See{' '}
          <Link className="underline" href="/privacy">
            Privacy
          </Link>
          .
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-600">{label}</span>
      {children}
    </label>
  );
}
