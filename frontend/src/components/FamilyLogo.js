// Stevens Family Legacy Logo - Heritage Family Brand
// Bold Engraved Serif S Monogram

// Bold Engraved S - Classic Monogram Style
const EngravedS = ({ className = '', size = 56 }) => (
  <svg 
    viewBox="0 0 50 70" 
    width={size * 0.71} 
    height={size}
    className={className}
    fill="currentColor"
  >
    {/* Bold Engraved Serif S - Strong, Carved, Timeless */}
    <path d="
      M38 16
      C38 8, 31 2, 22 2
      C13 2, 6 8, 6 16
      C6 24, 12 28, 22 32
      L28 34
      C36 37, 42 42, 42 52
      C42 62, 34 68, 24 68
      C14 68, 6 62, 6 54
      L6 52
      L14 52
      L14 54
      C14 58, 18 62, 24 62
      C30 62, 34 58, 34 52
      C34 46, 30 43, 22 40
      L16 38
      C8 35, 6 28, 6 22
      L6 16
      C6 8, 14 2, 24 2
      C14 2, 6 8, 6 16
      L14 16
      C14 12, 18 8, 24 8
      C30 8, 34 12, 34 16
      C34 20, 32 22, 28 24
      L38 16
      Z
      
      M14 16
      C14 11, 18 8, 24 8
      C30 8, 34 12, 34 18
      C34 24, 28 28, 20 30
      L14 16
    "/>
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
          {/* Bold Engraved S */}
          <text x="50" y="64" fontFamily="Georgia, 'Times New Roman', serif" fontSize="42" fontWeight="900"
            fill="#C9B896" textAnchor="middle">S</text>
        </svg>
      </div>
    );
  }

  // Small header variant
  if (size === 'sm' || size === 'md') {
    return (
      <div className={`flex items-center gap-3 ${className}`} data-testid="family-logo">
        {/* Mini shield with bold S */}
        <svg width="36" height="42" viewBox="0 0 36 42" fill="none">
          <path d="M18 2L2 10v14c0 10 6 17 16 20 10-3 16-10 16-20V10L18 2z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E] stroke-[#C9B896]" strokeWidth="1.5" />
          {/* Bold S */}
          <text x="18" y="28" fontFamily="Georgia, 'Times New Roman', serif" fontSize="20" fontWeight="900"
            className="fill-[#8B7D5E] dark:fill-[#C9B896]" textAnchor="middle">S</text>
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
      {/* Heritage Shield Crest with Bold Engraved S */}
      <div className="mb-6">
        <svg width="110" height="130" viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path 
            d="M55 6L8 28v44c0 30 20 50 47 58 27-8 47-28 47-58V28L55 6z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E]"
          />
          {/* Shield border - gold */}
          <path 
            d="M55 6L8 28v44c0 30 20 50 47 58 27-8 47-28 47-58V28L55 6z" 
            fill="none"
            className="stroke-[#B8A070] dark:stroke-[#C9B896]" 
            strokeWidth="3"
          />
          {/* Inner decorative border */}
          <path 
            d="M55 16L18 34v36c0 24 16 40 37 46 21-6 37-22 37-46V34L55 16z" 
            fill="none"
            className="stroke-[#C9B896] dark:stroke-[#C9B896]" 
            strokeWidth="1"
            opacity="0.4"
          />
          
          {/* Bold Engraved Serif S - Strong, Carved, Classic */}
          <text 
            x="55" y="85" 
            fontFamily="Georgia, 'Times New Roman', serif" 
            fontSize="62" 
            fontWeight="900"
            className="fill-[#8B7D5E] dark:fill-[#C9B896]" 
            textAnchor="middle"
            style={{ letterSpacing: '-0.02em' }}
          >
            S
          </text>
          
          {/* Simple underline accent */}
          <line 
            x1="35" y1="98" x2="75" y2="98" 
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
