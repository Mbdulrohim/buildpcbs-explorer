import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BuildPCBs.com",
  description: "Terms of Service for BuildPCBs.com",
};

const TermsPage = () => {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-black py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last updated: October 16, 2025
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Welcome to BuildPCBs.com. These Terms of Service ("Terms") govern
            your use of our website and services. By accessing or using our
            services, you agree to be bound by these Terms.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            By using BuildPCBs.com, you accept and agree to be bound by the
            terms and provision of this agreement.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            2. Use License
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Permission is granted to temporarily use BuildPCBs.com for personal,
            non-commercial transitory viewing only.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            3. Disclaimer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The materials on BuildPCBs.com are provided on an 'as is' basis.
            BuildPCBs.com makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            4. Limitations
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            In no event shall BuildPCBs.com or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use BuildPCBs.com, even if BuildPCBs.com or a
            BuildPCBs.com authorized representative has been notified orally or
            in writing of the possibility of such damage.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            5. Accuracy of Materials
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The materials appearing on BuildPCBs.com could include technical,
            typographical, or photographic errors. BuildPCBs.com does not
            warrant that any of the materials on its website are accurate,
            complete, or current.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            6. Links
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            BuildPCBs.com has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by
            BuildPCBs.com of the site.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            7. Modifications
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            BuildPCBs.com may revise these terms of service for its website at
            any time without notice. By using this website you are agreeing to
            be bound by the then current version of these terms of service.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            8. Governing Law
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            These terms and conditions are governed by and construed in
            accordance with the laws of [Your Jurisdiction] and you irrevocably
            submit to the exclusive jurisdiction of the courts in that state or
            location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
