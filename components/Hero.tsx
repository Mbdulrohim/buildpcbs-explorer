
import React, { useEffect, useState } from 'react';

const words = ['build', 'fork', 'share'];

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
        {/* Clone the first word at the end for smooth looping if needed, 
            but for 3 words a standard index shift is fine for most cases. 
            Added a 4th clone for seamless visual return from 'share' back to 'build' */}
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

const Hero: React.FC = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center flex flex-col items-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.2] serif text-white">
          <SeamlessOdometer />
          <span className="serif text-white whitespace-nowrap"> PCB projects in the cloud</span>
        </h1>
        
        <p className="text-base md:text-lg text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto font-sans font-medium lowercase tracking-tight">
          monetization of custom modules and earning revenue from other engineers is integrated into the system.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative bg-[#0038df] hover:bg-blue-700 text-white px-8 h-[60px] min-w-[200px] rounded-full font-bold text-base transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center overflow-hidden active:scale-95">
            <span className="relative z-10 uppercase tracking-widest text-sm">Start Building</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
