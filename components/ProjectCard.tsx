import React from 'react';
import { Project } from '../types';
import { Star, GitFork, ShieldCheck, Zap, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="group relative bg-pcb-panel border border-pcb-border overflow-hidden hover:border-pcb-primary/40 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_-10px_rgba(0,56,223,0.15)]">
      
      {/* Header Status Bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-pcb-border bg-black/40 text-[10px] font-mono uppercase text-zinc-500">
         <span className="group-hover:text-pcb-primary-light transition-colors">ID: {project.id.padStart(4, '0')}</span>
         <span className={project.siliconSeal ? "text-gold-seal flex items-center gap-1" : ""}>
            {project.siliconSeal ? <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> VERIFIED</span> : "DRAFT"}
         </span>
      </div>

      {/* Image / Preview Area */}
      <div className="aspect-[16/9] w-full overflow-hidden relative border-b border-pcb-border bg-black">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
        />
        {/* Overlay Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 p-3">
             <div className="bg-black/80 backdrop-blur text-white border border-zinc-800 px-2 py-1 text-xs font-mono">
                {project.price === 'Free' ? 'OSS' : `${project.price} USDC`}
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow relative">
        <div className="flex items-start justify-between mb-2">
            <h3 className="text-base font-bold text-zinc-100 group-hover:text-pcb-primary-light transition-colors font-sans tracking-tight leading-snug">
                {project.title}
            </h3>
        </div>
        
        <p className="text-xs text-zinc-500 line-clamp-2 mb-4 font-mono leading-relaxed flex-grow">
            {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0,3).map(tag => (
                <span key={tag} className="px-1.5 py-0.5 bg-zinc-900 text-[10px] text-zinc-400 border border-zinc-800 font-mono uppercase">
                    {tag}
                </span>
            ))}
        </div>

        {/* Footer Stats */}
        <div className="pt-3 border-t border-pcb-border flex items-center justify-between text-xs text-zinc-600 font-mono">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
                    <Star className="w-3 h-3" /> {project.stars}
                </div>
                <div className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
                    <GitFork className="w-3 h-3" /> {project.forks}
                </div>
            </div>
            <div className="flex items-center gap-2">
                 <img src={project.author.avatarUrl} className="w-4 h-4 rounded grayscale opacity-50 group-hover:opacity-100 transition-all" />
                 <span className="text-[10px] uppercase">{project.author.username}</span>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;