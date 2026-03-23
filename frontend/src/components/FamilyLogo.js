// Stevens Family Logo - Bold Script Hero Logo
// The emotional centerpiece of the family brand

export const FamilyLogo = ({ size = 'hero', className = '' }) => {
  const sizes = {
    sm: { width: 120, scale: 0.4 },
    md: { width: 180, scale: 0.6 },
    lg: { width: 280, scale: 0.9 },
    hero: { width: 400, scale: 1 },
    icon: { width: 100, scale: 0.35 }
  };

  const { width, scale } = sizes[size];

  // Icon variant - simplified for small sizes
  if (size === 'icon') {
    return (
      <div className={`relative ${className}`} style={{ width, height: width }} data-testid="family-logo">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0D0D0F" />
          <text 
            x="50" y="58" 
            fontFamily="'Pacifico', 'Brush Script MT', cursive" 
            fontSize="42" 
            fill="#E8DCC4" 
            textAnchor="middle"
            fontWeight="400"
          >
            S
          </text>
          <text 
            x="50" y="78" 
            fontFamily="'Plus Jakarta Sans', sans-serif" 
            fontSize="14" 
            fontWeight="700"
            fill="#C9B896" 
            textAnchor="middle"
            letterSpacing="0.15em"
          >
            FAMILY
          </text>
        </svg>
      </div>
    );
  }

  // Small header variant
  if (size === 'sm') {
    return (
      <div className={`flex flex-col items-center ${className}`} data-testid="family-logo">
        <span 
          className="text-2xl text-[#E8DCC4]"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Stevens
        </span>
      </div>
    );
  }

  // Full hero logo
  return (
    <div 
      className={`flex flex-col items-center ${className}`} 
      style={{ width: '100%', maxWidth: width }}
      data-testid="family-logo"
    >
      {/* Main Script - Stevens */}
      <div className="relative">
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F0EDE6] leading-none"
          style={{ 
            fontFamily: "'Pacifico', 'Brush Script MT', cursive",
            textShadow: '0 4px 30px rgba(0,0,0,0.3)',
            transform: `scale(${scale})`,
            transformOrigin: 'center'
          }}
        >
          Stevens
        </h1>
        
        {/* Decorative underline swoosh */}
        <svg 
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-auto opacity-60"
          viewBox="0 0 200 20" 
          fill="none"
        >
          <path 
            d="M10 15 Q50 5, 100 10 T190 8" 
            stroke="#C9B896" 
            strokeWidth="2" 
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* FAMILY - Strong uppercase */}
      <div 
        className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-[#C9B896] tracking-[0.35em] font-bold"
        style={{ 
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transform: `scale(${scale})`,
        }}
      >
        FAMILY
      </div>

      {/* Decorative divider */}
      <div className="flex items-center gap-3 mt-6 sm:mt-8 opacity-50">
        <div className="w-8 sm:w-12 h-px bg-[#C9B896]" />
        <div className="w-2 h-2 rounded-full bg-[#C9B896]" />
        <div className="w-8 sm:w-12 h-px bg-[#C9B896]" />
      </div>

      {/* Tagline */}
      <p 
        className="mt-4 sm:mt-6 text-sm sm:text-base text-[#908C84] tracking-widest uppercase"
        style={{ 
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          letterSpacing: '0.2em'
        }}
      >
        God First. Family Always.
      </p>
    </div>
  );
};

// Simple header logo variant
export const HeaderLogo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`} data-testid="header-logo">
      <span 
        className="text-xl sm:text-2xl text-[#E8DCC4]"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Stevens
      </span>
      <span 
        className="text-xs text-[#C9B896] tracking-[0.2em] font-semibold hidden sm:block"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        FAMILY
      </span>
    </div>
  );
};
