// Stevens Family Legacy Logo - Typography-First Heritage Brand
// Clean crest silhouette (no letter), STEVENS as primary identity

export const FamilyLogo = ({ size = 'hero', className = '' }) => {
  const sizes = {
    sm: { scale: 0.35 },
    md: { scale: 0.5 },
    lg: { scale: 0.75 },
    hero: { scale: 1 },
    icon: { scale: 0.3 }
  };

  const { scale } = sizes[size];

  // Icon variant for PWA app icon
  if (size === 'icon') {
    return (
      <div className={`relative ${className}`} style={{ width: 100, height: 100 }} data-testid="family-logo">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0D0D0F" />
          {/* Clean shield silhouette */}
          <path 
            d="M50 14L20 28v26c0 18 12 30 30 36 18-6 30-18 30-36V28L50 14z" 
            fill="#1A1A1E" stroke="#C9B896" strokeWidth="2.5" 
          />
          {/* Inner decorative frame */}
          <path 
            d="M50 24L28 34v20c0 14 9 23 22 28 13-5 22-14 22-28V34L50 24z" 
            fill="none" stroke="#C9B896" strokeWidth="0.8" opacity="0.35" 
          />
          {/* Horizontal accent bar */}
          <line x1="38" y1="50" x2="62" y2="50" stroke="#C9B896" strokeWidth="2" strokeLinecap="round" />
          {/* Small diamond accent */}
          <rect x="47.5" y="47.5" width="5" height="5" rx="0.5" transform="rotate(45 50 50)" fill="#C9B896" opacity="0.5" />
        </svg>
      </div>
    );
  }

  // Small header variant
  if (size === 'sm' || size === 'md') {
    return (
      <div className={`flex items-center gap-3 ${className}`} data-testid="family-logo">
        {/* Mini shield — clean, no letter */}
        <svg width="34" height="40" viewBox="0 0 34 40" fill="none">
          <path 
            d="M17 2L2 9v14c0 10 6 16 15 19 9-3 15-9 15-19V9L17 2z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E] stroke-[#C9B896]" strokeWidth="1.5" 
          />
          {/* Inner frame */}
          <path 
            d="M17 8L6 13v10c0 7 4 12 11 14 7-2 11-7 11-14V13L17 8z" 
            fill="none" className="stroke-[#C9B896]" strokeWidth="0.6" opacity="0.3" 
          />
          {/* Horizontal accent */}
          <line x1="11" y1="20" x2="23" y2="20" className="stroke-[#B8A070] dark:stroke-[#C9B896]" strokeWidth="1.5" strokeLinecap="round" />
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

  // Full hero logo — clean crest + bold typography
  return (
    <div 
      className={`flex flex-col items-center ${className}`} 
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
      data-testid="family-logo"
    >
      {/* Clean Shield Crest — no letter, just elegant form */}
      <div className="mb-6">
        <svg width="110" height="135" viewBox="0 0 110 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path 
            d="M55 6L6 30v48c0 32 20 52 49 58 29-6 49-26 49-58V30L55 6z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E]"
          />
          {/* Shield border — gold */}
          <path 
            d="M55 6L6 30v48c0 32 20 52 49 58 29-6 49-26 49-58V30L55 6z" 
            fill="none"
            className="stroke-[#B8A070] dark:stroke-[#C9B896]" 
            strokeWidth="3"
          />
          {/* Inner decorative frame */}
          <path 
            d="M55 18L18 38v38c0 24 14 40 37 46 23-6 37-22 37-46V38L55 18z" 
            fill="none"
            className="stroke-[#C9B896]" 
            strokeWidth="0.8"
            opacity="0.3"
          />
          
          {/* Central decorative accent — horizontal bar + diamond */}
          <line x1="34" y1="68" x2="76" y2="68" className="stroke-[#B8A070] dark:stroke-[#C9B896]" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="52" y="62" width="6" height="6" rx="0.5" transform="rotate(45 55 65)" className="fill-[#B8A070] dark:fill-[#C9B896]" opacity="0.45" />
          
          {/* Top accent — small horizontal line */}
          <line x1="44" y1="42" x2="66" y2="42" className="stroke-[#C9B896]" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
          
          {/* Bottom accent line */}
          <line x1="38" y1="118" x2="72" y2="118" className="stroke-[#B8A070] dark:stroke-[#C9B896]" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* STEVENS — Strong Heritage Serif, Primary Identity */}
      <h1 
        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.15em] text-[#1A1A1A] dark:text-[#F0EDE6]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        STEVENS
      </h1>

      {/* FAMILY — Gold accent */}
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
