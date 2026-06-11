interface ValidationMessageProps {
  message?: string;
  type?: 'error' | 'warning' | 'success';
}

export default function ValidationMessage({ message, type = 'error' }: ValidationMessageProps) {
  if (!message) return null;

  const colorStyles = {
    error: 'text-rose-400 bg-rose-500/5 border-rose-500/10',
    warning: 'text-amber-400 bg-amber-500/5 border-amber-500/10',
    success: 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10',
  };

  return (
    <div className={`mt-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium text-left leading-normal animate-pulse-slow ${colorStyles[type]}`}>
      {message}
    </div>
  );
}
