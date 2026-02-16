import React from "react";
import { motion } from "framer-motion";

const items = [
  "Access AI hardware design tools",
  "Run simulations and validations",
  "Generate PCB-ready files",
  "Reward real usage and contribution",
];

const InfiniteRibbon = () => {
  return (
    <div className="w-full overflow-hidden bg-transparent py-4 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none" />
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: [0, -1000], // simple translation, we need to make it loop perfectly
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        // To make it truly infinite loop without gaps:
        // We typically duplicate the content enough times to fill the screen + scroll.
        // Better approach for perfect loop:
        // Use a container with 2 sets of children and translate -50%.
      >
        {/* We render the items multiple times to ensure enough width for seamless looping */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0038DF]" />
            <span className="text-lg md:text-xl text-gray-300 font-mono tracking-tight">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Better implementation for seamless loop
const InfiniteRibbonSeamless = () => {
  return (
    <div className="w-full overflow-hidden bg-transparent py-6 relative z-10 mask-linear-fade">
      {/* Gradient Masks to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-20" />

      <div className="flex w-max">
        <TranslateWrapper>
          {items.map((item, index) => (
            <RibbonItem key={`a-${index}`} text={item} />
          ))}
        </TranslateWrapper>
        <TranslateWrapper>
          {items.map((item, index) => (
            <RibbonItem key={`b-${index}`} text={item} />
          ))}
        </TranslateWrapper>
        <TranslateWrapper>
          {items.map((item, index) => (
            <RibbonItem key={`c-${index}`} text={item} />
          ))}
        </TranslateWrapper>
        <TranslateWrapper>
          {items.map((item, index) => (
            <RibbonItem key={`d-${index}`} text={item} />
          ))}
        </TranslateWrapper>
      </div>
    </div>
  );
};

const TranslateWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="flex gap-16 px-8"
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

const RibbonItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <span className="w-1.5 h-1.5 rounded-full bg-[#0038DF] shadow-[0_0_8px_#0038DF]" />
    <span className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light tracking-wide whitespace-nowrap">
      {text}
    </span>
  </div>
);

export default InfiniteRibbonSeamless;
