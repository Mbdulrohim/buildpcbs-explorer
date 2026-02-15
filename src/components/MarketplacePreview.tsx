
import React from 'react';
import { Module } from '../types';

const mockModules: Module[] = [
  {
    id: '1',
    name: 'Ultra-Low Noise LDO',
    author: 'circuit_guru',
    price: 4.99,
    forks: 124,
    stars: 890,
    thumbnail: 'https://picsum.photos/seed/pcb1/400/300',
    tags: ['Power', 'Analog']
  },
  {
    id: '2',
    name: 'ESP32-S3 Core Module',
    author: 'iot_master',
    price: 0.00,
    forks: 2105,
    stars: 4502,
    thumbnail: 'https://picsum.photos/seed/pcb2/400/300',
    tags: ['MCU', 'Wireless']
  },
  {
    id: '3',
    name: 'DDR4 Memory Array 8GB',
    author: 'compute_labs',
    price: 19.99,
    forks: 45,
    stars: 213,
    thumbnail: 'https://picsum.photos/seed/pcb3/400/300',
    tags: ['Memory', 'High-Speed']
  },
  {
    id: '4',
    name: 'USB-C PD 100W Controller',
    author: 'power_ranger',
    price: 2.50,
    forks: 890,
    stars: 1205,
    thumbnail: 'https://picsum.photos/seed/pcb4/400/300',
    tags: ['Power', 'Interface']
  }
];

const MarketplacePreview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {mockModules.map((module) => (
        <div key={module.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer group">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={module.thumbnail} 
              alt={module.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              {module.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{module.name}</h4>
            <p className="text-xs text-zinc-500 mb-4">by <span className="text-zinc-300">@{module.author}</span></p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-4 text-xs text-zinc-400">
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  {module.stars}
                </span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                  {module.forks}
                </span>
              </div>
              <div className="text-blue-500 font-bold">
                {module.price === 0 ? 'FREE' : `$${module.price}`}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketplacePreview;
