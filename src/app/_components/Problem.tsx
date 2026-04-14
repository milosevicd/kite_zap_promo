"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Problem() {
  const { t } = useLocale();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {t.problem.title}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {t.problem.bullets.map((bullet, i) => (
            <li
              key={i}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-700"
            >
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-500 ring-1 ring-slate-200">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed sm:text-base">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
