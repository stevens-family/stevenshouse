import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Image, MoreHorizontal } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/calendar', icon: Calendar, label: 'Calendar' },
  { path: '/photos', icon: Image, label: 'Photos' },
  { path: '/more', icon: MoreHorizontal, label: 'More' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 h-20 bg-surface-light dark:bg-surface-dark border-t border-black/5 dark:border-white/10 backdrop-blur-lg z-50"
      data-testid="bottom-navigation"
    >
      <div className="flex items-center justify-around h-full max-w-lg mx-auto px-4">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path || 
            (path === '/more' && ['/dinner', '/closet', '/find-items', '/recipes', '/activities', '/finance', '/upload', '/more'].includes(location.pathname));
          
          return (
            <Link
              key={path}
              to={path}
              data-testid={`nav-${label.toLowerCase()}`}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text-secondary dark:text-dark-secondary hover:text-primary'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
