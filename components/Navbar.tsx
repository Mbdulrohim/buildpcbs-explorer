
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight">HardwareHub</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm text-zinc-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Explore</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#marketplace" className="hover:text-white transition-colors">Marketplace</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sign in</button>
          <button className="bg-[#0038df] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
