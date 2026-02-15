
import React, { useEffect, useState } from 'react';

const RollingWord = ({ word, imageUrl, delay }: { word: string; imageUrl: string; delay: number }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className="inline-block overflow-hidden align-bottom h-[1.15em] leading-[1.15] relative translate-y-[0.1em]">
      <span
        className={`inline-block transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${
          active ? '-translate-y-2/3' : 'translate-y-0'
        }`}
      >
        {/* State 1: Hidden/Empty */}
        <span className="block h-[1.15em] text-transparent select-none opacity-0">.</span>
        {/* State 2: Mid-roll blur or placeholder */}
        <span className="block h-[1.15em] font-sans font-black uppercase italic tracking-tighter text-white/10 blur-sm">
          {word}
        </span>
        {/* State 3: Final Masked Word */}
        <span
          className="block h-[1.15em] font-sans font-black uppercase italic tracking-tighter bg-clip-text text-transparent bg-cover bg-center animate-pulse"
          style={{ 
            backgroundImage: `url('${imageUrl}')`,
            textShadow: '0 0 30px rgba(0, 56, 223, 0.2)'
          }}
        >
          {word}
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
          <RollingWord 
            word="Build" 
            imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" 
            delay={400} 
          />
          <span className="serif text-white/80">, </span>
          <RollingWord 
            word="fork" 
            imageUrl="https://images.unsplash.com/photo-1635332392051-4091c53f86f7?q=80&w=1000&auto=format&fit=crop" 
            delay={700} 
          />
          <span className="serif text-white/80"> and </span>
          <RollingWord 
            word="share" 
            imageUrl="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1000&auto=format&fit=crop" 
            delay={1000} 
          />
          <br className="hidden sm:block" />
          <span className="serif text-white">PCB projects in the cloud</span>
        </h1>
        
        <p className="text-base md:text-lg text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto font-sans font-medium lowercase tracking-tight">
          monetization of custom modules and earning revenue from other engineers is integrated into the system.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative bg-[#0038df] hover:bg-blue-700 text-white px-10 h-[60px] rounded-full font-bold text-lg transition-all shadow-2xl shadow-blue-900/40 flex items-center justify-center overflow-hidden">
            <span className="relative z-10 uppercase tracking-widest text-sm">Start Building</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
