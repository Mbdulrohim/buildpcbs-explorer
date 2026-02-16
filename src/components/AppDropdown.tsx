import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AppDropdown = () => {
  return (
    <div className="w-[375px] h-[201px] relative bg-gradient-to-r from-[#FAFAFA] to-[#DDE2FF] dark:from-[#1A1A1A] dark:to-[#2A2A2A] border-[0.5px] border-[#CED6FF] dark:border-[#333333] rounded-[14px] overflow-hidden shadow-lg">
      {/* Left Content */}
      <div className="absolute left-[13px] top-[60px] flex flex-col gap-8">
        {/* ... header and links ... */}
        {/* I will only replace the top lines and the motion div, need to respect the file content */}
      </div>

      {/* Header */}
      <div className="absolute left-[13px] top-[60px] flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-medium text-[17px] leading-[150%] tracking-[-0.005em] text-[#0038DF] dark:text-[#5C94FF] text-center w-[98px]">
            Mobile App
          </span>
        </div>

        {/* Links Row */}
        <div className="flex items-center gap-[10px]">
          <Link
            href="/prompt"
            className="text-[14px] font-normal leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-[#AAAAAA] hover:text-[#0038DF] dark:hover:text-[#5C94FF] transition-colors"
          >
            Prompt
          </Link>
          <div className="w-[3px] h-[3px] rounded-full bg-[#777777]" />
          <Link
            href="/quests"
            className="text-[14px] font-normal leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-[#AAAAAA] hover:text-[#0038DF] dark:hover:text-[#5C94FF] transition-colors"
          >
            Quests
          </Link>
          <div className="w-[3px] h-[3px] rounded-full bg-[#777777]" />
          <Link
            href="/monitor"
            className="text-[14px] font-normal leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-[#AAAAAA] hover:text-[#0038DF] dark:hover:text-[#5C94FF] transition-colors"
          >
            Monitor
          </Link>
        </div>
      </div>

      {/* Right Content - iPhone Visual */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[12px] bottom-[12px] w-[120.6px] h-[201px] bg-white dark:bg-[#0A0A0A] border-[1.2px] border-[#C1C1C1] dark:border-[#333333] rounded-[13.2px] shadow-sm pointer-events-none overflow-hidden font-['DM_Sans'] flex flex-col justify-end pb-[1px]"
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Subtle gray curve from top left */}
          <div className="absolute w-[200%] h-[100%] left-[-50%] top-[-30%] bg-gradient-to-b from-gray-50 via-transparent to-transparent rounded-[100%] transform -rotate-12 opacity-80" />
          {/* Second curve */}
          <div className="absolute w-[200%] h-[100%] left-[-20%] top-[20%] bg-gradient-to-tr from-gray-50/50 via-gray-100/20 to-transparent rounded-[100%] transform -rotate-12 opacity-60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center w-full px-3 gap-3 mb-4">
          {/* Icons Row */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-[3px]">
              {/* Lightning Icon */}
              <svg width="5" height="5" viewBox="0 0 24 24" fill="#0038DF">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
              <span className="text-[4.5px] font-medium text-[#4B4B4B] dark:text-[#DDDDDD] whitespace-nowrap">
                Build hardware
              </span>
            </div>
            <div className="w-[0.5px] h-[5px] bg-[#D1D1D1]" />
            <div className="flex items-center gap-[3px]">
              {/* Link/Coin Icon */}
              <svg
                width="5"
                height="5"
                viewBox="0 0 24 24"
                fill="#0038DF"
                className="rotate-45"
              >
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
              <span className="text-[4.5px] font-medium text-[#4B4B4B] dark:text-[#DDDDDD] whitespace-nowrap">
                Earn $build
              </span>
            </div>
          </div>

          {/* Headline */}
          <h3 className="text-[10px] font-semibold text-[#111] dark:text-white tracking-tight text-center mt-1">
            Think it. <span className="text-[#0038DF]">$BUILD</span> it.
          </h3>

          {/* Continue Button */}
          <div className="w-full h-[20px] bg-[#0038DF] rounded-[10px] flex items-center justify-center shadow-[0_2px_8px_rgba(0,56,223,0.3)] mt-2">
            <span className="text-[6.5px] font-medium text-white tracking-wide">
              Continue
            </span>
          </div>

          {/* Footer */}
          <p className="text-[2.5px] text-[#888] text-center leading-[150%] mt-1 opacity-80">
            By using buildPCBs, you are agreeing to our
            <br />
            <span className="text-[#0038DF] font-medium">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-[#0038DF] font-medium">Privacy Policy</span>
          </p>
        </div>
      </motion.div>

      {/* App Store Button (Bottom Left of Card) - From Spec: Frame 1000015340 */}
      <div className="absolute left-[13px] top-[142px] flex items-center gap-[10px] px-[10px] py-[10px] bg-gradient-to-r from-[#0038DF] to-[#001E79] rounded-[99px] shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
        {/* Apple Icon Placeholder */}
        <svg
          className="w-[20px] h-[20px] text-white fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.23-3.14-2.47-2.92-4.25-2.42-10.55 2.76-10.74 1.48-.05 2.58.97 3.41.97.83 0 2.21-1.21 3.73-1.29 1.4-.07 2.68.68 3.41 1.77-3.08 1.49-2.58 5.76.62 7.07-.31.85-.71 1.68-1.18 2.19zM15.28 6.4c.73-.89 1.22-2.14 1.08-3.38-1.05.04-2.32.7-3.07 1.59-.67.8-1.2 2.08-1.05 3.3 1.18.09 2.37-.59 3.04-1.51z" />
        </svg>
        <span className="text-[13px] font-medium leading-[17px] tracking-[-0.005em] text-white whitespace-nowrap">
          Get on AppStore
        </span>
      </div>
    </div>
  );
};

export default AppDropdown;
