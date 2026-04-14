"use client";

import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" aria-label="KiteZap" className="flex items-center">
          <img
            src="/logos/logo-wordmark.svg"
            alt="KiteZap"
            className="h-8 w-auto sm:h-9"
          />
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
