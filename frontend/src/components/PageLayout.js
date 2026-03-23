import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { DarkModeToggle } from './DarkModeToggle';

export const PageLayout = ({ children, title, showBack = true }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-black/5 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            {showBack && (
              <Link 
                to="/" 
                data-testid="back-button"
                className="p-2 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
              >
                <ArrowLeft size={24} className="text-text-primary dark:text-dark-primary" />
              </Link>
            )}
            <h1 className="text-xl font-bold text-text-primary dark:text-dark-primary font-heading">
              {title}
            </h1>
          </div>
          <DarkModeToggle />
        </div>
      </header>
      <main className="px-4 py-6 max-w-4xl mx-auto animate-fadeIn">
        {children}
      </main>
      <Navigation />
    </div>
  );
};
