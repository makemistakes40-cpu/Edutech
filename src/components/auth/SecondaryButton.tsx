import React from 'react';

export default function SecondaryButton({
  children,
  disabled,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      disabled={disabled}
      className={`w-full py-4 px-6 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900/20 hover:bg-zinc-900/40 border border-white/5 hover:border-white/15 active:scale-[0.99] disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
