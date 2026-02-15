
import React from 'react';
import Link from 'next/link';
import LandingNavbar from './LandingNavbar';
import Hero from './Hero';
import MarketplacePreview from './MarketplacePreview';
import LandingFooter from './LandingFooter';
import PCBVisual from './PCBVisual';

const LandingPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-[2000ms] ease-out">
      <LandingNavbar />
      <main>
        <section className="relative overflow-hidden pt-24 min-h-[80vh] flex items-center justify-center">
          <Hero />
          <PCBVisual />
        </section>

        <section id="marketplace" className="py-24 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 serif italic">The Module Marketplace</h2>
                <p className="text-zinc-400 max-w-2xl font-sans">
                  Verified open-source modules you can trust. Monetize your verified circuits and earn royalties every time your module is used in a production build.
                </p>
              </div>
              <Link href="/explorer" className="px-6 py-2 border border-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors font-sans uppercase tracking-wider inline-block text-center">
                Browse All Modules
              </Link>
            </div>
            <MarketplacePreview />
          </div>
        </section>

        <section className="py-32 bg-gradient-to-b from-black to-blue-950/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 serif">Ready to reinvent manufacturing?</h2>
            <p className="text-xl text-zinc-400 mb-12 font-sans tracking-wide">
              Join 50,000+ engineers building the future of hardware, one commit at a time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/explorer" className="w-full sm:w-auto px-12 py-5 bg-[#0038df] hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-900/20 uppercase tracking-widest inline-block text-center">
                Get Started
              </Link>
              <button className="w-full sm:w-auto px-12 py-5 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white rounded-full font-bold text-lg transition-all uppercase tracking-widest">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
