import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/services/api";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Image & Files */}
        <div className="flex flex-col gap-8">
          {/* Main Image */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Action Buttons (Download/Purchase) */}
          <div className="flex flex-col gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400 font-mono text-sm uppercase">
                Price
              </span>
              <span className="text-2xl font-bold font-mono text-white">
                {project.price === "Free" ? "Free" : `$${project.price} USDC`}
              </span>
            </div>

            <button className="w-full py-3 bg-[#0038df] hover:bg-[#0030c0] text-white font-medium rounded-lg transition-colors">
              {project.price === "Free" ? "Download Files" : "Purchase Access"}
            </button>
            <p className="text-xs text-zinc-500 text-center">
              {project.price === "Free"
                ? "Open Source Hardware (OSH)"
                : "Secured on Solana. Verify ownership to download."}
            </p>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Back Link */}
              <Link
                href="/"
                className="text-zinc-500 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                ← Back to Explorer
              </Link>
            </div>

            <h1 className="text-4xl font-bold font-['DM_Sans'] mb-2">
              {project.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 mt-4 mb-6">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-700">
                <Image
                  src={project.author.avatarUrl}
                  alt={project.author.username}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-300">
                  {project.author.username}
                </span>
                <span className="text-xs text-zinc-500">Creator</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono uppercase rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed">
              <p>{project.description}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500 text-xs font-mono uppercase">
                Forks
              </span>
              <span className="text-xl font-mono text-white">
                {project.forks}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500 text-xs font-mono uppercase">
                Stars
              </span>
              <span className="text-xl font-mono text-white">
                {project.stars}
              </span>
            </div>
          </div>

          {/* Tech Specs (Placeholder) */}
          <div className="border-t border-zinc-800 pt-8">
            <h3 className="text-lg font-bold mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
              <div className="flex justify-between border-b border-zinc-800/50 py-2">
                <span className="text-zinc-500 text-sm">Microcontroller</span>
                <span className="text-zinc-300 text-sm font-mono">
                  ESP32-S3
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/50 py-2">
                <span className="text-zinc-500 text-sm">Voltage</span>
                <span className="text-zinc-300 text-sm font-mono">
                  3.3V / 5V
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/50 py-2">
                <span className="text-zinc-500 text-sm">Layers</span>
                <span className="text-zinc-300 text-sm font-mono">4-Layer</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/50 py-2">
                <span className="text-zinc-500 text-sm">Dimensions</span>
                <span className="text-zinc-300 text-sm font-mono">
                  45mm x 30mm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
