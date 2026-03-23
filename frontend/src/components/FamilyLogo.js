// Stevens Family Legacy Logo - Heritage Family Brand
// Timeless, strong, generational family identity

export const FamilyLogo = ({ size = 'hero', className = '' }) => {
  const sizes = {
    sm: { scale: 0.35 },
    md: { scale: 0.5 },
    lg: { scale: 0.75 },
    hero: { scale: 1 },
    icon: { scale: 0.3 }
  };

  const { scale } = sizes[size];

  // Icon variant for app icon/favicon
  if (size === 'icon') {
    return (
      <div className={`relative ${className}`} style={{ width: 100, height: 100 }} data-testid="family-logo">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0D0D0F" />
          <path d="M50 12L18 28v28c0 18 12 30 32 38 20-8 32-20 32-38V28L50 12z" 
            fill="#1A1A1E" stroke="#C9B896" strokeWidth="2.5" />
          <text x="50" y="62" fontFamily="Georgia, serif" fontSize="38" fontWeight="700"
            fill="#C9B896" textAnchor="middle" style={{fontStyle: 'italic'}}>S</text>
        </svg>
      </div>
    );
  }

  // Small header variant
  if (size === 'sm' || size === 'md') {
    return (
      <div className={`flex items-center gap-3 ${className}`} data-testid="family-logo">
        {/* Mini shield */}
        <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
          <path d="M16 2L2 9v12c0 9 6 15 14 18 8-3 14-9 14-18V9L16 2z" 
            className="fill-[#F5F2EB] dark:fill-[#1A1A1E] stroke-[#C9B896]" strokeWidth="1.5" />
          <text x="16" y="23" fontFamily="Georgia, serif" fontSize="14" fontWeight="700"
            className="fill-[#8B7D5E] dark:fill-[#C9B896]" textAnchor="middle" style={{fontStyle: 'italic'}}>S</text>
        </svg>
        <div className="flex flex-col">
          <span 
            className="text-sm font-bold tracking-[0.12em] text-[#2D2D2D] dark:text-[#E8DCC4]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            STEVENS
          </span>
          <span 
            className="text-[10px] tracking-[0.2em] text-[#8B7D5E] dark:text-[#C9B896] font-semibold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            FAMILY
          </span>
        </div>
      </div>
    );
  }

  // Full hero logo
  return (
    <div 
      className={`flex flex-col items-center ${className}`} 
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
      data-testid="family-logo"
    >
      {/* Heritage Shield Crest with Decorative S */}
      <div className="mb-6">
        <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path 
            d="M50 6L8 26v40c0 28 18 46 42 54 24-8 42-26 42-54V26L50 6z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E]"
          />
          {/* Shield border - gold */}
          <path 
            d="M50 6L8 26v40c0 28 18 46 42 54 24-8 42-26 42-54V26L50 6z" 
            fill="none"
            className="stroke-[#B8A070] dark:stroke-[#C9B896]" 
            strokeWidth="3"
          />
          {/* Inner decorative border */}
          <path 
            d="M50 16L18 32v32c0 22 14 36 32 42 18-6 32-20 32-42V32L50 16z" 
            fill="none"
            className="stroke-[#C9B896] dark:stroke-[#C9B896]" 
            strokeWidth="1"
            opacity="0.5"
          />
          
          {/* Decorative S - Elegant Italic Serif with flourish */}
          <text 
            x="50" y="78" 
            fontFamily="Georgia, 'Times New Roman', serif" 
            fontSize="56" 
            fontWeight="700"
            className="fill-[#8B7D5E] dark:fill-[#C9B896]" 
            textAnchor="middle"
            style={{ fontStyle: 'italic' }}
          >
            S
          </text>
          
          {/* Decorative flourish under S */}
          <path 
            d="M32 88 Q50 95, 68 88" 
            fill="none"
            className="stroke-[#B8A070] dark:stroke-[#C9B896]" 
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Small accent dots */}
          <circle cx="28" cy="88" r="2" className="fill-[#B8A070] dark:fill-[#C9B896]" opacity="0.7" />
          <circle cx="72" cy="88" r="2" className="fill-[#B8A070] dark:fill-[#C9B896]" opacity="0.7" />
        </svg>
      </div>

      {/* STEVENS - Strong Heritage Serif */}
      <h1 
        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.15em] text-[#1A1A1A] dark:text-[#F0EDE6]"
        style={{ 
          fontFamily: "'Playfair Display', Georgia, serif",
        }}
      >
        STEVENS
      </h1>

      {/* FAMILY - Gold accent */}
      <div 
        className="mt-2 text-lg sm:text-xl tracking-[0.35em] font-bold text-[#8B7D5E] dark:text-[#C9B896]"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        FAMILY
      </div>

      {/* Decorative divider */}
      <div className="flex items-center gap-4 mt-6">
        <div className="w-16 h-px bg-[#C9B896] opacity-60" />
        <div className="w-2 h-2 rotate-45 bg-[#C9B896] opacity-80" />
        <div className="w-16 h-px bg-[#C9B896] opacity-60" />
      </div>

      {/* Tagline */}
      <p 
        className="mt-5 text-sm tracking-[0.12em] text-[#5A5A5A] dark:text-[#A0998C] uppercase font-medium"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        God First · Family Always
      </p>
    </div>
  );
};

// Header logo export
export const HeaderLogo = ({ className = '' }) => {
  return <FamilyLogo size="sm" className={className} />;
};
