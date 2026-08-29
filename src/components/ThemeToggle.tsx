import React from 'react';
import { useThemeToggle } from './ui/skiper-ui/skiper26';
import { ThemeToggleButton2 } from './ui/skiper-ui/skiper4';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useThemeToggle({
    variant: 'circle',
    start: 'top-right',
    blur: true,
  });

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <ThemeToggleButton2
        className="size-8 p-1.5"
        isDark={isDark}
        onClick={toggleTheme}
      />
      {showLabel && (
        <button
          type="button"
          onClick={toggleTheme}
          className="text-xs font-mono uppercase tracking-wider cursor-pointer select-none text-[var(--text-secondary)] hover:text-[#DB2777] transition-colors"
        >
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </button>
      )}
    </div>
  );
}

export default ThemeToggle;
