import { useState, useEffect } from 'react';
import { Check, Cpu, Terminal, Database, Smartphone, ShieldCheck, Server, Lock, Gamepad2, ArrowRight, ArrowLeft, HeartHandshake, Loader2 } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

interface OnboardingFormProps {
  userSession: { name: string; email: string };
  onComplete: () => void;
}

export default function OnboardingForm({ userSession, onComplete }: OnboardingFormProps) {
  const [step, setStep] = useState(1);
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  const [commitment, setCommitment] = useState('');
  const [goal, setGoal] = useState('');
  const [isMatching, setIsMatching] = useState(false);
  const [matchProgress, setMatchProgress] = useState(0);

  const tracks = [
    { id: 'ai', title: 'AI Engineering', icon: Cpu, desc: 'LLMs, RAG, agents' },
    { id: 'fs', title: 'Full Stack', icon: Terminal, desc: 'Next.js, SQL, WebSockets' },
    { id: 'ds', title: 'Data Science', icon: Database, desc: 'EDA, pipelines, ML models' },
    { id: 'mobile', title: 'Mobile Dev', icon: Smartphone, desc: 'React Native, Native SDKs' },
    { id: 'cyber', title: 'Cybersecurity', icon: ShieldCheck, desc: 'Pen testing, cryptography' },
    { id: 'devops', title: 'DevOps & Cloud', icon: Server, desc: 'Terraform, K8s, Docker' },
    { id: 'web3', title: 'Blockchain & Web3', icon: Lock, desc: 'Solidity, smart contracts' },
    { id: 'game', title: 'Game Dev', icon: Gamepad2, desc: 'Unity, C#, physics loops' },
  ];

  const commitments = [
    { value: 'low', label: 'Casual builder (<10 hours/week)', desc: 'Fit learning around your active school schedules.' },
    { value: 'medium', label: 'Committed candidate (10-20 hours/week)', desc: 'Sprint weekly through production codebase missions.' },
    { value: 'high', label: 'Intensive path (20-40 hours/week)', desc: 'Fast track towards startup placements in weeks.' },
    { value: 'full', label: 'Full-time builder (40+ hours/week)', desc: 'Immersive focus on production code.' },
  ];

  const goals = [
    { value: 'internship', label: 'Secure a startup internship', desc: 'Connect directly with CTOs looking for execution-first builders.' },
    { value: 'portfolio', label: 'Build a production portfolio', desc: 'Create live-tested, verified codebase applications.' },
    { value: 'learn', label: 'Learn from industry engineers', desc: 'Receive automated linter checks and peer PR audits.' },
  ];

  const handleTrackToggle = (trackId: string) => {
    if (selectedTracks.includes(trackId)) {
      setSelectedTracks(selectedTracks.filter((t) => t !== trackId));
    } else {
      setSelectedTracks([...selectedTracks, trackId]);
    }
  };

  const handleFinish = () => {
    setIsMatching(true);
  };

  useEffect(() => {
    if (!isMatching) return;

    const interval = setInterval(() => {
      setMatchProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [isMatching, onComplete]);

  const getMatchStatus = (): string => {
    if (matchProgress < 25) {
      return 'Auditing coding profile specs...';
    } else if (matchProgress < 50) {
      return 'Searching hiring specifications of 240+ startups...';
    } else if (matchProgress < 75) {
      return 'Mapping stack alignment with active roles...';
    } else if (matchProgress < 95) {
      return 'Matching found! Compiling startup matched opportunities...';
    } else {
      return 'Ready! Launching candidate dashboard...';
    }
  };

  const activeTitle = userSession.name ? userSession.name.split(' ')[0] : 'Builder';

  if (isMatching) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center p-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none animate-glow"></div>
        
        {/* Loader Dashboard Panel */}
        <div className="w-full max-w-md bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl space-y-8 relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mx-auto animate-pulse-slow">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white tracking-tight">CTO Match Analyzer</h4>
            <p className="text-sm text-zinc-400 font-mono tracking-wide">{getMatchStatus()}</p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full h-1.5 bg-zinc-950 border border-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300" style={{ width: `${matchProgress}%` }}></div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>ANALYSIS PROGRESS</span>
              <span>{matchProgress}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-xl bg-zinc-900/20 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl space-y-8 relative z-10">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center space-x-2">
            <HeartHandshake className="w-5 h-5 text-violet-400" />
            <span className="text-sm font-bold text-zinc-300">Welcome, {activeTitle}</span>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase">Step {step} of 3</span>
        </div>

        {/* Dynamic Steps Content */}
        {step === 1 && (
          <div className="space-y-6 text-left">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">Which tracks are you interested in building?</h3>
              <p className="text-xs text-zinc-400 font-medium">Select all that apply to help match you with relevant codebase missions.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3.5">
              {tracks.map((track) => {
                const TrackIcon = track.icon;
                const isSelected = selectedTracks.includes(track.id);
                return (
                  <button
                    key={track.id}
                    onClick={() => handleTrackToggle(track.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-28 relative group cursor-pointer ${
                      isSelected
                        ? 'bg-violet-600/10 border-violet-500/30'
                        : 'bg-zinc-950/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/30'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`p-1.5 rounded-lg border ${
                        isSelected ? 'bg-violet-500/20 text-violet-300 border-violet-500/30' : 'bg-zinc-900 border-white/5 text-zinc-500'
                      }`}>
                        <TrackIcon className="w-4 h-4" />
                      </div>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-violet-600 flex items-center justify-center text-white">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-zinc-200 block mb-0.5">{track.title}</span>
                      <span className="text-[10px] text-zinc-500 block truncate">{track.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 text-left">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">What is your weekly time commitment?</h3>
              <p className="text-xs text-zinc-400 font-medium">Be honest! DevOps, AI, and Full Stack tracks are self-paced.</p>
            </div>

            <div className="space-y-3">
              {commitments.map((c) => {
                const isSelected = commitment === c.value;
                return (
                  <button
                    key={c.value}
                    onClick={() => setCommitment(c.value)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex justify-between items-center cursor-pointer ${
                      isSelected
                        ? 'bg-violet-600/10 border-violet-500/30'
                        : 'bg-zinc-950/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/30'
                    }`}
                  >
                    <div className="text-left max-w-[90%]">
                      <span className="text-xs font-bold text-zinc-200 block mb-0.5">{c.label}</span>
                      <span className="text-[10px] text-zinc-500 block leading-normal">{c.desc}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-violet-500 bg-violet-600' : 'border-white/10'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 text-left">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">What is your primary goal on MakeMistakes?</h3>
              <p className="text-xs text-zinc-400">We will route your profile to companies matching this target.</p>
            </div>

            <div className="space-y-3">
              {goals.map((g) => {
                const isSelected = goal === g.value;
                return (
                  <button
                    key={g.value}
                    onClick={() => setGoal(g.value)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex justify-between items-center cursor-pointer ${
                      isSelected
                        ? 'bg-violet-600/10 border-violet-500/30'
                        : 'bg-zinc-950/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/30'
                    }`}
                  >
                    <div className="text-left max-w-[90%]">
                      <span className="text-xs font-bold text-zinc-200 block mb-0.5">{g.label}</span>
                      <span className="text-[10px] text-zinc-500 block leading-normal">{g.desc}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-violet-500 bg-violet-600' : 'border-white/10'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center space-x-2 px-4 py-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
          ) : (
            <div></div>
          )}

          {step < 3 ? (
            <button
              disabled={(step === 1 && selectedTracks.length === 0) || (step === 2 && !commitment)}
              onClick={() => setStep(step + 1)}
              className="flex items-center space-x-2 px-5 py-2.5 bg-zinc-900 border border-white/5 hover:border-white/10 text-xs font-bold text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="w-36">
              <PrimaryButton
                disabled={!goal}
                onClick={handleFinish}
                className="py-2.5 px-4 rounded-xl text-xs"
              >
                Finish Onboarding
              </PrimaryButton>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
