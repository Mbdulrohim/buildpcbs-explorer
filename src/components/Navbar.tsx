import React from "react";
import { Search, CircuitBoard, Hexagon, Wallet, Terminal } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-pcb-border bg-pcb-dark/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center bg-pcb-primary/10 rounded border border-pcb-primary/20 group-hover:border-pcb-primary/50 transition-all">
            <CircuitBoard className="w-5 h-5 text-pcb-primary-light" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white leading-none font-mono">
              BuildPCBs
            </span>
            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest group-hover:text-pcb-primary-light transition-colors">
              Explorer_V1
            </span>
          </div>
        </Link>

        {/* Search */}
        <div className="hidden md:flex items-center flex-1 max-w-lg mx-8 relative group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Terminal className="w-4 h-4 text-zinc-600 group-focus-within:text-pcb-primary-light transition-colors" />
            <span className="ml-2 text-zinc-600 font-mono text-xs group-focus-within:text-pcb-primary-light transition-colors">
              {">"}
            </span>
          </div>
          <input
            type="text"
            placeholder="Search modules..."
            className="w-full bg-pcb-panel border border-pcb-border rounded-sm py-2 pl-12 pr-4 text-sm font-mono text-zinc-300 focus:outline-none focus:border-pcb-primary focus:ring-0 transition-all placeholder:text-zinc-700"
          />
          <div className="absolute right-3 flex items-center pointer-events-none">
            <span className="text-[10px] text-zinc-600 border border-zinc-800 px-1.5 rounded bg-black">
              CMD+K
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hidden sm:block text-zinc-400 hover:text-white text-xs font-mono uppercase tracking-wide transition-colors"
          >
            Docs
          </a>
          <button className="flex items-center gap-2 bg-white text-black hover:bg-pcb-primary hover:text-white font-bold py-2 px-4 rounded-sm text-xs uppercase tracking-wide transition-all font-mono">
            <Wallet className="w-3 h-3" />
            <span className="hidden sm:inline">Connect</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
