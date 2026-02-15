
import React, { useEffect, useState, useRef } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'IBEAM' | 'TYPEWRITER' | 'DISSOLVE' | 'DONE'>('IBEAM');
  const [text, setText] = useState('');
  const [beeping, setBeeping] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fullText = "imagine a github for hardware";

  useEffect(() => {
    // Phase 1: High-intensity I-Beam inversion point for ~2.8 seconds
    const beepInterval = setInterval(() => {
      setBeeping(true);
      setTimeout(() => setBeeping(false), 450);
    }, 900);

    const timer = setTimeout(() => {
      clearInterval(beepInterval);
      setPhase('TYPEWRITER');
    }, 2800);

    return () => {
      clearInterval(beepInterval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (phase === 'TYPEWRITER') {
      let currentIdx = 0;
      const typeInterval = setInterval(() => {
        setText(fullText.slice(0, currentIdx + 1));
        currentIdx++;
        if (currentIdx === fullText.length) {
          clearInterval(typeInterval);
          setTimeout(() => setPhase('DISSOLVE'), 1800);
        }
      }, 95);
      return () => clearInterval(typeInterval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'DISSOLVE' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      
      ctx.fillStyle = 'white';
      ctx.font = '300 32px "JetBrains Mono", monospace';
      if (window.innerWidth > 768) ctx.font = '300 52px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(fullText, width / 2, height / 2);

      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      const particles: any[] = [];

      // Extreme density for a premium dust dissolution feel
      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const alpha = pixels[(y * width + x) * 4 + 3];
          if (alpha > 120) {
            if (Math.random() > 0.04) { 
              particles.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.2 - Math.random() * 0.5,
                life: 1.0,
                decay: 0.001 + Math.random() * 0.0015,
                size: 0.5 + Math.random() * 1.5
              });
            }
          }
        }
      }

      let animationFrame: number;
      const animate = () => {
        ctx.clearRect(0, 0, width, height);
        let alive = false;
        
        particles.forEach(p => {
          if (p.life > 0) {
            alive = true;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.002; 
            p.life -= p.decay;
            
            ctx.fillStyle = `rgba(255, 255, 255, ${p.life})`;
            ctx.fillRect(p.x, p.y, p.size, p.size);
          }
        });

        if (alive) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setPhase('DONE');
          onComplete();
        }
      };

      animate();
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [phase, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {phase === 'IBEAM' && (
        <div className={`w-[6px] h-40 bg-white shadow-[0_0_80px_rgba(255,255,255,1),0_0_20px_white] transition-opacity duration-300 ${beeping ? 'opacity-100' : 'opacity-40'}`} />
      )}
      
      {phase === 'TYPEWRITER' && (
        <div className="flex items-center space-x-4 px-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mono font-light tracking-tighter text-white">
            {text.split(' github for hardware')[0]}
            {text.includes(' github for hardware') && (
              <span className="text-zinc-600"> github for hardware</span>
            )}
          </h1>
          <div className="w-[6px] h-24 bg-white shadow-[0_0_40px_rgba(255,255,255,0.8)] cursor-blink" />
        </div>
      )}

      {phase === 'DISSOLVE' && (
        <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" />
      )}
    </div>
  );
};

export default IntroAnimation;
