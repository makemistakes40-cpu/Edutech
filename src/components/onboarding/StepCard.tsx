import { Check } from 'lucide-react';

interface StepCardProps {
  id: string;
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  isSelected: boolean;
  onClick: () => void;
  ariaLabel?: string;
}

export default function StepCard({
  title,
  description,
  icon: Icon,
  isSelected,
  onClick,
  ariaLabel,
}: StepCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
        isSelected
          ? 'bg-violet-600/10 border-violet-500/40 shadow-[0_0_25px_-5px_rgba(139,92,246,0.15)] ring-1 ring-violet-500/20'
          : 'bg-zinc-950/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/30'
      }`}
      aria-pressed={isSelected}
      aria-label={ariaLabel || `Select ${title}`}
    >
      {/* Icon slot */}
      {Icon && (
        <div
          className={`p-2.5 rounded-xl border transition-colors shrink-0 ${
            isSelected
              ? 'bg-violet-500/20 text-violet-300 border-violet-500/30'
              : 'bg-zinc-900 border-white/5 text-zinc-500 group-hover:text-zinc-300'
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}

      {/* Text details */}
      <div className="flex-1 min-w-0 pr-6 space-y-1 select-none">
        <h4 className="text-sm font-bold text-zinc-100 tracking-tight leading-snug group-hover:text-white transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
            {description}
          </p>
        )}
      </div>

      {/* Checkbox indicator */}
      <div className="shrink-0 flex items-center justify-center mt-1">
        <div
          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
            isSelected
              ? 'border-violet-500 bg-violet-600 scale-110'
              : 'border-white/10 bg-zinc-900 group-hover:border-white/20'
          }`}
          aria-hidden="true"
        >
          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3.5] text-white" />}
        </div>
      </div>
    </button>
  );
}
