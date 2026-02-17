import React from "react";
import CTA from "./CTA";
import Link from "next/link";
import Image from "next/image";

const LandingFooter = () => {
  return (
    <footer className="my-12 w-full">
      {/* Mobile-only links */}
      <div className="md:hidden text-gray-800 dark:text-gray-200 px-4">
        <div className="pt-12 space-y-16">
          {/* Logo/Tagline Section */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="buildpcbs logo"
                width={24}
                height={20}
              />
              <span className="font-medium text-[17px] leading-none tracking-[-0.04em]">
                buildpcbs
              </span>
            </Link>
            <p className="mt-4 text-base font-normal leading-[150%] w-[268px]">
              The AI + Web3 Hardware Network. Think it. Chat it. Build it.
            </p>
          </div>

          {/* 2x2 Grid Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-lg text-black">Features</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="" className="text-base font-normal hover:opacity-80">
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-base font-normal hover:opacity-80"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="" className="text-base font-normal hover:opacity-80">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg text-black">About Us</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="/blog"
                    className="text-base font-normal hover:opacity-80"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="text-base font-normal hover:opacity-80">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg text-black">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="/faq"
                    className="text-base font-normal hover:opacity-80"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/help-center"
                    className="text-base font-normal hover:opacity-80"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@buildpcbs.com"
                    className="text-base font-normal hover:opacity-80"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg text-black">Follow Us</h3>
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href=""
                  aria-label="X (formerly Twitter)"
                  className="hover:opacity-80"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="" aria-label="LinkedIn" className="hover:opacity-80">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="" aria-label="Instagram" className="hover:opacity-80">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-only links */}
      <div className="hidden md:block text-gray-800 dark:text-gray-200 w-full max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-6 gap-8 pt-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="buildpcbs logo"
                width={24}
                height={20}
              />
              <span className="font-medium text-[17px] leading-none tracking-[-0.04em]">
                buildpcbs
              </span>
            </Link>
            <p className="mt-4 text-base font-normal leading-[150%] w-[268px]">
              The AI + Web3 Hardware Network. Think it. Chat it. Build it.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="" className="text-base font-normal hover:opacity-80">
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-base font-normal hover:opacity-80"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="" className="text-base font-normal hover:opacity-80">
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg">About Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/blog"
                  className="text-base font-normal hover:opacity-80"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="text-base font-normal hover:opacity-80"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/faq"
                  className="text-base font-normal hover:opacity-80"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/help-center"
                  className="text-base font-normal hover:opacity-80"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@buildpcbs.com"
                  className="text-base font-normal hover:opacity-80"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg">Follow Us</h3>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://x.com/buildpcbswithAI"
                aria-label="X (formerly Twitter)"
                className="hover:opacity-80"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/buildpbcs/"
                aria-label="LinkedIn"
                className="hover:opacity-80"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/buildpcb?igsh=MWNjdmR0ODl2a2pxdA=="
                aria-label="Instagram"
                className="hover:opacity-80"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Text */}
      <div className="w-full md:w-[1105px] md:mx-auto text-center pt-4 pb-0 md:py-4">
        <h4 className="text-[85px] md:text-[240px] font-extrabold tracking-[-0.04em] text-[#0038DF] leading-none">
          buildpcbs
        </h4>
      </div>

      {/* Copyright section (visible on all sizes) */}
      <div className="w-full md:w-[1105px] md:mx-auto text-[#777777] px-4 sm:px-6 lg:px-8">
        <div className="w-full mt-8 md:mt-12 pt-8 text-center text-sm">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
            <p>&copy; 2025 buildpcbs. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="/terms" className="hover:opacity-80">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:opacity-80">
                Privacy Policy
              </a>
              <a href="" className="hover:opacity-80">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
