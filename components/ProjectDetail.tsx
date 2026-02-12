import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Project, ChatMessage } from '../types';
import { MOCK_PROJECTS } from '../constants';
import { ShieldCheck, GitFork, Star, Download, Cpu, Activity, Terminal, Send, ArrowLeft, Layers, FileCode, Box } from 'lucide-react';
import { askAiAboutProject } from '../services/geminiService';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type TabType = 'overview' | 'bom' | 'schematic';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  
  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const found = MOCK_PROJECTS.find(p => p.id === id);
    if (found) {
      setProject(found);
      setMessages([{
        role: 'model',
        text: `// SYSTEM ONLINE\n// ANALYZING ${found.title.toUpperCase()} SPECIFICATIONS...\n// READY FOR QUERY.`,
        timestamp: Date.now()
      }]);
    }
  }, [id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || !project) return;
    
    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    const responseText = await askAiAboutProject(project, input);
    
    setIsThinking(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: Date.now() }]);
  };

  if (!project) return <div className="min-h-screen flex items-center justify-center font-mono text-pcb-primary-light animate-pulse">LOADING_DATA_STREAM...</div>;

  const chartData = project.downloads.map((val, idx) => ({ name: `Day ${idx + 1}`, downloads: val }));

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1400px]">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-pcb-primary-light mb-6 transition-colors font-mono text-xs uppercase tracking-wider group">
        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Index
      </Link>

      {/* Layout Grid - IDE Style */}
      <div className="grid grid-cols-12 gap-6 h-[85vh]">
        
        {/* Left Sidebar: Info & Actions */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            {/* ID Card */}
            <div className="bg-pcb-panel border border-pcb-border p-5 flex flex-col gap-4">
                 <div className="aspect-video w-full bg-black border border-zinc-800 overflow-hidden relative group">
                    <img src={project.imageUrl} alt="preview" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
                        <div className="font-mono text-[10px] text-pcb-primary-light">REV. 1.0.4</div>
                    </div>
                 </div>
                 
                 <div>
                    <h1 className="text-xl font-bold text-white leading-tight mb-2">{project.title}</h1>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono border-b border-zinc-800 pb-3 mb-3">
                        <img src={project.author.avatarUrl} className="w-4 h-4 rounded-sm grayscale" /> 
                        <span className="uppercase">{project.author.username}</span>
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <button className="w-full bg-pcb-primary text-white font-bold font-mono text-xs py-3 px-4 uppercase tracking-wide hover:bg-white hover:text-pcb-dark transition-colors flex items-center justify-center gap-2">
                        {project.price === 'Free' ? <Download className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3"/>}
                        {project.price === 'Free' ? 'PULL_FILES' : 'MINT_LICENSE'}
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                        <button className="bg-black border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 py-2 text-xs font-mono uppercase flex items-center justify-center gap-2 transition-all">
                            <Star className="w-3 h-3" /> {project.stars}
                        </button>
                        <button className="bg-black border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 py-2 text-xs font-mono uppercase flex items-center justify-center gap-2 transition-all">
                            <GitFork className="w-3 h-3" /> {project.forks}
                        </button>
                    </div>
                 </div>
                 
                 {project.siliconSeal && (
                    <div className="mt-2 bg-gold-seal/5 border border-gold-seal/20 text-gold-seal p-3 text-xs font-mono flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <div>
                            <div className="font-bold">SILICON SEAL</div>
                            <div className="text-[10px] opacity-70">0x892...28a Verified</div>
                        </div>
                    </div>
                 )}
            </div>

            {/* Tags */}
            <div className="bg-pcb-panel border border-pcb-border p-4">
                <div className="text-[10px] text-zinc-500 font-mono uppercase mb-3">Capabilities</div>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(t => (
                        <span key={t} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-mono uppercase">{t}</span>
                    ))}
                </div>
            </div>
        </div>

        {/* Center: Viewer */}
        <div className="col-span-12 lg:col-span-6 flex flex-col bg-pcb-panel border border-pcb-border overflow-hidden">
            {/* File Tabs */}
            <div className="flex border-b border-pcb-border bg-black">
                {[
                    { id: 'overview', icon: FileCode, label: 'README.md' },
                    { id: 'bom', icon: Layers, label: 'BOM.csv' },
                    { id: 'schematic', icon: Box, label: 'VIEWER.json' }
                ].map(tab => (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as TabType)}
                        className={`px-4 py-3 flex items-center gap-2 text-xs font-mono border-r border-pcb-border transition-colors ${
                            activeTab === tab.id 
                            ? 'bg-pcb-panel text-white border-t-2 border-t-pcb-primary' 
                            : 'bg-black text-zinc-600 hover:text-zinc-300 hover:bg-zinc-900'
                        }`}
                    >
                        <tab.icon className="w-3 h-3" />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Viewport */}
            <div className="flex-1 overflow-y-auto p-6 bg-[#0c0c0c] custom-scrollbar">
                 {activeTab === 'overview' && (
                    <div className="max-w-none prose prose-invert prose-headings:font-sans prose-p:text-zinc-400 prose-p:font-light prose-strong:text-white prose-code:text-pcb-primary-light prose-code:bg-zinc-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm">
                        <h2 className="text-xl font-bold mb-4">{project.description}</h2>
                        
                        <div className="grid grid-cols-2 gap-4 my-8">
                             {project.specs.map(spec => (
                                <div key={spec.key} className="bg-zinc-900/50 border border-zinc-800 p-3">
                                    <div className="text-[10px] text-zinc-500 uppercase font-mono mb-1">{spec.key}</div>
                                    <div className="text-sm text-pcb-primary-light font-mono">{spec.value}</div>
                                </div>
                             ))}
                        </div>

                        <div className="border border-zinc-800 bg-black/50 p-4 mt-8">
                            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-zinc-500 uppercase">
                                <Activity className="w-4 h-4" /> Download_Metrics
                            </div>
                            <div className="h-40">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={chartData}>
                                        <defs>
                                            <linearGradient id="colorDown" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0038df" stopOpacity={0.2}/>
                                                <stop offset="95%" stopColor="#0038df" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
                                        <XAxis dataKey="name" hide />
                                        <YAxis hide />
                                        <Tooltip 
                                            contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff', fontSize: '12px' }}
                                            itemStyle={{ color: '#4c7dff' }}
                                        />
                                        <Area type="monotone" dataKey="downloads" stroke="#0038df" strokeWidth={1} fill="url(#colorDown)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'bom' && (
                    <div className="font-mono text-xs">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-bold text-white">COMPONENT_LIST</h3>
                            <button className="text-pcb-primary-light border border-pcb-primary/30 px-3 py-1 hover:bg-pcb-primary/10">EXPORT.CSV</button>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead className="text-zinc-500 border-b border-zinc-800">
                                <tr>
                                    <th className="py-2 pr-4 font-normal">PART_NO</th>
                                    <th className="py-2 pr-4 font-normal">MFG</th>
                                    <th className="py-2 pr-4 font-normal">DESC</th>
                                    <th className="py-2 font-normal text-right">QTY</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-900">
                                {project.bom.map((item, idx) => (
                                    <tr key={idx} className="text-zinc-400 hover:bg-zinc-900/50 hover:text-white transition-colors">
                                        <td className="py-3 pr-4 text-pcb-primary-light">{item.partNumber}</td>
                                        <td className="py-3 pr-4">{item.manufacturer}</td>
                                        <td className="py-3 pr-4 text-zinc-500 truncate max-w-[200px]">{item.description}</td>
                                        <td className="py-3 text-right">{item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'schematic' && (
                     <div className="flex flex-col items-center justify-center h-full text-zinc-600 gap-4 border-2 border-dashed border-zinc-800 rounded">
                        <Cpu className="w-12 h-12 opacity-20" />
                        <p className="font-mono text-xs">RENDERER_NOT_INITIALIZED</p>
                    </div>
                )}
            </div>
        </div>

        {/* Right: AI Console */}
        <div className="col-span-12 lg:col-span-3 flex flex-col bg-black border border-pcb-border h-full">
            <div className="p-3 border-b border-pcb-border flex items-center gap-2 bg-zinc-900/30">
                <Terminal className="w-4 h-4 text-pcb-primary-light" />
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">Ai_Consultant</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar font-mono text-xs" ref={scrollRef}>
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <span className="text-[10px] text-zinc-700 uppercase">{msg.role === 'user' ? 'USR_INPUT' : 'SYS_OUTPUT'}</span>
                        <div className={`max-w-[90%] p-3 border ${
                            msg.role === 'user' 
                            ? 'bg-zinc-900 border-zinc-700 text-white' 
                            : 'bg-black border-pcb-primary/30 text-pcb-primary-light shadow-[0_0_15px_-5px_rgba(0,56,223,0.15)]'
                        }`}>
                            <div className="whitespace-pre-wrap leading-relaxed">
                                {msg.role === 'model' ? msg.text.replace(/\*\*/g, '').replace(/^/gm, '> ') : msg.text}
                            </div>
                        </div>
                    </div>
                ))}
                {isThinking && (
                     <div className="flex flex-col items-start gap-1">
                        <span className="text-[10px] text-zinc-700 uppercase">SYS_PROCESS</span>
                        <div className="text-pcb-primary-light animate-pulse">{'>'} PROCESSING_REQUEST...</div>
                    </div>
                )}
            </div>

            <div className="p-3 border-t border-pcb-border bg-zinc-900/20">
                <div className="relative flex items-center gap-2">
                    <span className="text-pcb-primary-light font-mono">{'>'}</span>
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="QUERY_SPEC..."
                        className="w-full bg-transparent border-none text-xs font-mono text-white focus:ring-0 placeholder:text-zinc-700"
                        disabled={isThinking}
                        autoFocus
                    />
                    <button 
                        onClick={handleSendMessage}
                        disabled={!input.trim() || isThinking}
                        className="text-zinc-500 hover:text-pcb-primary-light disabled:opacity-30 transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;