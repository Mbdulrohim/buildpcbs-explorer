import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | BuildPCBs.com",
  description: "There are currently no help center pages available.",
};

const HelpCenterPage = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Help Center
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          There are currently no help center pages available.
        </p>
      </div>
    </section>
  );
};

export default HelpCenterPage;
