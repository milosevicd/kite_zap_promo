"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function FreeBanner() {
  const { t } = useLocale();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-10 text-white shadow-lg sm:px-12 sm:py-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-white/30">
            <span aria-hidden>✨</span> {t.free.badge}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.free.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-emerald-50 sm:text-lg">
            {t.free.body}
          </p>
          <p className="mt-6 max-w-2xl text-sm italic text-emerald-100">
            {t.free.note}
          </p>
        </div>
      </div>
    </section>
  );
}
