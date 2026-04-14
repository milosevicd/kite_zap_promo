"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import en from "./locales/en";
import pt from "./locales/pt";
import es from "./locales/es";
import type { Dict, Locale } from "./types";

const DICTS: Record<Locale, Dict> = { en, pt, es };

const STORAGE_KEY = "kitezap:locale";
const CHANGE_EVENT = "kitezap:locale-change";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LocaleContext = createContext<Ctx | null>(null);

function isLocale(v: unknown): v is Locale {
  return v === "en" || v === "pt" || v === "es";
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Locale {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // ignore storage access errors
  }
  return "en";
}

function getServerSnapshot(): Locale {
  return "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((l: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore storage access errors
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: DICTS[locale] }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
