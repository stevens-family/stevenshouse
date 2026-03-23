import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Calendar, Image, CookingPot, Activity, Wallet } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-[#0B0C0F]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.05)]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 transition-all duration-300 hover:opacity-80"
            data-testid="header-logo"
          >
            <SFMonogram size="md" variant="default" />
            <span 
              className="font-bold text-lg md:text-xl text-[#F5F5F5] tracking-tight hidden sm:block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Stevens Family
            </span>
          </Link>

          {/* Menu Button */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#171A20] border border-transparent hover:border-[rgba(198,168,90,0.3)]"
              data-testid="menu-toggle"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={20} className="text-[#C6A85A]" />
              ) : (
                <Menu size={20} className="text-[#F5F5F5]" />
              )}
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div 
                className="absolute right-0 top-full mt-3 w-56 bg-[#171A20] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                data-testid="nav-dropdown"
              >
                <div className="p-2">
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-[rgba(198,168,90,0.15)] text-[#C6A85A]' 
                            : 'text-[#A7AAB3] hover:text-[#F5F5F5] hover:bg-[rgba(255,255,255,0.05)]'
                        }`}
                        data-testid={`nav-${item.label.toLowerCase()}`}
                      >
                        <item.icon size={18} strokeWidth={1.5} />
                        <span className="font-medium text-sm">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C6A85A]" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
