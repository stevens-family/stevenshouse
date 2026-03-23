// Stevens Family Legacy Logo - Heritage Family Brand
// Custom Monogram Mark - Not a font letter

// Custom Designed S Monogram - Brand Emblem Style
const MonogramS = ({ size = 60, className = '' }) => (
  <svg 
    viewBox="0 0 60 80" 
    width={size * 0.75} 
    height={size}
    className={className}
    fill="currentColor"
  >
    {/* Custom designed S mark - geometric, balanced, logo-style */}
    {/* Top curve section */}
    <path d="
      M46 12
      C46 5, 38 0, 28 0
      L12 0
      L12 10
      L28 10
      C34 10, 38 14, 38 20
      C38 26, 34 30, 28 30
      L12 30
      L12 40
      L32 40
      C44 40, 52 32, 52 20
      C52 14, 50 12, 46 12
    " />
    
    {/* Bottom curve section */}
    <path d="
      M14 68
      C14 75, 22 80, 32 80
      L48 80
      L48 70
      L32 70
      C26 70, 22 66, 22 60
      C22 54, 26 50, 32 50
      L48 50
      L48 40
      L28 40
      C16 40, 8 48, 8 60
      C8 66, 10 68, 14 68
    " />
  </svg>
);

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
          {/* Shield */}
          <path d="M50 12L18 28v28c0 18 12 30 32 38 20-8 32-20 32-38V28L50 12z" 
            fill="#1A1A1E" stroke="#C9B896" strokeWidth="2.5" />
          {/* Custom S Mark */}
          <g transform="translate(28, 30)" fill="#C9B896">
            <path d="M36 8 C36 3, 30 0, 22 0 L8 0 L8 7 L22 7 C27 7, 30 10, 30 14 C30 18, 27 21, 22 21 L8 21 L8 28 L25 28 C34 28, 40 22, 40 14 C40 10, 38 8, 36 8" />
            <path d="M10 48 C10 53, 16 56, 24 56 L38 56 L38 49 L24 49 C19 49, 16 46, 16 42 C16 38, 19 35, 24 35 L38 35 L38 28 L21 28 C12 28, 6 34, 6 42 C6 46, 8 48, 10 48" />
          </g>
        </svg>
      </div>
    );
  }

  // Small header variant
  if (size === 'sm' || size === 'md') {
    return (
      <div className={`flex items-center gap-3 ${className}`} data-testid="family-logo">
        {/* Mini shield with custom S mark */}
        <svg width="36" height="42" viewBox="0 0 36 42" fill="none">
          <path d="M18 2L2 10v14c0 10 6 17 16 20 10-3 16-10 16-20V10L18 2z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E] stroke-[#C9B896]" strokeWidth="1.5" />
          {/* Mini S mark */}
          <g transform="translate(10, 12)" className="fill-[#8B7D5E] dark:fill-[#C9B896]">
            <path d="M12 3 C12 1, 10 0, 7 0 L2 0 L2 2.5 L7 2.5 C9 2.5, 10 3.5, 10 5 C10 6.5, 9 7.5, 7 7.5 L2 7.5 L2 10 L8 10 C11 10, 14 8, 14 5 C14 4, 13 3, 12 3" />
            <path d="M4 17 C4 19, 6 20, 9 20 L14 20 L14 17.5 L9 17.5 C7 17.5, 6 16.5, 6 15 C6 13.5, 7 12.5, 9 12.5 L14 12.5 L14 10 L8 10 C5 10, 2 12, 2 15 C2 16, 3 17, 4 17" />
          </g>
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

  // Full hero logo with unified shield and S emblem
  return (
    <div 
      className={`flex flex-col items-center ${className}`} 
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
      data-testid="family-logo"
    >
      {/* Unified Shield Crest with Custom S Emblem */}
      <div className="mb-6">
        <svg width="120" height="145" viewBox="0 0 120 145" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path 
            d="M60 6L8 32v52c0 34 22 56 52 64 30-8 52-30 52-64V32L60 6z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E]"
          />
          {/* Shield border - gold */}
          <path 
            d="M60 6L8 32v52c0 34 22 56 52 64 30-8 52-30 52-64V32L60 6z" 
            fill="none"
            className="stroke-[#B8A070] dark:stroke-[#C9B896]" 
            strokeWidth="3.5"
          />
          {/* Inner decorative border */}
          <path 
            d="M60 18L20 40v42c0 26 16 44 40 50 24-6 40-24 40-50V40L60 18z" 
            fill="none"
            className="stroke-[#C9B896] dark:stroke-[#C9B896]" 
            strokeWidth="1"
            opacity="0.35"
          />
          
          {/* Custom S Monogram Mark - Geometric Brand Emblem */}
          <g transform="translate(30, 42)" className="fill-[#8B7D5E] dark:fill-[#C9B896]">
            {/* Top part of S */}
            <path d="
              M48 14
              C48 6, 40 0, 28 0
              L10 0
              L10 12
              L28 12
              C36 12, 40 16, 40 22
              C40 28, 36 32, 28 32
              L10 32
              L10 44
              L32 44
              C46 44, 56 34, 56 22
              C56 16, 52 14, 48 14
            " />
            {/* Bottom part of S */}
            <path d="
              M12 58
              C12 66, 20 72, 32 72
              L50 72
              L50 60
              L32 60
              C24 60, 20 56, 20 50
              C20 44, 24 40, 32 40
              L50 40
              L50 28
              L28 28
              C14 28, 4 38, 4 50
              C4 56, 8 58, 12 58
            " />
          </g>
          
          {/* Bottom accent line */}
          <line 
            x1="40" y1="125" x2="80" y2="125" 
            className="stroke-[#B8A070] dark:stroke-[#C9B896]" 
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* STEVENS - Strong Heritage Serif */}
      <h1 
        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.15em] text-[#1A1A1A] dark:text-[#F0EDE6]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
