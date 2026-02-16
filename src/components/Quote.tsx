import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Quote = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Select all word spans
    const words = textElement.querySelectorAll(".word");

    gsap.fromTo(
      words,
      {
        opacity: 0.3,
        color: "#9CA3AF", // gray-400 (dim)
      },
      {
        opacity: 1,
        color: "var(--foreground)",
        stagger: 0.1, // Stagger amount controls the "distance" between words lighting up
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Start animating when top of container hits 75% viewport height
          end: "bottom 50%", // Finish animating when bottom of container hits 50% viewport height
          scrub: 1, // Link animation progress to scroll position (smooth)
          // toggleActions removed because scrub controls playback
        },
      }
    );
  }, []);

  const fullText = "Hardware should be as programmable as software. We are building the compiler that turns your words into physical reality through a decentralized network.";

  // Helper to split text into words
  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-[0.25em] transition-colors duration-200">
        {word}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="flex flex-col items-center">
        <p ref={textRef} className="font-light text-[28px] md:text-[44px] leading-[150%] tracking-[-0.01em] text-center text-gray-300 dark:text-gray-600">
          {splitText(fullText)}
        </p>

        <div className="flex items-center gap-4 mt-8">
          <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="text-right">
            <p className="font-normal text-xl text-[#D9D9D9] dark:text-gray-400">
              Samsudeen Afolabi
            </p>
            <p className="font-normal text-[13px] text-[#848484] dark:text-gray-500">
              Cofounder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
