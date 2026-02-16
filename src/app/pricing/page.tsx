import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing | BuildPCBs.com",
  description:
    "Choose the perfect plan for your PCB design needs. From basic to premium plans with flexible monthly and yearly pricing.",
  openGraph: {
    title: "Pricing | BuildPCBs.com",
    description:
      "Choose the perfect plan for your PCB design needs. From basic to premium plans with flexible monthly and yearly pricing.",
    url: "https://buildpcbs.com/pricing",
    siteName: "BuildPCBs.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildPCBs.com Pricing Plans",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | BuildPCBs.com",
    description:
      "Choose the perfect plan for your PCB design needs. From basic to premium plans with flexible monthly and yearly pricing.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://buildpcbs.com/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
