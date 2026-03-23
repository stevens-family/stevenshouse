// Stevens Family Legacy Logo - Calligraphic "S" Monogram Crest
// Hand-crafted SVG path — bold cursive S with calligraphic thick-thin variation
// Not a font glyph, not a text element — a designed logo mark

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
          <path d="M50 14L20 28v26c0 18 12 30 30 36 18-6 30-18 30-36V28L50 14z" fill="#1A1A1E" stroke="#C9B896" strokeWidth="2.5" />
          {/* Calligraphic S — base curve */}
          <path d="M60 32 C58 24, 52 22, 46 24 C38 26, 34 34, 36 42 C38 48, 46 52, 52 56 C58 60, 64 68, 58 74 C52 80, 42 78, 38 72"
            stroke="#C9B896" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* Thick overlays on main curves */}
          <path d="M46 24 C38 26, 34 34, 36 42"
            stroke="#C9B896" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M52 56 C58 60, 64 68, 58 74"
            stroke="#C9B896" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    );
  }

  // Small header variant
  if (size === 'sm' || size === 'md') {
    return (
      <div className={`flex items-center gap-3 ${className}`} data-testid="family-logo">
        <svg width="34" height="40" viewBox="0 0 34 40" fill="none">
          <path 
            d="M17 2L2 9v14c0 10 6 16 15 19 9-3 15-9 15-19V9L17 2z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E] stroke-[#C9B896]" strokeWidth="1.5" 
          />
          {/* Calligraphic S — mini */}
          <path d="M21 11 C20 8, 18 7, 16 8 C13 9, 11 12, 12 15 C12 17, 15 18, 18 20 C20 21, 22 24, 20 27 C18 29, 14 28, 13 26"
            className="stroke-[#8B7D5E] dark:stroke-[#C9B896]" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Thick overlays */}
          <path d="M16 8 C13 9, 11 12, 12 15"
            className="stroke-[#8B7D5E] dark:stroke-[#C9B896]" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <path d="M18 20 C20 21, 22 24, 20 27"
            className="stroke-[#8B7D5E] dark:stroke-[#C9B896]" strokeWidth="3.2" strokeLinecap="round" fill="none" />
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

  // Full hero logo — calligraphic S monogram crest
  return (
    <div 
      className={`flex flex-col items-center ${className}`} 
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
      data-testid="family-logo"
    >
      {/* Shield Crest with Calligraphic S */}
      <div className="mb-6">
        <svg width="120" height="145" viewBox="0 0 120 145" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path 
            d="M60 6L8 32v52c0 34 22 56 52 64 30-8 52-30 52-64V32L60 6z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E]"
          />
          {/* Shield border — gold */}
          <path 
            d="M60 6L8 32v52c0 34 22 56 52 64 30-8 52-30 52-64V32L60 6z" 
            fill="none"
            className="stroke-[#B8A070] dark:stroke-[#C9B896]" 
            strokeWidth="3"
          />
          {/* Inner decorative frame */}
          <path 
            d="M60 18L20 40v42c0 26 16 44 40 50 24-6 40-24 40-50V40L60 18z" 
            fill="none"
            className="stroke-[#C9B896]" 
            strokeWidth="0.8"
            opacity="0.3"
          />
          
          {/* Calligraphic S Monogram — hand-crafted path with thick-thin variation */}
          {/* Base S curve — the full flowing shape */}
          <path 
            d="M79 36 C77 24, 67 20, 57 22 C45 24, 35 36, 37 48 C39 58, 53 62, 63 68 C75 76, 81 90, 71 100 C61 110, 47 106, 43 94"
            className="stroke-[#8B7D5E] dark:stroke-[#C9B896]"
            strokeWidth="8" strokeLinecap="round" fill="none"
          />
          {/* Thick overlay — upper-left bowl (calligraphic downstroke) */}
          <path 
            d="M57 22 C45 24, 35 36, 37 48"
            className="stroke-[#8B7D5E] dark:stroke-[#C9B896]"
            strokeWidth="13" strokeLinecap="round" fill="none"
          />
          {/* Thick overlay — lower-right bowl (calligraphic downstroke) */}
          <path 
            d="M63 68 C75 76, 81 90, 71 100"
            className="stroke-[#8B7D5E] dark:stroke-[#C9B896]"
            strokeWidth="13" strokeLinecap="round" fill="none"
          />
          
          {/* Bottom accent line */}
          <line x1="40" y1="120" x2="80" y2="120" className="stroke-[#B8A070] dark:stroke-[#C9B896]" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* STEVENS — Strong Heritage Serif */}
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
