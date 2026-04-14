"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { Problem } from "./_components/Problem";
import { ListingsDemo } from "./_components/ListingsDemo";
import { HowBuyingWorks } from "./_components/HowBuyingWorks";
import { HowSellingWorks } from "./_components/HowSellingWorks";
import { FreeBanner } from "./_components/FreeBanner";
import { SignupCTA } from "./_components/SignupCTA";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-white text-slate-900 antialiased">
        <Nav />
        <main>
          <Hero />
          <Problem />
          <ListingsDemo />
          <HowBuyingWorks />
          <HowSellingWorks />
          <FreeBanner />
          <SignupCTA />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
