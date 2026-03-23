import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Calendar, Image, UtensilsCrossed, CookingPot, Activity, Wallet } from 'lucide-react';
import { SFMonogram } from './SFMonogram';

const menuItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/calendar', icon: Calendar, label: 'Calendar' },
  { path: '/photos', icon: Image, label: 'Photos' },
  { path: '/recipes', icon: CookingPot, label: 'Recipes' },
  { path: '/activities', icon: Activity, label: 'Activities' },
  { path: '/finance', icon: Wallet, label: 'Finance' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-[var(--divider)]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 transition-luxury hover:opacity-80"
            data-testid="header-logo"
          >
            <SFMonogram size="md" />
            <span className="font-heading font-bold text-lg md:text-xl text-primary tracking-tight hidden sm:block">
              Stevens Family
            </span>
          </Link>

          {/* Menu Button */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-luxury hover:bg-[var(--bg-card)] focus:bg-[var(--bg-card)]"
              data-testid="menu-toggle"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} className="text-primary" />
              )}
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-56 bg-card border border-[var(--border-subtle)] rounded-xl shadow-xl overflow-hidden animate-fadeIn"
                data-testid="nav-dropdown"
              >
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 transition-luxury gold-line-hover ${
                        isActive 
                          ? 'bg-gold-dim text-gold' 
                          : 'text-secondary hover:text-primary hover:bg-[var(--bg-secondary)]'
                      }`}
                      data-testid={`nav-${item.label.toLowerCase()}`}
                    >
                      <item.icon size={18} strokeWidth={1.5} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
