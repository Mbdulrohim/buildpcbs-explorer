
import React from 'react';
import Link from 'next/link';
import LandingNavbar from './LandingNavbar';
import Hero from './Hero';
import Explorer from './Explorer';
import LandingFooter from './LandingFooter';
import PCBVisual from './PCBVisual';

const LandingPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-[2000ms] ease-out">
      <LandingNavbar />
      <main>
        <Hero />

        <section id="marketplace" className="relative z-20 -mt-[300px] py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-6">

            </div>
            <Explorer showHero={false} />
          </div>
        </section>


      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
