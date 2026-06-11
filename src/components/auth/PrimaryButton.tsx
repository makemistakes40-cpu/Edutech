import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export default function PrimaryButton({
  children,
  isLoading = false,
  disabled,
  className = '',
  ...props
}: PrimaryButtonProps) {
  const isButtonDisabled = disabled || isLoading;

  return (
    <button
      type="submit"
      disabled={isButtonDisabled}
      className={`w-full py-4 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 active:scale-[0.99] disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.3)] disabled:shadow-none hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] flex items-center justify-center space-x-2 relative overflow-hidden group ${className}`}
      {...props}
    >
      {/* Background slide hover effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>

      <span className="relative flex items-center space-x-2 justify-center">
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        <span>{isLoading ? 'Processing...' : children}</span>
      </span>
    </button>
  );
}
