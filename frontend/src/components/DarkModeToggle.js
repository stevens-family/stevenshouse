import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      data-testid="dark-mode-toggle"
      className="p-3 rounded-full bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={20} className="text-accent" />
      ) : (
        <Moon size={20} className="text-primary" />
      )}
    </button>
  );
};
