"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function HowBuyingWorks() {
  const { t } = useLocale();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {t.buying.title}
        </h2>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {t.buying.steps.map((step, i) => (
            <li
              key={i}
              className="relative rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <aside className="mt-10 rounded-2xl border-2 border-sky-200 bg-sky-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl ring-1 ring-sky-200"
            >
              🔒
            </span>
            <div>
              <h3 className="text-lg font-semibold text-sky-900">
                {t.buying.privacyTitle}
              </h3>
              <p className="mt-1 text-sky-900/80">{t.buying.privacyBody}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
