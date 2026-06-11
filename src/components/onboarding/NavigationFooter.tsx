import { ArrowLeft, ArrowRight } from 'lucide-react';
import PrimaryButton from '../auth/PrimaryButton';

interface NavigationFooterProps {
  currentStep: number;
  canContinue: boolean;
  onBack: () => void;
  onNext: () => void;
}

export default function NavigationFooter({
  currentStep,
  canContinue,
  onBack,
  onNext,
}: NavigationFooterProps) {
  // Step 0 handles its own buttons in the welcome panel
  if (currentStep === 0) return null;

  const isSummaryStep = currentStep === 6;

  return (
    <div className="flex items-center justify-between pt-6 border-t border-white/5 w-full mt-8 animate-in fade-in duration-300">
      {/* Back / Edit Answers Button */}
      <button
        type="button"
        onClick={onBack}
        className="flex items-center space-x-2 px-4 py-2.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer focus:outline-none focus:underline"
      >
        <ArrowLeft className="w-4 h-4 text-zinc-500 group-hover:text-white" />
        <span>{isSummaryStep ? 'Edit Answers' : 'Previous'}</span>
      </button>

      {/* Continue / Next Button */}
      <div className="w-36">
        <PrimaryButton
          disabled={!canContinue}
          onClick={onNext}
          className="py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5"
        >
          <span>Continue</span>
          {!isSummaryStep && <ArrowRight className="w-4 h-4" />}
        </PrimaryButton>
      </div>
    </div>
  );
}
