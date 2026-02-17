"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  getProjects,
  getMarketplaceStats,
  MarketplaceStats,
} from "../services/api";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";

const words = ["build", "fork", "share"];

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
          transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
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
          transition: isTransitioning
            ? "transform 700ms cubic-bezier(0.65, 0, 0.35, 1)"
            : "none",
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
  // Real Privy authentication
  const { walletAddress, isAuthenticated, login, logout } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState<MarketplaceStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, statsData] = await Promise.all([
          getProjects({ limit: 10 }),
          getMarketplaceStats(),
        ]);
        setProjects(projectsData);
        setStats(statsData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Debug logging
  useEffect(() => {
    console.log("🔍 Auth State:", { walletAddress, isAuthenticated });
  }, [walletAddress, isAuthenticated]);

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 3)}...${address.slice(-5)}`;
  };

  const handleConnectWallet = () => {
    console.log("🔘 Connect button clicked", {
      isAuthenticated,
      walletAddress,
    });
    if (!isAuthenticated) {
      login();
    }
    // When authenticated, do nothing (could add dropdown menu later)
  };

  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      <DecorativeCircles />

      {/* Main Container - Aligned with Explorer section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-8 pb-40 flex flex-col items-start text-left h-full">
        {/* Top Navigation Row - Full Width, Justified */}
        <div className="flex flex-row items-center justify-between w-full mb-40">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center mr-5">
            <div className="flex items-center gap-[5px] whitespace-nowrap">
              <Image
                src="/logo.svg"
                alt="buildpcbs logo"
                width={24}
                height={20}
              />
              <span className="font-medium text-[17px] leading-[22px] tracking-[-0.04em] text-[#444444] dark:text-white">
                BuildPCBs
              </span>
            </div>
          </div>

          {/* Right: Search Input and Connect Wallet */}
          <div className="flex flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Search modules..."
              className="px-4 h-[45px] w-[200px] bg-black/40 border border-zinc-800 rounded-[24px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#0038df] transition-colors"
            />

            <div className="relative group">
              <button
                onClick={handleConnectWallet}
                className={`flex flex-row items-center justify-center px-[10px] gap-[10px] ${
                  isAuthenticated
                    ? "bg-zinc-800 hover:bg-zinc-700 border border-zinc-700"
                    : "bg-[#0038df] hover:bg-[#0030c0]"
                } transition-colors rounded-[24px] h-[45px] ${isAuthenticated ? "w-[180px]" : "w-[138px]"}`}
              >
                {isAuthenticated && (
                  <div className="flex items-center gap-1">
                    {/* Wallet Icon */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                    {/* User Icon */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
                <span className="font-['DM_Sans'] font-medium text-[17px] leading-[22px] tracking-[-0.005em] text-white">
                  {isAuthenticated
                    ? walletAddress
                      ? truncateAddress(walletAddress)
                      : "Connected"
                    : "Connect"}
                </span>
                {isAuthenticated && (
                  <svg
                    className="w-4 h-4 text-zinc-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Dropdown Menu */}
              {isAuthenticated && (
                <div className="absolute right-0 top-full pt-2 w-48 hidden group-hover:block z-50">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden">
                    <div className="py-1">
                      {walletAddress && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(walletAddress);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          Copy Address
                        </button>
                      )}
                      <div className="h-px bg-zinc-800 my-1"></div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          logout();
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-zinc-800 hover:text-red-300 transition-colors flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        Disconnect
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

          {/* Right Side: Description */}
          <div className="flex flex-col items-start lg:items-end gap-[11px] w-full lg:w-[389px]">
            <p className="font-['DM_Sans'] font-normal text-[17px] leading-[150%] text-left lg:text-right tracking-[-0.005em] text-[#C4C4C4]">
              Host every update of your prototype components and earn while
              people use your concepts and features.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-24 pb-12 border-b border-zinc-800/50">
          <div className="flex flex-col gap-2">
            <div className="font-['DM_Mono'] text-3xl font-bold text-white">
              {stats ? stats.modules.toLocaleString() : "-"}
            </div>
            <div className="font-['DM_Sans'] text-sm text-zinc-500 uppercase tracking-wider">
              Modules
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-['DM_Mono'] text-3xl font-bold text-white">
              {stats ? stats.creators.toLocaleString() : "-"}
            </div>
            <div className="font-['DM_Sans'] text-sm text-zinc-500 uppercase tracking-wider">
              Creators
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-['DM_Mono'] text-3xl font-bold text-white">
              {stats ? stats.downloads.toLocaleString() : "-"}
            </div>
            <div className="font-['DM_Sans'] text-sm text-zinc-500 uppercase tracking-wider">
              Downloads
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-['DM_Mono'] text-3xl font-bold text-[#0038df]">
              {stats ? `$${stats.earned.toLocaleString()}` : "-"}
            </div>
            <div className="font-['DM_Sans'] text-sm text-zinc-500 uppercase tracking-wider">
              Earned
            </div>
          </div>
        </div>

        {/* Featured Projects Carousel */}
        <div className="w-full mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-['DM_Sans'] font-semibold text-2xl text-white">
              Featured Projects
            </h2>
            <div className="text-sm text-zinc-500 font-mono uppercase tracking-wider">
              Trending Now
            </div>
          </div>

          {isLoading ? (
            <div className="flex gap-6 overflow-hidden">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex-none w-[320px] h-[300px] bg-zinc-900/50 border border-zinc-800 animate-pulse rounded-xl"
                ></div>
              ))}
            </div>
          ) : (
            <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-none w-[320px] snap-start h-full"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-12 text-zinc-500 font-mono">
                  No projects found. Be the first to publish!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
