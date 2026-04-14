"use client";

import GB from "country-flag-icons/react/3x2/GB";
import PT from "country-flag-icons/react/3x2/PT";
import ES from "country-flag-icons/react/3x2/ES";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

const OPTIONS: Array<{
  code: Locale;
  Flag: typeof GB;
  labelKey: keyof ReturnType<typeof useLocale>["t"]["nav"];
}> = [
  { code: "en", Flag: GB, labelKey: "english" },
  { code: "pt", Flag: PT, labelKey: "portuguese" },
  { code: "es", Flag: ES, labelKey: "spanish" },
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="flex items-center gap-1 text-sm">
      {OPTIONS.map((opt) => {
        const active = opt.code === locale;
        const { Flag } = opt;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={active}
            className={`flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors ${
              active
                ? "font-semibold text-sky-700 underline underline-offset-4"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Flag
              title={t.nav[opt.labelKey]}
              className="block h-4 w-6 rounded-sm shadow-sm ring-1 ring-slate-200"
            />
            <span>{t.nav[opt.labelKey]}</span>
          </button>
        );
      })}
    </div>
  );
}
