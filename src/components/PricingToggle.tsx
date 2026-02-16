"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PricingToggleProps {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ isYearly, setIsYearly }) => {
  return (
    <div className="relative">
      <div className="w-[194px] h-[57px] rounded-full bg-[#ECECEC] flex items-center justify-between relative px-[4px]">
        {/* Sliding Pill */}
        <motion.div
          className="absolute top-[8px] left-[4px] w-[93px] h-[41px] bg-white dark:bg-black shadow-[inset_0px_-2px_6px_1px_#14141440] border-[0.3px] border-[#E3E3E3] rounded-full"
          initial={false}
          animate={{ x: isYearly ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />

        {/* Buttons */}
        <button
          onClick={() => setIsYearly(false)}
          className={`relative z-10 w-1/2 h-full flex items-center justify-center text-[13px] font-geist-sans font-medium tracking-[-0.02em] transition-colors ${
            !isYearly ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`relative z-10 w-1/2 h-full flex items-center justify-center text-[13px] font-geist-sans font-medium tracking-[-0.02em] transition-colors ${
            isYearly ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Free badge */}
      <div className="absolute top-[-8px] right-0 w-[77px] h-[18px] bg-[#DDF1D7] border border-[#C5E8BB] rounded-full flex items-center justify-center">
        <span className="text-[8px] font-geist-sans font-medium leading-none tracking-[-0.005em] text-[#027804]">
          2months FREE
        </span>
      </div>
    </div>
  );
};

export default PricingToggle;