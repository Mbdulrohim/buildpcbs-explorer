"use client";

import React, { useState } from "react";
import { MOCK_PROJECTS, CATEGORIES } from "../constants";
import ProjectCard from "./ProjectCard";
import { Filter, SlidersHorizontal, Cpu } from "lucide-react";

const Explorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? MOCK_PROJECTS
      : MOCK_PROJECTS.filter((p) => p.tags.includes(selectedCategory));

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-16 border-b border-pcb-border pb-12 relative">
        <div className="absolute top-0 right-0 text-pcb-primary/10">
          <Cpu className="w-64 h-64 opacity-20" />
        </div>

        <div className="space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pcb-primary/10 border border-pcb-primary/20 text-pcb-primary-light text-xs font-mono uppercase tracking-wider mb-2 rounded-sm">
            <span className="w-2 h-2 bg-pcb-primary rounded-full animate-pulse"></span>
            System Operational
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            HARDWARE <br />
            <span className="text-zinc-700">AS CODE.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-xl font-light border-l-2 border-pcb-primary pl-6 py-1">
            The decentralized manufacturing network. <br />
            Design, Fork, and Mint physical hardware with AI.
          </p>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="sticky top-16 z-40 bg-pcb-dark/95 backdrop-blur border-y border-pcb-border py-4 mb-8 -mx-4 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto no-scrollbar mask-gradient">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-pcb-primary text-white border-pcb-primary font-bold"
                    : "bg-transparent text-zinc-500 border-transparent hover:border-zinc-800 hover:text-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex items-center gap-6 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <Filter className="w-3 h-3" />
              <span>{filteredProjects.length} MODULES</span>
            </div>
            <div className="hidden md:flex items-center gap-2 border-l border-zinc-800 pl-6">
              <SlidersHorizontal className="w-3 h-3" />
              <span>SORT: RELEVANCE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 border border-dashed border-zinc-800 bg-zinc-900/20">
          <Cpu className="w-12 h-12 text-zinc-700 mb-4" />
          <p className="text-zinc-500 font-mono">NO_MODULES_FOUND</p>
        </div>
      )}
    </div>
  );
};

export default Explorer;
