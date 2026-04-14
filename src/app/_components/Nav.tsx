"use client";

import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900"
        >
          <span aria-hidden className="text-xl">🪁</span>
          <span>KiteZap</span>
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
