"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BuildQuote = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Select all word spans
    const words = textElement.querySelectorAll(".word");

    // Detect dark mode
    const isDarkMode = document.documentElement.classList.contains("dark");
    const targetColor = isDarkMode ? "white" : "#111111";

    gsap.fromTo(
      words,
      {
        opacity: 0.3,
        color: "#9CA3AF", // gray-400 (dim)
      },
      {
        opacity: 1,
        color: targetColor,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      },
    );
  }, []);

  const fullText =
    "To facilitate the ultimate dream of hardware—an idea or hardware prompt to your doorstep in less than 3 days—we need to have an inbuilt overarching layer of transparency for all the network of manufacturers and builders that would feed into this dream. This is the blockchain.";

  // Helper to split text into words
  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="word inline-block mr-[0.25em] transition-colors duration-200"
      >
        {word}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10"
    >
      <div className="flex flex-col items-center">
        <p
          ref={textRef}
          className="font-light text-[28px] md:text-[50px] leading-[140%] tracking-[-0.02em] text-center text-gray-400 dark:text-gray-500"
        >
          {splitText(fullText)}
        </p>
      </div>
    </section>
  );
};

export default BuildQuote;
