"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface StatCardProps {
  description: string;
  value: string;
  label: string;
}

const statsData: StatCardProps[] = [
  {
    description: "From text prompt to manufacturing files in minutes.",
    value: "100x",
    label: "Faster Build",
  },
  {
    description: "Decentralized builders staking $BUILD to process your jobs.",
    value: "Web3",
    label: "Manufacturing",
  },
  {
    description: "Ownership, logs, and version history tracked on-chain.",
    value: "100%",
    label: "Transparent",
  },
  {
    description:
      "Mobile-first experience. Chat with AI to build hardware anywhere.",
    value: "24/7",
    label: "Access",
  },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

const ScrambleText = ({ text, trigger }: { text: string; trigger: boolean }) => {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const steps = 20; // Number of scramble steps

  useEffect(() => {
    if (!trigger) return;

    let step = 0;

    // Clear existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          // Keep confirmed characters
          if (index < (step / steps) * text.length) {
            return char;
          }
          // Random char
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(scrambled);
      step++;

      if (step > steps) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text); // Ensure final match
      }
    }, 30); // Speed of scramble

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

  }, [trigger, text]);

  return <span>{display}</span>;
}

const StatCard: React.FC<StatCardProps> = ({ description, value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [animTrigger, setAnimTrigger] = useState(0);

  // Trigger animation on View
  useEffect(() => {
    if (isInView) {
      setAnimTrigger(prev => prev + 1);
    }
  }, [isInView]);

  // Trigger animation on Hover
  useEffect(() => {
    if (isHovered) {
      setAnimTrigger(prev => prev + 1);
    }
  }, [isHovered]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-[287px] h-[410px] flex-shrink-0 bg-white dark:bg-[#151414]
 border-[0.5px] border-[#CDCDCD] dark:border-gray-700 rounded-xl transition-all duration-300 hover:bg-gradient-to-b from-[#255CFF] to-[#0038DF]"
    >
      <div className="absolute top-[67px] left-[23px] w-[241px] h-[40px]">
        <p className="text-[17px] leading-[120%] text-[#666666] dark:text-gray-400 group-hover:text-white/80">
          {description}
        </p>
      </div>
      <div className="absolute top-[226px] left-[23px] w-[241px] h-[134px]">
        <span className="text-[80px] font-normal text-[#D7D7D7] group-hover:text-white font-[family-name:var(--font-dm-sans)]">
          {/* Scramble Text Component */}
          <ScrambleText text={value} trigger={animTrigger > 0} />
          {/* Passing trigger as boolean, but using key or effect based on counter is better. 
               The ScrambleText effect depends on [trigger] change. 
               Wait, sending `animTrigger` (number) as a dependency to ScrambleText's useEffect is cleaner.
           */}
        </span>
        <span className="block text-2xl font-normal text-[#D7D7D7] group-hover:text-white">
          {label}
        </span>
      </div>
    </div>
  );
};


// Improved Scramble Component to handle re-triggering based on prop change
const ScrambleTextImproved = ({ text, triggerKey }: { text: string; triggerKey: number }) => {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (triggerKey === 0) return; // Don't animate on pure mount if 0

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(prev => text
        .split("")
        .map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplay(text); // Final clean up
      }

      iteration += 1 / 3; // Slower reveal: 3 frames per character
    }, 30);

    return () => clearInterval(interval);
  }, [triggerKey, text]);

  return <span>{display}</span>;
}

// Redefining simpler StatCard using Improved Scramble
const StatCardFinal: React.FC<StatCardProps> = ({ description, value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [triggerKey, setTriggerKey] = useState(0);

  // Trigger on View
  useEffect(() => {
    if (isInView) {
      setTriggerKey(k => k + 1);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setTriggerKey(k => k + 1)} // Re-trigger on hover
      className="group relative w-[287px] h-[410px] flex-shrink-0 bg-white dark:bg-[#151414]
 border-[0.5px] border-[#CDCDCD] dark:border-gray-700 rounded-xl transition-all duration-300 hover:bg-gradient-to-b from-[#255CFF] to-[#0038DF]"
    >
      <div className="absolute top-[67px] left-[23px] w-[241px] h-[40px]">
        <p className="text-[17px] leading-[120%] text-[#666666] dark:text-gray-400 group-hover:text-white/80">
          {description}
        </p>
      </div>
      <div className="absolute top-[226px] left-[23px] w-[241px] h-[134px]">
        <span className="text-[80px] font-normal text-[#D7D7D7] group-hover:text-white font-[family-name:var(--font-dm-sans)] tabular-nums">
          <ScrambleTextImproved text={value} triggerKey={triggerKey} />
        </span>
        <span className="block text-2xl font-normal text-[#D7D7D7] group-hover:text-white">
          {label}
        </span>
      </div>
    </div>
  );
};


const Stats = () => {
  return (
    <section className="w-full py-16 md:py-24">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center relative">
        <div className="relative w-full max-w-[1206px] flex justify-center">
          {/* Background Text (half covered, aligned exactly to container’s left) */}
          <h2 className="absolute top-0 left-0 -translate-y-1/2 text-[190px] font-extrabold tracking-[-0.005em] leading-[150%] bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent select-none pointer-events-none z-0">
            STATS
          </h2>

          {/* Foreground Container (covers half of 'STATS') */}
          <div className="relative w-full h-[432px] bg-white dark:bg-black border-[0.5px] border-[#DDE2FF] dark:border-gray-700 rounded-2xl flex justify-center items-center overflow-hidden z-10">
            {/* Card Grid */}
            <div className="grid grid-cols-4 gap-4">
              {statsData.map((stat) => (
                <StatCardFinal key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 px-4">
          {statsData.map((stat) => (
            <div key={stat.label} className="snap-center">
              <StatCardFinal {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
