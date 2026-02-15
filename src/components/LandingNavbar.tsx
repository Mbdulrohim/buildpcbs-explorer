import React from 'react';
import Link from 'next/link';

const LandingNavbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 flex items-center justify-center bg-pcb-primary/10 rounded border border-pcb-primary/20 transition-all">
              <img src="/logo.svg" alt="BuildPCBs Logo" className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">BuildPCBs</span>
          </Link>
          <div className="hidden md:flex space-x-6 text-sm text-zinc-400 font-medium">
            <Link href="/explorer" className="hover:text-white transition-colors">Explorer</Link>
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#marketplace" className="hover:text-white transition-colors">Marketplace</Link>
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sign in</button>
          <Link href="/explorer" className="bg-[#0038df] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
