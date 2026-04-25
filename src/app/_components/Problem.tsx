"use client";

import { useLocale } from "@/i18n/LocaleProvider";

const icons = [
  // Vanishing listings — hourglass with falling sand
  (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden
    >
      <path d="M6 3h12" />
      <path d="M6 21h12" />
      <path d="M7 3v3a5 5 0 0 0 2 4l3 2 3-2a5 5 0 0 0 2-4V3" />
      <path d="M7 21v-3a5 5 0 0 1 2-4l3-2 3 2a5 5 0 0 1 2 4v3" />
      <path d="M10 7.5h4" />
    </svg>
  ),
  // No search / endless scroll — magnifying glass over wavy lines
  (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden
    >
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="M14.5 14.5 19 19" />
      <path d="M8 9.5c.8-.8 1.7-.8 2.5 0s1.7.8 2.5 0" />
      <path d="M8 12c.8-.8 1.7-.8 2.5 0s1.7.8 2.5 0" />
    </svg>
  ),
  // Already snapped up — price tag with a checkmark (sold)
  (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden
    >
      <path d="M20.5 12.5 12.5 20.5a2 2 0 0 1-2.8 0L3 13.8V4h9.8l7.7 7.7a2 2 0 0 1 0 2.8Z" />
      <circle cx="7.5" cy="8.5" r="1.25" />
      <path d="m9.5 14 2 2 4-4" />
    </svg>
  ),
  // Zero replies — chat bubble with an X inside
  (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="m9.5 9.5 5 5" />
      <path d="m14.5 9.5-5 5" />
    </svg>
  ),
];

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
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-600 ring-1 ring-slate-200">
                {icons[i]}
              </span>
              <p className="text-sm leading-relaxed sm:text-base">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
