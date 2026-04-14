"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { MOCK_LISTINGS } from "./mockListings";

export function ListingsDemo() {
  const { t } = useLocale();
  const filters = t.listings.filters;

  const filterRows: Array<{ label: string; key: string }> = [
    { label: filters.type, key: "type" },
    { label: filters.brand, key: "brand" },
    { label: filters.model, key: "model" },
    { label: filters.year, key: "year" },
    { label: filters.priceRange, key: "priceRange" },
    { label: filters.condition, key: "condition" },
    { label: filters.location, key: "location" },
  ];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {t.listings.title}
          </h2>
          <p className="mt-3 text-slate-600">{t.listings.subtitle}</p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              🔎
            </span>
            <input
              type="text"
              readOnly
              placeholder={t.listings.searchPlaceholder}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {t.listings.filtersTitle}
            </h3>
            <div className="mt-4 space-y-4">
              {filterRows.map((row) => (
                <div key={row.key}>
                  <label className="block text-xs font-medium text-slate-600">
                    {row.label}
                  </label>
                  <div className="mt-1 flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                    <span>{t.listings.anyOption}</span>
                    <span aria-hidden>▾</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid gap-4 sm:grid-cols-2">
            {MOCK_LISTINGS.map((l) => (
              <article
                key={l.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-sky-100 to-sky-50 text-5xl">
                  <span aria-hidden>{l.emoji}</span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-sky-700">
                        {t.listings.types[l.type]}
                      </p>
                      <h3 className="mt-0.5 font-semibold text-slate-900">
                        {l.brand} {l.model}
                      </h3>
                    </div>
                    <div className="whitespace-nowrap text-right">
                      <p className="text-lg font-bold text-slate-900">
                        €{l.price}
                      </p>
                      <p className="text-xs text-slate-500">
                        {t.listings.card.year} {l.year}
                      </p>
                    </div>
                  </div>
                  <dl className="mt-3 grid grid-cols-2 gap-y-1 text-xs text-slate-600">
                    <dt className="text-slate-400">{t.listings.card.condition}</dt>
                    <dd className="text-right text-slate-700">
                      {t.listings.conditions[l.condition]}
                    </dd>
                    <dt className="text-slate-400">{t.listings.card.location}</dt>
                    <dd className="text-right text-slate-700">{l.location}</dd>
                  </dl>
                  <button
                    type="button"
                    className="mt-4 rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-800 transition-colors hover:bg-sky-100"
                  >
                    {t.listings.card.express}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
