import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 
        bg-[#F0EDE6] dark:bg-[#1A1A1E] 
        hover:bg-[#E5E0D5] dark:hover:bg-[#252528]
        border border-[#E0DCD4] dark:border-[#2A2A2E]
        ${className}`}
      data-testid="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        // Sun icon for dark mode (click to go light)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9B896" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        // Moon icon for light mode (click to go dark)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
};
