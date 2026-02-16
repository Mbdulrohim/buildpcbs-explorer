import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | BuildPCBs.com",
  description: "There are currently no documentation pages available.",
  openGraph: {
    title: "Documentation | BuildPCBs.com",
    description: "There are currently no documentation pages available.",
    url: "https://buildpcbs.com/documentation",
    siteName: "BuildPCBs.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildPCBs.com Documentation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation | BuildPCBs.com",
    description: "There are currently no documentation pages available.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://buildpcbs.com/documentation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const DocumentationPage = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Documentation
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          There are currently no documentation pages available.
        </p>
      </div>
    </section>
  );
};

export default DocumentationPage;
