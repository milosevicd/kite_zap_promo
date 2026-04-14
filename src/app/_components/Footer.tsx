"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <p className="text-center text-sm italic leading-relaxed text-slate-500">
          {t.footer.note}
        </p>
        <p className="mt-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} KiteZap
        </p>
      </div>
    </footer>
  );
}
