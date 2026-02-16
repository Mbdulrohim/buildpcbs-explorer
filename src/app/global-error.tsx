'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-semibold text-[40px] leading-[120%] text-[#4A4A4A] dark:text-gray-200 mb-4">
              Something Went Wrong
            </h1>
            <p className="font-normal text-[17px] leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300 mb-8">
              An unexpected error occurred. Please try again.
            </p>
            <button
              onClick={() => reset()}
              className="flex items-center justify-center w-[157px] h-[50px] rounded-full text-white font-medium bg-gradient-to-r from-[#0038DF] to-[#001E79] hover:opacity-90 transition-opacity mx-auto"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}