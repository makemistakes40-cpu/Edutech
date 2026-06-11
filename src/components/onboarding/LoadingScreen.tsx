import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const statusMessages = [
  'Analyzing your goals...',
  'Matching relevant learning paths...',
  'Preparing project recommendations...',
  'Building your personalized roadmap...',
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // 3 seconds total matching delay. Let's increment progress every 30ms.
    const duration = 3000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 400); // Small visual buffer at 100%
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Transition messages smoothly every 750ms
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev < statusMessages.length - 1 ? prev + 1 : prev));
    }, 750);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none animate-glow" />

      {/* Matching Card Box */}
      <div className="w-full max-w-md bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl space-y-8 relative z-10 text-center animate-in fade-in zoom-in-95 duration-500">
        
        {/* Animated Spin Wheel */}
        <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mx-auto shadow-[0_0_30px_-5px_rgba(139,92,246,0.25)] animate-pulse-slow">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>

        {/* Status Texts */}
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-white tracking-tight">Roadmap Builder</h4>
          <p className="text-sm text-zinc-400 font-mono tracking-wide h-6 flex items-center justify-center transition-all duration-300">
            {statusMessages[messageIndex]}
          </p>
        </div>

        {/* Micro progress bar */}
        <div className="space-y-2">
          <div className="w-full h-1.5 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>OPTIMIZING CORE PATHWAY</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
