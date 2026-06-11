import { useState, useEffect } from 'react';
import { 
  Rocket, 
  Cpu, 
  Terminal, 
  Database, 
  Smartphone, 
  ShieldCheck, 
  Server, 
  Sparkles, 
  Briefcase, 
  Code, 
  Code2, 
  HeartHandshake, 
  BookOpen, 
  Lock, 
  Gamepad2, 
  Trophy, 
  FolderGit2, 
  Compass, 
  HelpCircle,
  Clock
} from 'lucide-react';
import OnboardingLayout from '../onboarding/OnboardingLayout';
import SingleSelectGrid from '../onboarding/SingleSelectGrid';
import MultiSelectGrid from '../onboarding/MultiSelectGrid';
import SummaryCard from '../onboarding/SummaryCard';
import LoadingScreen from '../onboarding/LoadingScreen';
import NavigationFooter from '../onboarding/NavigationFooter';
import PrimaryButton from './PrimaryButton';

interface OnboardingFormProps {
  userSession: { name: string; email: string };
  onComplete: (data: {
    careerClarity: string;
    codingExperience: string;
    interests: string[];
    mainGoal: string;
    weeklyAvailability: string;
  }) => void;
}

export default function OnboardingForm({ userSession, onComplete }: OnboardingFormProps) {
  // Step state initialized from localStorage if it exists
  const [step, setStep] = useState<number>(() => {
    const saved = localStorage.getItem('mm_onboarding_state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed.step === 'number') {
          return parsed.step;
        }
      } catch {
        // Fallback to 0
      }
    }
    return 0;
  });

  // Selections state initialized from localStorage if it exists
  const [selections, setSelections] = useState(() => {
    const saved = localStorage.getItem('mm_onboarding_state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          careerClarity: parsed.careerClarity || '',
          codingExperience: parsed.codingExperience || '',
          interests: Array.isArray(parsed.interests) ? parsed.interests : [],
          mainGoal: parsed.mainGoal || '',
          weeklyAvailability: parsed.weeklyAvailability || '',
        };
      } catch {
        // Fallback below
      }
    }
    return {
      careerClarity: '',
      codingExperience: '',
      interests: [] as string[],
      mainGoal: '',
      weeklyAvailability: '',
    };
  });

  // Save selections to localStorage on every change
  useEffect(() => {
    localStorage.setItem(
      'mm_onboarding_state',
      JSON.stringify({ step, ...selections })
    );
  }, [step, selections]);

  // Option lists configuration
  const clarityOptions = [
    {
      id: 'I know exactly what I want',
      title: 'I know exactly what I want.',
      description: 'I already have a specific role or technology in mind.',
      icon: CheckCircleIcon,
    },
    {
      id: 'I have a general direction',
      title: 'I have a general direction.',
      description: 'I know what interests me but need help choosing the best specialization.',
      icon: Compass,
    },
    {
      id: "I'm exploring my options",
      title: "I'm exploring my options.",
      description: "I'm still discovering what suits me best and want recommendations.",
      icon: HelpCircle,
    },
  ];

  const experienceOptions = [
    {
      id: 'Complete Beginner',
      title: 'Complete Beginner',
      description: 'No previous programming experience.',
      icon: BookOpen,
    },
    {
      id: 'I know the basics',
      title: 'I know the basics',
      description: 'Variables, simple loops, basic functions.',
      icon: Terminal,
    },
    {
      id: "I've built a few projects",
      title: "I've built a few projects",
      description: 'Simple apps, scripts, or websites.',
      icon: Code2,
    },
    {
      id: "I'm confident building applications",
      title: "I'm confident building applications",
      description: 'Full-stack apps, APIs, working with git.',
      icon: Cpu,
    },
  ];

  const interestOptions = [
    { id: 'AI & Machine Learning', title: 'AI & Machine Learning', icon: Cpu },
    { id: 'Full-Stack Development', title: 'Full-Stack Development', icon: Code },
    { id: 'Frontend Engineering', title: 'Frontend Engineering', icon: Code2 },
    { id: 'Backend Engineering', title: 'Backend Engineering', icon: Server },
    { id: 'Mobile App Development', title: 'Mobile App Development', icon: Smartphone },
    { id: 'Data Science', title: 'Data Science', icon: Database },
    { id: 'Cloud & DevOps', title: 'Cloud & DevOps', icon: Server },
    { id: 'Cybersecurity', title: 'Cybersecurity', icon: ShieldCheck },
    { id: 'UI/UX Design', title: 'UI/UX Design', icon: Sparkles },
    { id: 'Blockchain', title: 'Blockchain', icon: Lock },
    { id: 'Game Development', title: 'Game Development', icon: Gamepad2 },
  ];

  const goalOptions = [
    {
      id: 'Get my first internship',
      title: 'Get my first internship',
      description: 'Connect directly with hiring startups.',
      icon: Briefcase,
    },
    {
      id: 'Get a software job',
      title: 'Get a software job',
      description: 'Land a high-performing entry/mid-level engineering role.',
      icon: Trophy,
    },
    {
      id: 'Build an impressive portfolio',
      title: 'Build an impressive portfolio',
      description: 'Create live-tested verified codebases.',
      icon: FolderGit2,
    },
    {
      id: 'Learn practical skills',
      title: 'Learn practical skills',
      description: 'Master production-grade stacks and tooling.',
      icon: Cpu,
    },
    {
      id: 'Become freelance-ready',
      title: 'Become freelance-ready',
      description: 'Acquire clients, write contracts, and deliver specs.',
      icon: GlobeIcon,
    },
    {
      id: 'Build my own startup',
      title: 'Build my own startup',
      description: 'Code your MVP and launch to real users.',
      icon: Rocket,
    },
  ];

  const availabilityOptions = [
    {
      id: 'Less than 5 hours',
      title: 'Less than 5 hours',
      description: 'Casual exploring or minor side coding sessions.',
      icon: Clock,
    },
    {
      id: '5–10 hours',
      title: '5–10 hours',
      description: 'Moderate progress alongside school or work.',
      icon: Clock,
    },
    {
      id: '10–20 hours',
      title: '10–20 hours',
      description: 'Deep learning, weekly sprints, building solid projects.',
      icon: Clock,
    },
    {
      id: 'More than 20 hours',
      title: 'More than 20 hours',
      description: 'Intensive fast track, full startup prep.',
      icon: Clock,
    },
  ];

  // Helper icons in SVG for absolute reliability
  function CheckCircleIcon({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  }

  function GlobeIcon({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.64-.78-8.014-2.141m15.686 0A8.993 8.993 0 0121 12a8.944 8.944 0 01-1.157 4.351m-15.686 0A8.993 8.993 0 003 12c0-1.572.404-3.05 1.114-4.332M19.843 16.2a8.997 8.997 0 00-7.843 4.582m7.843-4.582A11.952 11.952 0 0012 13.5c-2.905 0-5.64.78-8.014 2.141m0 0a8.997 8.997 0 017.843 4.582m-7.843-4.582A8.944 8.944 0 003 12c0 1.572.404 3.05 1.114 4.332"
        />
      </svg>
    );
  }

  // Handle value setter helpers
  const setClarity = (id: string) => setSelections({ ...selections, careerClarity: id });
  const setExperience = (id: string) => setSelections({ ...selections, codingExperience: id });
  const setInterests = (ids: string[]) => setSelections({ ...selections, interests: ids });
  const setGoal = (id: string) => setSelections({ ...selections, mainGoal: id });
  const setAvailability = (id: string) => setSelections({ ...selections, weeklyAvailability: id });

  // Navigation handlers
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step === 6) {
      // Edit answers takes them back to step 1
      setStep(1);
    } else {
      setStep((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const handleFinish = () => {
    // Clear temp onboarding state upon successful finish redirect
    localStorage.removeItem('mm_onboarding_state');
    onComplete(selections);
  };

  // Determine whether current step allows proceeding
  const canContinue = () => {
    switch (step) {
      case 1:
        return !!selections.careerClarity;
      case 2:
        return !!selections.codingExperience;
      case 3:
        return selections.interests.length > 0;
      case 4:
        return !!selections.mainGoal;
      case 5:
        return !!selections.weeklyAvailability;
      case 6:
        return true;
      default:
        return false;
    }
  };


  // Render Step 7 Matching screen directly
  if (step === 7) {
    return <LoadingScreen onComplete={handleFinish} />;
  }

  const activeTitle = userSession.name ? userSession.name.split(' ')[0] : 'Builder';

  return (
    <OnboardingLayout currentStep={step} totalSteps={6}>
      {/* Welcome Screen (Step 0) */}
      {step === 0 && (
        <div className="space-y-8 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mx-auto shadow-[0_0_30px_-5px_rgba(139,92,246,0.25)]">
            <HeartHandshake className="w-8 h-8 animate-pulse-slow" />
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-zinc-100 to-fuchsia-200 tracking-tight">
              Welcome to MakeMistakes, {activeTitle} 🚀
            </h3>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
              We'll ask a few quick questions to understand your goals and create a personalized roadmap that helps you build real projects and become startup-ready.
            </p>
          </div>

          <div className="space-y-4 max-w-xs mx-auto">
            <PrimaryButton onClick={handleNext}>
              Start My Journey
            </PrimaryButton>
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
              Estimated time: 2–3 minutes
            </p>
          </div>
        </div>
      )}

      {/* Career Clarity (Step 1) */}
      {step === 1 && (
        <div className="space-y-6 text-left animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              How clear are you about your career path?
            </h3>
            <p className="text-xs text-zinc-400 font-medium">
              Pick the clarity level that matches your situation.
            </p>
          </div>
          <SingleSelectGrid
            options={clarityOptions}
            selectedId={selections.careerClarity}
            onChange={setClarity}
            gridColsClassName="grid-cols-1 gap-3.5"
          />
        </div>
      )}

      {/* Coding Experience (Step 2) */}
      {step === 2 && (
        <div className="space-y-6 text-left animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              How would you describe your current experience?
            </h3>
            <p className="text-xs text-zinc-400 font-medium">
              Help us adapt project difficulty levels.
            </p>
          </div>
          <SingleSelectGrid
            options={experienceOptions}
            selectedId={selections.codingExperience}
            onChange={setExperience}
            gridColsClassName="grid-cols-1 gap-3.5"
          />
        </div>
      )}

      {/* Areas of Interest (Step 3) */}
      {step === 3 && (
        <div className="space-y-6 text-left animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Which areas interest you the most?
            </h3>
            <p className="text-xs text-zinc-400 font-medium">
              Select all focus tracks you are interested in.
            </p>
          </div>
          <div className="max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
            <MultiSelectGrid
              options={interestOptions}
              selectedIds={selections.interests}
              onChange={setInterests}
              gridColsClassName="grid-cols-1 sm:grid-cols-2 gap-3"
            />
          </div>
        </div>
      )}

      {/* Main Goal (Step 4) */}
      {step === 4 && (
        <div className="space-y-6 text-left animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              What is your primary objective?
            </h3>
            <p className="text-xs text-zinc-400 font-medium">
              Choose your primary focus outcome on MakeMistakes.
            </p>
          </div>
          <div className="max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
            <SingleSelectGrid
              options={goalOptions}
              selectedId={selections.mainGoal}
              onChange={setGoal}
              gridColsClassName="grid-cols-1 sm:grid-cols-2 gap-3"
            />
          </div>
        </div>
      )}

      {/* Weekly Availability (Step 5) */}
      {step === 5 && (
        <div className="space-y-6 text-left animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              How much time can you consistently invest each week?
            </h3>
            <p className="text-xs text-zinc-400 font-medium">
              Be realistic! Set coding hours you can sustain.
            </p>
          </div>
          <SingleSelectGrid
            options={availabilityOptions}
            selectedId={selections.weeklyAvailability}
            onChange={setAvailability}
            gridColsClassName="grid-cols-1 gap-3.5"
          />
        </div>
      )}

      {/* Summary (Step 6) */}
      {step === 6 && (
        <div className="space-y-6 text-left animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-zinc-100 to-fuchsia-200">
              Your Personalized Plan
            </h3>
            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
              We'll use this information to recommend projects, learning modules, and startup opportunities tailored to your goals.
            </p>
          </div>
          <SummaryCard selections={selections} />
        </div>
      )}

      {/* Step Navigation Buttons */}
      <NavigationFooter
        currentStep={step}
        canContinue={canContinue()}
        onBack={handleBack}
        onNext={handleNext}
      />
    </OnboardingLayout>
  );
}
