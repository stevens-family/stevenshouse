import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderLogo } from './FamilyLogo';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/calendar', label: 'Calendar' },
  { path: '/photos', label: 'Photos' },
  { path: '/recipes', label: 'Recipes' },
  { path: '/activities', label: 'Activities' },
  { path: '/finance', label: 'Finance' },
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
    <header className="sticky top-0 z-50 bg-[#0D0D0F]/90 backdrop-blur-md border-b border-[#1F1F23]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="transition-opacity hover:opacity-80">
            <HeaderLogo />
          </Link>

          {/* Menu Button */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#1A1A1E]"
              data-testid="menu-toggle"
              aria-label="Toggle menu"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path 
                  d={isMenuOpen ? "M1 1l16 10M1 11l16-10" : "M0 1h18M0 6h18M0 11h18"} 
                  stroke="#A0998C" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-48 bg-[#16161A] border border-[#232328] rounded-xl shadow-2xl overflow-hidden animate-fadeIn"
                data-testid="nav-dropdown"
              >
                <div className="py-2">
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2.5 text-sm transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#1F1E1A] text-[#C9B896]' 
                            : 'text-[#908C84] hover:text-[#D8D4CC] hover:bg-[#1A1A1E]'
                        }`}
                        data-testid={`nav-${item.label.toLowerCase()}`}
                      >
                        {item.label}
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
