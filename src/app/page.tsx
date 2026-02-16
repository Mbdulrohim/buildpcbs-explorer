import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient"; // Assuming the main page component was renamed
import { WaitlistProvider } from "@/context/WaitlistContext";

export const metadata: Metadata = {
  title: "BuildPCBs | The AI + Web3 Hardware Network",
  description:
    "Think it. Chat it. Build it. Sell it. The first decentralized manufacturing network where AI turns text into physical products.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "BuildPCBs | The AI + Web3 Hardware Network",
    description:
      "A full AI + Web3 hardware creation network. Describe a device in plain text, and the system generates the PCB, schematic, BOM, and manufacturing instructions.",
    url: "https://buildpcbs.com",
    siteName: "BuildPCBs.com",
    images: [
      {
        url: "/og-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "BuildPCBs.com - AI-Powered PCB Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildPCBs | The AI + Web3 Hardware Network",
    description:
      "Think it. Chat it. Build it. Sell it. The first decentralized manufacturing network.",
    images: ["/og-image.png?v=2"],
  },
  alternates: {
    canonical: "https://buildpcbs.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "BuildPCBs Team" }],
  creator: "BuildPCBs",
  publisher: "BuildPCBs.com",
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "BuildPCBs.com",
        url: "https://buildpcbs.com",
        logo: "https://buildpcbs.com/logo.png",
        description: "AI-powered PCB design platform for electronics engineers",
        foundingDate: "2024",
        sameAs: [
          "https://twitter.com/buildpcbwithAi",
          "https://linkedin.com/company/buildpcbs",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "BuildPCBs.com",
        url: "https://buildpcbs.com",
        description: "AI-powered PCB design platform for electronics engineers",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://buildpcbs.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ]),
  },
};

export default function Page() {
  return (
    <WaitlistProvider>
      <LandingPageClient />
    </WaitlistProvider>
  );
}

