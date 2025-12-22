"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { AnimatedWord } from '@/components/effects/animated-word';
import { HeroIntro, HeroContent, HeroImage } from '@/components/effects/hero-intro';

export function MetricHero() {
  return (
    <HeroIntro>
      <section className="relative h-screen overflow-hidden pt-16">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/40 z-0" />
        <div className="noise-overlay z-0" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl z-0" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-pink/10 blur-3xl z-0" />

        <div className="relative z-20 mx-auto max-w-7xl pl-6 h-[calc(100vh-4rem)] flex items-center">
          <div className="grid items-center gap-8 lg:grid-cols-2 w-full">

            <div className="space-y-6 lg:space-y-8">
              <HeroContent delay={0.2} direction="up">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-sage/30 bg-brand-dark/50 px-4 py-2 text-sm font-semibold text-brand-blue backdrop-blur">
                  <Zap className="h-4 w-4 stroke-[1.5px]" />
                  MENA • Enterprise-ready • AI-Powered
                </div>
              </HeroContent>

              <HeroContent delay={0.35} direction="up">
                <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl overflow-visible" style={{ lineHeight: '1.3' }}>
                  People & Culture, <AnimatedWord />
                </h1>
              </HeroContent>

              <HeroContent delay={0.5} direction="up">
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
                  Integrated systems powered by behavioral science, AI, and gamification to drive measurable outcomes across attraction, retention, performance, and engagement.
                </p>
              </HeroContent>

              <HeroContent delay={0.65} direction="up">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Link
                    href="/contact?intent=demo"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-pink px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-pink/90"
                  >
                    Request Demo
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[1.5px] transition group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact?intent=diagnosis"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-brand-sage/30 bg-white/5 px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-white backdrop-blur transition hover:-translate-y-1"
                  >
                    Book Diagnosis
                  </Link>
                </div>
              </HeroContent>
            </div>

            <HeroImage delay={0.4} className="relative hidden lg:flex lg:items-end lg:justify-end h-full">
              <img
                src="https://iili.io/fEFQ9KN.png"
                alt="Platform Dashboard"
                className="relative z-10 w-auto h-full max-h-[80vh] object-contain object-right-bottom"
              />
            </HeroImage>
          </div>
        </div>
      </section>
    </HeroIntro>
  );
}
