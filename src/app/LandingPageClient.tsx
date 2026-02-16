"use client";

import React, { useState } from "react";
import DecorativeCircles from "@/components/DecorativeCircles";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
// import Quote from "@/components/Quote";
import WhySwitch from "@/components/WhySwitch";
import FAQ from "@/components/FAQ";
import WaitlistModal from "@/components/WaitlistModal";
import ElitesTestimonials from "@/components/ElitesTestimonials";
import { useWaitlist } from "@/context/WaitlistContext";

const LandingPageClient = () => {
  const { isWaitlistOpen, closeWaitlist, openWaitlist } = useWaitlist();

  return (
    <>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <DecorativeCircles />
        <Hero onJoinWaitlist={openWaitlist} />
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent z-10 pointer-events-none" />
      </div>
      <ElitesTestimonials />
      <Features />
      <Stats />
      <WhySwitch />
      {/* <FAQ /> */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </>
  );
};

export default LandingPageClient;
