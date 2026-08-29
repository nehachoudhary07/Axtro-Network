import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('axtro_theme') as Theme | null;
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      // Check system preference if no saved setting
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'dark'; // AXTRO default is dark, but system check available
      }
    }
    return 'dark';
  });

  const applyThemeClasses = (t: Theme) => {
    const root = document.documentElement;
    if (t === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  };

  useEffect(() => {
    applyThemeClasses(theme);
    try {
      localStorage.setItem('axtro_theme', theme);
    } catch (e) {}
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    if (newTheme === theme) return;
    const doc = document as any;
    if (typeof window !== 'undefined' && doc.startViewTransition) {
      doc.startViewTransition(() => {
        setThemeState(newTheme);
        applyThemeClasses(newTheme);
      });
    } else {
      setThemeState(newTheme);
    }
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
