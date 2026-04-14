"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white"
    >
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
            <span aria-hidden>🪁</span> Portugal · Beta
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>
          <p className="mt-5 text-lg text-slate-600 sm:text-xl">
            {t.hero.subhead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
            >
              {t.hero.ctaBeta}
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              {t.hero.ctaNotify}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
