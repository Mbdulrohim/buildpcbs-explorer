"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

const HARDWARE_TYPES = [
  "IoT",
  "Keyboard",
  "Power",
  "Audio",
  "FPGA",
  "Robotics",
  "Other",
];

export default function CreateProjectPage() {
  const { isAuthenticated, getAccessToken } = useAuth();
  const { login } = usePrivy();
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hardwareType, setHardwareType] = useState(HARDWARE_TYPES[0]);
  const [prompt, setPrompt] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) return login();

    setIsSubmitting(true);
    setError(null);

    try {
      const token = await getAccessToken();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            description,
            hardwareType,
            prompt,
          }),
        },
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error?.message || "Failed to create project");
      }

      const { data } = await res.json();
      router.push(`/p/${data.id}`);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pcb-dark text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            You must be logged in to create a project.
          </h1>
          <button
            onClick={login}
            className="px-6 py-3 bg-[#0038df] hover:bg-[#0030c0] rounded-full text-white font-medium transition-colors"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pcb-dark text-white pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 font-['DM_Sans']">
          Create New Project
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
        >
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Project Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0038df] transition-colors"
              placeholder="e.g. Smart Home Hub"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0038df] transition-colors"
              placeholder="Describe your hardware project..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Category
            </label>
            <select
              value={hardwareType}
              onChange={(e) => setHardwareType(e.target.value)}
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0038df] transition-colors"
            >
              {HARDWARE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              AI Prompt (Optional)
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0038df] transition-colors font-mono text-sm"
              placeholder="Describe the circuit functionality for AI generation..."
            />
            <p className="text-xs text-zinc-500 mt-1">
              This will be used to generate initial schematics.
            </p>
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0038df] hover:bg-[#0030c0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all"
            >
              {isSubmitting ? "Creating..." : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
