"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function HowSellingWorks() {
  const { t } = useLocale();

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {t.selling.title}
        </h2>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {t.selling.steps.map((step, i) => (
            <li
              key={i}
              className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-center text-sm font-medium text-slate-600 sm:text-base">
          {t.selling.tagline}
        </p>
      </div>
    </section>
  );
}
