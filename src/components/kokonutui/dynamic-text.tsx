"use client";

/**
 * @author: @dorian_baffier
 * @description: Dynamic Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface DynamicTextProps {
  staticPrefix?: string;
  staticSuffix?: string;
  dynamicTexts?: string[];
  interval?: number;
  className?: string;
  dynamicClassName?: string;
}

const DynamicText = ({
  staticPrefix = "Design and build circuit boards with ",
  staticSuffix = "",
  dynamicTexts = [
    "plain English.",
    "text.",
    "your words, instantly.",
    "natural language.",
  ],
  interval = 4000,
  className = "",
  dynamicClassName = "",
}: DynamicTextProps = {}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= dynamicTexts.length) {
          return 0; // Loop back to start
        }

        return nextIndex;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [isAnimating, dynamicTexts.length, interval]);

  // Animation variants for the text
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="text-[#444444] dark:text-gray-200 md:text-[#4A4A4A]"
        style={{
          fontFamily: "DM Sans",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "40px",
          lineHeight: "120%",
          letterSpacing: "0%",
        }}
      >
        {staticPrefix}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`inline-block text-black dark:text-white ${dynamicClassName}`}
          >
            {dynamicTexts[currentIndex]}
          </motion.span>
        </AnimatePresence>
        {staticSuffix}
      </div>
    </div>
  );
};

export default DynamicText;
