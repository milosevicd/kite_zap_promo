import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KiteZap — Second-hand kite gear in Portugal",
  description:
    "Tired of digging through WhatsApp groups? KiteZap lets you search and filter real second-hand kite listings — find exactly what you need in seconds.",
  icons: {
    icon: [
      { url: "/logos/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logos/logo.svg",
    apple: "/logos/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
