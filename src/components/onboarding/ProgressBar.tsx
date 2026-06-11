interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  // If we are at Step 0, progress is 0. If Step 7, it's 100% or hidden.
  const progressPercent = Math.min(100, Math.max(0, Math.round((currentStep / totalSteps) * 100)));

  return (
    <div className="space-y-2 w-full animate-in fade-in duration-300">
      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{progressPercent}% Complete</span>
      </div>
      <div className="w-full h-1 bg-zinc-900 border border-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 bg-[length:200%_auto] animate-pulse-slow transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
