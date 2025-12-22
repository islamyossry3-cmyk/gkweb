import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/content/products';
import { Badge } from './ui/badge';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="bg-slate-900/5 text-slate-700">{product.categoryLabel}</Badge>
        <Badge className="bg-[linear-gradient(135deg,rgba(12,85,74,0.10),rgba(246,119,130,0.10))] text-slate-800">
          {product.domain.replace('-', ' ')}
        </Badge>
      </div>

      <div className="mt-4 text-lg font-semibold text-slate-900">{product.name}</div>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{product.summary}</p>

      <div className="mt-5 flex items-center justify-between text-sm font-semibold text-brand-green">
        <span>View details</span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.22),transparent_60%)] opacity-0 blur-2xl transition group-hover:opacity-100" />
    </Link>
  );
}
