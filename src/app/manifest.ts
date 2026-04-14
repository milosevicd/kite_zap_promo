import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KiteZap",
    short_name: "KiteZap",
    description:
      "Search and filter real second-hand kite listings in Portugal.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0EA5E9",
    icons: [
      {
        src: "/logos/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logos/logo-mono.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "monochrome",
      },
    ],
  };
}
