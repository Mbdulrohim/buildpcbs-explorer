import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://buildpcbs.com";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BuildPCBs.com",
    short_name: "BuildPCBs",
    description:
      "AI co-pilot that helps hardware engineers design printed circuit boards faster.",
    start_url: "/",
    display: "standalone",
    background_color: "#06080F",
    theme_color: "#0DC2FF",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    lang: "en",
    orientation: "portrait",
    scope: "/",
    id: `${baseUrl}/`,
  };
}
