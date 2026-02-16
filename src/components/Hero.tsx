import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const words = ['build', 'fork', 'share'];

// Basic OdometerLoop not currently used but kept for reference
const OdometerLoop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Sequence: 2.5 seconds per word
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block overflow-hidden align-bottom h-[1.2em] leading-[1.2] relative translate-y-[0.15em]">
      <span
        className="inline-block transition-transform duration-[700ms] flex flex-col items-start"
        style={{
          transform: `translateY(-${index * 1.2}em)`,
          transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="block h-[1.2em] serif italic text-white whitespace-nowrap"
          >
            {w}
          </span>
        ))}
        <span className="block h-[1.2em] serif italic text-white whitespace-nowrap">
          {words[0]}
        </span>
      </span>
    </span>
  );
};

// Adjusted OdometerLoop for seamless wrap-around
const SeamlessOdometer = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === words.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 700); // match transition duration
      return () => clearTimeout(timer);
    } else if (index === 0) {
      setIsTransitioning(true);
    }
  }, [index]);

  return (
    <span className="inline-block overflow-hidden align-bottom h-[1.2em] leading-[1.2] relative translate-y-[0.15em] px-1">
      <span
        className="inline-block flex flex-col items-start"
        style={{
          transform: `translateY(-${index * 1.2}em)`,
          transition: isTransitioning ? 'transform 700ms cubic-bezier(0.65, 0, 0.35, 1)' : 'none'
        }}
      >
        {words.map((w, i) => (
          <span key={i} className="block h-[1.2em] serif italic text-white">
            {w}
          </span>
        ))}
        <span className="block h-[1.2em] serif italic text-white">
          {words[0]}
        </span>
      </span>
    </span>
  );
};

const DecorativeCircles = () => {
  return (
    <>
      <div className="absolute w-[1200px] h-[1200px] top-[-50px] left-[-250px] rounded-full z-0 bg-[linear-gradient(181.98deg,_rgba(45,45,45,0.12)_1.67%,_rgba(23,23,23,0.02)_14.01%,_rgba(0,0,0,0.02)_68.93%)] dark:bg-[linear-gradient(181.98deg,_#2D2D2D_1.67%,_#171717_14.01%,_#000000_68.93%)] pointer-events-none"></div>
      <div className="absolute w-[900px] h-[900px] top-[250px] left-[-100px] rounded-full z-0 bg-[linear-gradient(167.43deg,_rgba(45,45,45,0.06)_9.12%,_rgba(18,18,18,0.02)_36.53%,_rgba(0,0,0,0.01)_62.27%,_rgba(0,0,0,0.01)_84.55%)] dark:bg-[linear-gradient(167.43deg,_#2D2D2D_9.12%,_rgba(18,18,18,0.44)_36.53%,_rgba(0,0,0,0.01)_62.27%,_rgba(0,0,0,0.01)_84.55%)] pointer-events-none"></div>
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      <DecorativeCircles />

      {/* Main Container - Adjusted padding to 200px from edges */}
      <div className="relative z-10 w-full px-[200px] pt-8 pb-40 flex flex-col items-start text-left h-full">

        {/* Top Navigation Row - Full Width, Justified */}
        <div className="flex flex-row items-center justify-between w-full mb-40">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center mr-5">
            <Link
              href="/"
              className="flex items-center gap-[5px] whitespace-nowrap"
            >
              <Image
                src="/logo.svg"
                alt="buildpcbs logo"
                width={24}
                height={20}
              />
              <span className="font-medium text-[17px] leading-[22px] tracking-[-0.04em] text-[#444444] dark:text-white">
                BuildPCBs
              </span>
            </Link>
          </div>

          {/* Right: CTA only */}
          <div className="flex flex-row items-center">
            <Link href="/explorer" className="flex flex-row items-center justify-center px-[10px] gap-[10px] bg-[#0038df] rounded-[24px] h-[45px] w-[138px]">
              <span className="font-['DM_Sans'] font-medium text-[17px] leading-[22px] tracking-[-0.005em] text-white">
                Start Now
              </span>
            </Link>
          </div>
        </div>

        {/* Main Content Row - justify-between to push content to edges */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full mt-20 gap-[60px]">

          {/* Left Side: Animated Title */}
          <div className="flex flex-col items-start gap-[43px] w-full lg:w-[454px]">
            <div className="flex flex-col justify-center items-start gap-[12px] w-full">
              <h1 className="font-['DM_Sans'] font-semibold text-[40px] leading-[120%] tracking-[-0.02em] text-[#C4C4C4]">
                Earn by sharing your hardware prototypes on Explorer.
              </h1>
            </div>
          </div>

          {/* Right Side: Description and CTA */}
          <div className="flex flex-col items-start lg:items-end gap-[11px] w-full lg:w-[389px]">
            <p className="font-['DM_Sans'] font-normal text-[17px] leading-[150%] text-left lg:text-right tracking-[-0.005em] text-[#C4C4C4]">
              Host every update of your prototype components and earn while people use your concepts and features.
            </p>

            <Link href="/explorer" className="flex flex-row justify-center items-center px-[10px] gap-[10px] w-[157px] h-[50px] bg-[linear-gradient(90deg,_#0038df_0%,_#001e79_100%)] rounded-[99px] mt-4">
              <span className="font-['DM_Sans'] font-medium text-[17px] leading-[22px] tracking-[-0.005em] text-white">
                Start Now
              </span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
