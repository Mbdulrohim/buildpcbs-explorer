import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | BuildPCBs.com",
  description: "There are currently no FAQ pages available.",
};

const FAQPage = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          FAQ
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          There are currently no FAQ pages available.
        </p>
      </div>
    </section>
  );
};

export default FAQPage;
