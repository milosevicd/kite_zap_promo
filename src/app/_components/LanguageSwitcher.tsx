"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

const OPTIONS: Array<{ code: Locale; flag: string; labelKey: keyof ReturnType<typeof useLocale>["t"]["nav"] }> = [
  { code: "en", flag: "🇬🇧", labelKey: "english" },
  { code: "pt", flag: "🇵🇹", labelKey: "portuguese" },
  { code: "es", flag: "🇪🇸", labelKey: "spanish" },
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="flex items-center gap-1 text-sm">
      {OPTIONS.map((opt) => {
        const active = opt.code === locale;
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
            <span aria-hidden className="text-base leading-none">
              {opt.flag}
            </span>
            <span>{t.nav[opt.labelKey]}</span>
          </button>
        );
      })}
    </div>
  );
}
