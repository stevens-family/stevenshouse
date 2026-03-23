// Stevens Family Legacy Logo - Heritage Family Brand
// Custom Ornamental S Monogram

// Custom SVG Ornamental S - Family Crest Style
const OrnamentalS = ({ className = '', size = 56 }) => (
  <svg 
    viewBox="0 0 60 80" 
    width={size} 
    height={size * 1.33}
    className={className}
    fill="none"
  >
    {/* Main S body with ornamental serifs */}
    <path
      d="
        M42 18
        C42 12, 36 6, 26 6
        C16 6, 10 12, 10 20
        C10 28, 16 32, 26 36
        C36 40, 44 44, 44 54
        C44 64, 36 72, 26 72
        C16 72, 10 66, 10 60
      "
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Top flourish - decorative serif */}
    <path
      d="M42 18 C46 16, 50 14, 52 10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="52" cy="8" r="2" fill="currentColor" />
    
    {/* Top left decorative element */}
    <path
      d="M18 8 C14 6, 10 6, 6 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Bottom flourish - decorative serif */}
    <path
      d="M10 60 C6 62, 4 66, 4 70"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="4" cy="72" r="2" fill="currentColor" />
    
    {/* Bottom right decorative element */}
    <path
      d="M34 70 C38 72, 44 74, 50 72"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Center crossbar accent */}
    <path
      d="M22 39 L38 39"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.4"
    />
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
          {/* Simplified ornamental S for icon */}
          <g transform="translate(32, 28) scale(0.6)" fill="none" stroke="#C9B896" strokeWidth="4">
            <path d="M42 18 C42 12, 36 6, 26 6 C16 6, 10 12, 10 20 C10 28, 16 32, 26 36 C36 40, 44 44, 44 54 C44 64, 36 72, 26 72 C16 72, 10 66, 10 60" strokeLinecap="round" />
            <path d="M42 18 C46 16, 48 14, 50 12" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 60 C6 62, 4 66, 4 68" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // Small header variant
  if (size === 'sm' || size === 'md') {
    return (
      <div className={`flex items-center gap-3 ${className}`} data-testid="family-logo">
        {/* Mini shield with ornamental S */}
        <svg width="36" height="42" viewBox="0 0 36 42" fill="none">
          <path d="M18 2L2 10v14c0 10 6 17 16 20 10-3 16-10 16-20V10L18 2z" 
            className="fill-[#F0EDE6] dark:fill-[#1A1A1E] stroke-[#C9B896]" strokeWidth="1.5" />
          {/* Mini ornamental S */}
          <g transform="translate(10, 10) scale(0.28)" className="stroke-[#8B7D5E] dark:stroke-[#C9B896]" fill="none" strokeWidth="5">
            <path d="M42 18 C42 12, 36 6, 26 6 C16 6, 10 12, 10 20 C10 28, 16 32, 26 36 C36 40, 44 44, 44 54 C44 64, 36 72, 26 72 C16 72, 10 66, 10 60" strokeLinecap="round" />
            <path d="M42 18 C46 16, 50 14, 52 10" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="52" cy="8" r="2" className="fill-[#8B7D5E] dark:fill-[#C9B896]" />
            <path d="M10 60 C6 62, 4 66, 4 70" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="4" cy="72" r="2" className="fill-[#8B7D5E] dark:fill-[#C9B896]" />
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

  // Full hero logo
  return (
    <div 
      className={`flex flex-col items-center ${className}`} 
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
      data-testid="family-logo"
    >
      {/* Heritage Shield Crest with Custom Ornamental S */}
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
          
          {/* Custom Ornamental S Monogram */}
          <g transform="translate(30, 32)" className="text-[#8B7D5E] dark:text-[#C9B896]">
            <OrnamentalS size={50} className="text-[#8B7D5E] dark:text-[#C9B896]" />
          </g>
          
          {/* Bottom decorative accent */}
          <path 
            d="M35 105 Q55 115, 75 105" 
            fill="none"
            className="stroke-[#B8A070] dark:stroke-[#C9B896]" 
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Small accent dots */}
          <circle cx="30" cy="105" r="2.5" className="fill-[#B8A070] dark:fill-[#C9B896]" opacity="0.8" />
          <circle cx="80" cy="105" r="2.5" className="fill-[#B8A070] dark:fill-[#C9B896]" opacity="0.8" />
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
