"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IconInstagram,
  IconLinkedIn,
  IconDiscord,
  IconX,
  IconTelegram,
  IconTikTok,
} from "@/components/CommunityIcons";
import { Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CommunityHistogram = () => {
  return (
    <div className="w-full h-[800px] flex items-center justify-center bg-transparent overflow-hidden relative perspective-[1200px]">
      {/* Background Grid (Floor) */}
      <div
        className="absolute bottom-0 w-[200%] h-[100%] bg-[linear-gradient(rgba(0,56,223,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,56,223,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
        style={{
          transform: "rotateX(60deg) translateY(200px) translateZ(-200px)",
          opacity: 0.3,
        }}
      />

      {/* Histogram Container */}
      <div className="relative flex items-end gap-4 md:gap-8 transform-style-3d rotate-x-12">
        {/* --- Minor Bars (Left) --- */}
        <Bar
          height={120}
          color="#333"
          icon={<IconInstagram />}
          label="IG"
          delay={0.1}
          href="https://instagram.com/buildpcbs"
        />
        <Bar
          height={160}
          color="#0A66C2"
          icon={<IconLinkedIn />}
          label="IN"
          delay={0.2}
          href="#"
        />

        {/* --- Major Bars (Center) --- */}
        {/* Discord */}
        <Bar
          height={300}
          color="#5865F2"
          icon={<IconDiscord />}
          label="Discord"
          isMajor
          delay={0.3}
          href="#"
        />

        {/* X (Twitter) - Highest */}
        <Bar
          height={400}
          color="#000000"
          borderColor="#333"
          icon={<IconX />}
          label="Twitter"
          isMajor
          delay={0.4}
          href="https://x.com/buildpcbswithAI"
        />

        {/* Telegram */}
        <Bar
          height={280}
          color="#229ED9"
          icon={<IconTelegram />}
          label="Telegram"
          isMajor
          delay={0.5}
          href="https://t.me/BuildPCBs"
        />

        {/* --- Minor Bars (Right) --- */}
        <Bar
          height={140}
          color="#000000"
          icon={<IconTikTok />}
          label="TikTok"
          delay={0.6}
          href="#"
        />
        <Bar
          height={100}
          color="#222"
          icon={<Github size={20} />}
          label="Github"
          delay={0.7}
          href="https://github.com/BuildPCbs"
        />
      </div>
    </div>
  );
};

const Bar = ({
  height,
  color,
  borderColor,
  icon,
  label,
  isMajor = false,
  delay,
  href = "#",
}: any) => {
  // 3D Bar Construction
  // Front face, Top face, Side faces.
  // Using simple CSS for 3D simulation.

  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-end transition-transform hover:-translate-y-4 duration-300 cursor-pointer"
    >
      {/* Floating Icon (Spinning + 3D Revolve on Hover) */}
      <div
        className={`
                    absolute -top-16 md:-top-24
                    flex items-center justify-center
                    rounded-full border border-gray-200 dark:border-white/20 bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white
                    shadow-[0_0_30px_rgba(0,56,223,0.3)]
                    ${isMajor ? "w-16 h-16 md:w-24 md:h-24" : "w-10 h-10 md:w-14 md:h-14"}
                    animate-float
                    transform-style-3d
                    transition-all duration-[3000ms]
                    group-hover:[transform:rotateY(360deg)]
                `}
        style={{ animationDelay: `${delay}s`, perspective: "1000px" }}
      >
        <div className="animate-spin-slow group-hover:animate-none">{icon}</div>
      </div>

      {/* The Bar */}
      <div
        className="relative w-12 md:w-20 transition-all duration-1000 origin-bottom"
        style={{ height: `${height}px` }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 border-t border-x border-white/10 rounded-t-lg"
          style={{
            background: `linear-gradient(to bottom, ${color} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />

        {/* Top Glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-white/50 blur-[2px]" />

        {/* Internal Reflection */}
        <div className="absolute inset-4 bg-white/5 rounded-t-sm blur-md" />
      </div>

      {/* Label */}
      <span className="mt-4 text-xs md:text-sm font-mono text-gray-500 tracking-widest uppercase">
        {label}
      </span>
    </a>
  );
};

export default CommunityHistogram;
