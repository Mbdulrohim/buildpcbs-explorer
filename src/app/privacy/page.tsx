import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BuildPCBs.com",
  description: "Privacy Policy for BuildPCBs.com",
};

const PrivacyPage = () => {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-black py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last updated: October 16, 2025
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            This Privacy Policy describes how BuildPCBs.com ("we", "us", or
            "our") collects, uses, and shares information about you when you use
            our website and services.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We collect information you provide directly to us, such as when you
            create an account, use our services, or contact us for support. This
            may include your name, email address, and any other information you
            choose to provide.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We use the information we collect to provide, maintain, and improve
            our services, process transactions, send you technical notices and
            support messages, and respond to your comments and questions.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy or as required by law.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            5. Cookies
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We use cookies and similar technologies to enhance your experience
            on our website. You can control cookie settings through your browser
            preferences.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            7. Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If you have any questions about this Privacy Policy, please contact
            us at contact@buildpcbs.com.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
