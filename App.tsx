import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Explorer from './components/Explorer';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-pcb-dark font-sans flex flex-col relative overflow-hidden">
        
        {/* Tech Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-tech-grid bg-[length:40px_40px] opacity-20"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pcb-dark opacity-90"></div>
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Explorer />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
              </Routes>
          </main>

          <footer className="border-t border-pcb-border py-8 bg-pcb-panel/50 backdrop-blur-sm mt-20">
              <div className="container mx-auto px-4 text-center">
                  <p className="text-zinc-600 text-xs font-mono tracking-wider">
                      BUILD_PCBS_NETWORK_V1.0 // SECURED_BY_SILICON_SEAL
                  </p>
                  <div className="flex justify-center gap-6 mt-4 text-xs text-zinc-500 font-mono">
                      <a href="#" className="hover:text-pcb-primary-light transition-colors">[PRIVACY]</a>
                      <a href="#" className="hover:text-pcb-primary-light transition-colors">[TERMS]</a>
                      <a href="#" className="hover:text-pcb-primary-light transition-colors">[CONTRACTS]</a>
                  </div>
              </div>
          </footer>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;