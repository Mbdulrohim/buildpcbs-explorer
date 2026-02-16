"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DistributionPie from "@/components/DistributionPie";
import CommunityHistogram from "@/components/CommunityHistogram";
import DecorativeCircles from "@/components/DecorativeCircles";
import BuildQuote from "@/components/BuildQuote";
import InfiniteRibbon from "@/components/InfiniteRibbon";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const BuildPage = () => {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white font-['DM_Sans']">
      {/* --- HERO Section (Refined to match Home Hero) --- */}
      <div
        className="min-h-screen isolate"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <DecorativeCircles />
        <section className="relative w-full h-screen flex flex-col justify-end pb-[30vh]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
            {/* Left Column */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-center gap-4">
                <span className="font-medium text-[14px] md:text-[17px] tracking-[-0.005em] text-[#777777] dark:text-[#999999]">
                  New Release
                </span>
                <div className="px-3 py-1 border border-gray-300 dark:border-gray-700/50 rounded-md bg-gray-100 dark:bg-white/5 backdrop-blur-sm">
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                    v1.0.0 (Alpha)
                  </span>
                </div>
              </div>

              <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500 mb-[-16px]">
                the token behind the engine
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[40px] md:text-[80px] font-bold tracking-tighter leading-[100%] text-black dark:text-white"
              >
                <motion.span
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotateY: {
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                    }, // Pulse with rotation
                  }}
                  className="text-[#0038DF] inline-block origin-center preserve-3d"
                  style={{ perspective: "1000px" }}
                >
                  $
                </motion.span>
                BUILD
              </motion.h1>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 text-left items-start md:text-right md:items-end">
              <p className="font-normal text-[14px] md:text-[17px] leading-[150%] tracking-[-0.005em] text-gray-600 dark:text-gray-300 w-full max-w-[400px] whitespace-pre-line">
                Build hardware without guesswork. <br /> Describe it. We design
                it. You build it.
              </p>

              {/* CTA - Hidden on very small screens if needed, but 'hidden md:flex' in original code hid it on mobile. User said "one cta... to fit mobile". So I should SHOW it on mobile? Or show a simplified one?
                            Original was: hidden md:flex.
                            I will make it FLEX (visible) on mobile too, but maybe simpler.
                        */}
              <motion.button
                initial="initial"
                whileHover="hovered"
                className="hidden md:flex items-center justify-center w-[157px] h-[50px] rounded-full text-white font-medium bg-gradient-to-r from-[#0038DF] to-[#001E79] hover:opacity-90 transition-opacity overflow-hidden"
              >
                <div className="flex">
                  {"Start Building".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: -5 },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: index * 0.03,
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              </motion.button>
            </div>
          </div>

          {/* Light Shedding Gradient Transition */}
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent via-white/50 to-white dark:via-black/50 dark:to-black z-0 pointer-events-none" />
        </section>
      </div>

      {/* --- QUOTE Section (Scrub Animation) --- */}
      <BuildQuote />

      {/* --- WHAT IS $BUILD (Network of Makers) --- */}
      <section className="py-24 px-0 bg-white dark:bg-black relative z-10 overflow-hidden">
        {/* Infinite Ribbon instead of list */}
        <div className="w-full border-y border-gray-200 dark:border-gray-800/50 bg-gray-50 dark:bg-white/5 backdrop-blur-sm">
          <InfiniteRibbon />
        </div>
      </section>

      {/* --- DISTRIBUTION (Pie Chart) --- */}
      <section className="relative min-h-screen bg-white dark:bg-black">
        <DistributionPie />
      </section>

      {/* --- WHY (Cards - Interactive Horizontal Scroll) --- */}
      <CardsSection />

      {/* --- COMMUNITY (Histogram) --- */}
      <section className="py-24 px-6 relative overflow-hidden bg-white dark:bg-black flex flex-col items-center">
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center mb-0">
          <div className="text-center mb-0 relative z-20">
            <h2 className="text-[50px] md:text-[80px] font-bold mb-6 tracking-tighter text-black dark:text-white">
              Community — Builders Only
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-24 max-w-2xl mx-auto">
              No noise. No fluff. Just people shipping real things.
            </p>
          </div>
        </div>

        {/* 3D Histogram Component */}
        <CommunityHistogram />
      </section>
    </main>
  );
};

const CardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 0,
      title: "Too Complex",
      smallDesc: "Hardware is broken.",
      fullDesc:
        "Hardware creation should be accessible. Remove the friction of years of learning curves.",
      cta: "Simplifying Hardware",
      icon: "🧩",
    },
    {
      id: 1,
      title: "Too Expensive",
      smallDesc: "Mistakes cost thousands.",
      fullDesc:
        "Builders should move faster than bureaucracy. Our AI validates designs before you spend a dime.",
      cta: "Reducing Costs",
      icon: "💸",
    },
    {
      id: 2,
      title: "Too Slow",
      smallDesc: "Months to prototype.",
      fullDesc:
        "AI should do the heavy lifting, not replace the human. Go from idea to gerber files in minutes.",
      cta: "Accelerating Time",
      icon: "⏱️",
    },
    {
      id: 3,
      title: "Just Right",
      smallDesc: "BuildPCBs is home.",
      fullDesc:
        "This is where ideas stop being stuck layer. Join the revolution of hardware generation.",
      cta: "Start Building",
      icon: "🚀",
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current || !containerRef.current) return;

      // Pinned Scroll Logic
      // We have 4 cards. We want to scroll through them.
      // "One pixel spacing" (gap-px)
      // Initial state: Side by side.
      // Scroll: Translate Left. center the active one.

      const totalScroll = 3000;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate which card is "Active" (Center)
          // 4 cards -> 0 to 3.
          // Smooth index mapping
          const idx = Math.min(
            Math.floor(progress * cards.length),
            cards.length - 1,
          );
          setActiveIndex(idx);

          // Translate container
          // If 0 is active, x is 0 (or centered).
          // If 1 is active, move left by 1 card width.
          // Let's assume generic translation for now, fine-tuned visually.
          const xPercent = -(progress * 75); // Move up to 75% (showing last card)

          gsap.to(containerRef.current, {
            xPercent: xPercent,
            duration: 0.1, // Quick catchup
            overwrite: "auto",
          });
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="h-screen py-24 bg-gray-50 dark:bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-[40px] font-medium text-center mb-12 text-black dark:text-white">
        Why BuildPCBs Exists
      </h2>

      {/* Window Mask */}
      <div className="w-full max-w-[1400px] h-[600px] flex items-center overflow-visible pl-[40vw]">
        {/* Container */}
        <div ref={containerRef} className="flex gap-[1px]">
          {cards.map((card, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                className={`
                                relative transition-all duration-500 ease-out border border-gray-300 dark:border-gray-800 bg-white dark:bg-black flex flex-col justify-between shrink-0 override-radius
                                ${isActive ? "w-[300px] h-[500px] md:w-[500px] md:h-[600px] opacity-100 z-10 border-[#0038DF] dark:border-[#0038DF]" : "w-[100px] h-[400px] md:w-[200px] md:h-[500px] opacity-40 grayscale z-0"}
                            `}
                // Scaled down dimensions for mobile: Active 300x500, Inactive 100x400
              >
                {/* Active Content Layer */}
                <div
                  className={`p-10 h-full flex flex-col justify-between transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 hidden"}`}
                >
                  {/* Icon Top */}
                  <div className="text-6xl mb-4">{card.icon}</div>

                  <div className="mt-auto">
                    <h3 className="text-[50px] font-bold leading-tight mb-4 text-black dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {card.fullDesc}
                    </p>

                    <button className="flex items-center gap-2 text-[#0038DF] font-medium group">
                      {card.cta}{" "}
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* Inactive Content Layer (Collapsed view) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${!isActive ? "opacity-100" : "opacity-0"}`}
                >
                  <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500 -rotate-90 whitespace-nowrap">
                    {card.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Removed internal style tag in favor of Tailwind class or global styles */}
    </section>
  );
};

export default BuildPage;
