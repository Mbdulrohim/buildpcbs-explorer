"use client";

import React from "react";
import { motion } from "framer-motion";
import DecorativeCircles from "@/components/DecorativeCircles";
import { Calendar, CheckCircle2, Circle } from "lucide-react";

const roadmapData = [
  {
    year: "Year 1 (2026)",
    title: 'The "Token-Powered Ecosystem" Phase',
    goal: 'Goal: Establish $BUILD utility, stabilize the AI compiler, and secure the first 1,000 "Verified Builds."',
    items: [
      {
        period: "Q1",
        title: "Launch & Liquidity",
        points: [
          {
            label: "Token TGE",
            desc: "Finalize the $BUILD launch - launch model not finalized.",
          },
          {
            label: "Mobile App Beta",
            desc: "Deploy the mobile interface allowing natural language prompts for PCB generation.",
          },
          {
            label: "Perks & Rewards",
            desc: "Launch the user incentive program (giveaways/staking rewards) to bootstrap the community.",
          },
        ],
      },
      {
        period: "Q2",
        title: 'The "Silicon Seal" Integration',
        points: [
          {
            label: "Verification Suite",
            desc: "Deploy the Silicon Seal tools for automated hardware verification (DRC checks, schematic-to-PCB netlist validation).",
          },
          {
            label: "EDA Sync",
            desc: 'Enable "Edit in EDA" exports (KiCad/Altium) to allow users to refine AI-generated designs.',
          },
        ],
      },
      {
        period: "Q3",
        title: "Market & Marketplace",
        points: [
          {
            label: "Closed Marketplace",
            desc: "Open the marketplace for users to publish and trade hardware IP (designs, firmware modules).",
          },
          {
            label: "Web3 IP Tracking",
            desc: "Implement the on-chain version history and ownership logs for every design.",
          },
        ],
      },
      {
        period: "Q4",
        title: "Decentralized Manufacturing (v1)",
        points: [
          {
            label: "The Builder Network",
            desc: "Allow manufacturers to stake $BUILD to receive job alerts.",
          },
          {
            label: "The Tracking Layer",
            desc: "Integrate manufacturing logs (BOM sourcing, assembly status) into the user dashboard.",
          },
        ],
      },
    ],
  },
  {
    year: "Year 2 (2027)",
    title: 'The "Hardware-as-a-Service" Phase',
    goal: "Goal: Scale to full-stack device creation (enclosures + firmware) and global logistics.",
    items: [
      {
        period: "H1",
        title: "Holistic AI Compiling",
        points: [
          {
            label: "Mechanical & Firmware AI",
            desc: "Expand the AI compiler to generate production-ready Enclosures (STL/STEP) and Firmware Bases (C++/Rust) alongside the PCB.",
          },
          {
            label: "BOM Optimization",
            desc: "AI-driven supply chain sourcing to minimize cost and lead times automatically.",
          },
        ],
      },
      {
        period: "H2",
        title: "The Decentralized Factory",
        points: [
          {
            label: "Global Node Deployment",
            desc: 'Partner with localized fab houses to ensure "Local Design, Local Build" capabilities, reducing shipping carbon footprints.',
          },
          {
            label: "Protocol Governance",
            desc: "Transition key ecosystem decisions (grant funding, hardware standards) to $BUILD token holders.",
          },
        ],
      },
    ],
  },
];

const RoadmapPage = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden font-['DM_Sans']">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DecorativeCircles />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-24">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[64px] font-bold tracking-tighter leading-[110%] text-black dark:text-white mb-6"
          >
            Roadmap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Our vision for the future of AI-driven hardware generation and the
            $BUILD ecosystem. (2026-2027)
          </motion.p>
        </div>

        {/* Timeline Years */}
        <div className="space-y-24">
          {roadmapData.map((year, yearIndex) => (
            <motion.div
              key={year.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Year Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6 border-b border-gray-200 dark:border-gray-800 pb-8">
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-bold text-[#0038DF] dark:text-blue-500 mb-2">
                    {year.year}
                  </h2>
                  <h3 className="text-2xl font-semibold text-black dark:text-white">
                    {year.title}
                  </h3>
                </div>
                <div className="md:max-w-md bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <p className="text-base text-gray-600 dark:text-gray-300 font-medium">
                    {year.goal}
                  </p>
                </div>
              </div>

              {/* Quarters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {year.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.period}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-[#0038DF]/30 dark:hover:border-blue-500/30 transition-colors group"
                  >
                    {/* Period Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#0038DF]/10 dark:bg-blue-500/10 flex items-center justify-center text-[#0038DF] dark:text-blue-400 font-bold text-lg border border-[#0038DF]/20 dark:border-blue-500/20">
                        {item.period}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-black dark:text-white mb-4 group-hover:text-[#0038DF] dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <div className="space-y-4">
                        {item.points.map((point, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="mt-1.5 flex-shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                            </div>
                            <div>
                              <span className="block font-medium text-gray-900 dark:text-gray-200 text-sm mb-0.5">
                                {point.label}
                              </span>
                              <span className="block text-sm text-gray-500 dark:text-gray-400 leading-snug">
                                {point.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/10 text-sm font-medium text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>
              Timeline is subject to change based on community governance
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapPage;
