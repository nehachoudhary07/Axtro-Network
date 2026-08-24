import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle-button"
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 focus:outline-none cursor-pointer select-none text-xs font-semibold ${
        isDark
          ? 'bg-[#07101C] border-[#17263A] text-[#A7B0BE] hover:text-[#F5F7FA] hover:border-[#245FA8]'
          : 'bg-white border-[#D3DCE8] text-[#07101C] hover:text-[#164B8C] hover:border-[#245FA8] shadow-sm'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun size={14} className="text-[#F5F7FA] transition-transform duration-200 hover:rotate-45" />
        ) : (
          <Moon size={14} className="text-[#164B8C] transition-transform duration-200 hover:-rotate-12" />
        )}
      </div>
      <span className="text-[11px] font-mono uppercase tracking-wider">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}

export default ThemeToggle;
