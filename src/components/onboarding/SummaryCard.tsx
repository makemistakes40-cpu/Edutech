interface SummaryCardProps {
  selections: {
    careerClarity: string;
    codingExperience: string;
    interests: string[];
    mainGoal: string;
    weeklyAvailability: string;
  };
}

export default function SummaryCard({ selections }: SummaryCardProps) {
  const items = [
    { label: 'Career Clarity', value: selections.careerClarity },
    { label: 'Experience Level', value: selections.codingExperience },
    { label: 'Primary Goal', value: selections.mainGoal },
    { label: 'Weekly Commitment', value: selections.weeklyAvailability },
  ];

  return (
    <div className="w-full bg-zinc-950/60 border border-white/5 rounded-2xl p-6 space-y-6 text-left animate-in fade-in zoom-in duration-300">
      
      {/* Grid for key-value fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="space-y-1 p-3.5 rounded-xl bg-zinc-900/40 border border-white/5">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide block">
              {item.label}
            </span>
            <span className="text-sm font-bold text-white block">
              {item.value || 'Not selected'}
            </span>
          </div>
        ))}
      </div>

      {/* Interests section displaying tags */}
      <div className="space-y-2 p-3.5 rounded-xl bg-zinc-900/40 border border-white/5">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide block">
          Core Focus Areas
        </span>
        {selections.interests.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {selections.interests.map((interest, idx) => (
              <span
                key={idx}
                className="text-[11px] font-bold text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-lg hover:bg-violet-500/20 transition-all duration-300 select-none animate-in fade-in"
              >
                {interest}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-xs text-zinc-500 italic">No interests selected</span>
        )}
      </div>

    </div>
  );
}
