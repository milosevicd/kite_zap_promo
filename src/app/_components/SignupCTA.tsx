"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

type Option = "beta" | "notify";
type Step = "choose" | "form" | "followup" | "done";
type Intent = "buy" | "sell" | "both";

export function SignupCTA() {
  const { t } = useLocale();
  const [option, setOption] = useState<Option>("beta");
  const [step, setStep] = useState<Step>("choose");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  function pick(o: Option) {
    setOption(o);
    if (step !== "followup" && step !== "done") setStep("form");
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!whatsapp.trim()) return;
    setStep("followup");
  }

  function pickIntent(intent: Intent) {
    void intent;
    setStep("done");
  }

  return (
    <section id="cta" className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">{t.cta.subtitle}</p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => pick("beta")}
              className={`group rounded-xl border-2 p-5 text-left transition-colors ${
                option === "beta"
                  ? "border-sky-400 bg-sky-100"
                  : "border-sky-200 bg-sky-50 hover:border-sky-400 hover:bg-sky-100"
              }`}
            >
              <p className="text-base font-bold text-sky-900">
                {t.cta.betaLabel}
              </p>
              <p className="mt-1 text-sm text-sky-900/70">{t.cta.betaSub}</p>
              <span className="mt-3 inline-flex items-center text-sm font-semibold text-sky-700 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </button>
            <button
              type="button"
              onClick={() => pick("notify")}
              className={`group rounded-xl border-2 p-5 text-left transition-colors ${
                option === "notify"
                  ? "border-slate-400 bg-slate-50"
                  : "border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              <p className="text-base font-bold text-slate-900">
                {t.cta.notifyLabel}
              </p>
              <p className="mt-1 text-sm text-slate-600">{t.cta.notifySub}</p>
              <span className="mt-3 inline-flex items-center text-sm font-semibold text-slate-700 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </button>
          </div>

          {step === "form" && (
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <p className="text-sm font-semibold text-slate-900">
                {option === "beta" ? t.cta.betaLabel : t.cta.notifyLabel}
              </p>
              <div>
                <label
                  htmlFor="wa"
                  className="block text-sm font-medium text-slate-700"
                >
                  {t.cta.whatsappLabel}
                </label>
                <input
                  id="wa"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder={t.cta.whatsappPlaceholder}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div>
                <label
                  htmlFor="em"
                  className="block text-sm font-medium text-slate-700"
                >
                  {t.cta.emailLabel}{" "}
                  <span className="text-xs text-slate-400">
                    ({t.cta.emailOptional})
                  </span>
                </label>
                <input
                  id="em"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.cta.emailPlaceholder}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-sky-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
              >
                {t.cta.submit}
              </button>
            </form>
          )}

          {step === "followup" && (
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-slate-900">
                {t.cta.followUp}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => pickIntent("buy")}
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  {t.cta.buy}
                </button>
                <button
                  type="button"
                  onClick={() => pickIntent("sell")}
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  {t.cta.sell}
                </button>
                <button
                  type="button"
                  onClick={() => pickIntent("both")}
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  {t.cta.both}
                </button>
              </div>
            </div>
          )}

          {step === "done" && (
            <div className="mt-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                <span aria-hidden>✓</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {t.cta.thanksTitle}
              </h3>
              <p className="mx-auto mt-2 max-w-md text-slate-600">
                {t.cta.thanksBody}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
