// Stylish SF Monogram - Modern Luxury Design
export const SFMonogram = ({ size = 'md', variant = 'default', className = '' }) => {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 80, height: 80 },
    xl: { width: 100, height: 100 }
  };

  const { width, height } = sizes[size];

  // Stacked variant for footer - artistic stacked letters
  if (variant === 'stacked') {
    return (
      <div 
        className={`relative ${className}`}
        style={{ width: width * 0.5, height: height * 0.7 }}
        data-testid="sf-monogram"
      >
        <svg viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* S - top */}
          <text 
            x="8" 
            y="28" 
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="32"
            fontWeight="800"
            fill="#9CA3AF"
            letterSpacing="-0.03em"
          >
            S
          </text>
          {/* F - bottom, offset and gold */}
          <text 
            x="16" 
            y="52" 
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="28"
            fontWeight="700"
            fill="#C6A85A"
            letterSpacing="-0.03em"
          >
            F
          </text>
        </svg>
      </div>
    );
  }

  // Default - Overlapping artistic monogram
  return (
    <div 
      className={`relative ${className}`}
      style={{ width, height }}
      data-testid="sf-monogram"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer decorative ring - broken/artistic */}
        <path 
          d="M50 4 A46 46 0 0 1 96 50" 
          stroke="url(#arcGradient)" 
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M50 96 A46 46 0 0 1 4 50" 
          stroke="url(#arcGradient2)" 
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Inner circle - subtle */}
        <circle cx="50" cy="50" r="38" fill="#111318" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        
        {/* S - Large, overlapping behind F */}
        <text 
          x="18" 
          y="68" 
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="56"
          fontWeight="800"
          fill="#E5E5E5"
          letterSpacing="-0.04em"
          opacity="0.9"
        >
          S
        </text>
        
        {/* F - Overlapping in front, gold accent */}
        <text 
          x="42" 
          y="62" 
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="44"
          fontWeight="700"
          fill="#C6A85A"
          letterSpacing="-0.02em"
        >
          F
        </text>
        
        {/* Decorative accent dot */}
        <circle cx="76" cy="24" r="4" fill="#C6A85A" />
        
        {/* Small accent line */}
        <line x1="22" y1="76" x2="42" y2="76" stroke="#C6A85A" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        
        <defs>
          <linearGradient id="arcGradient" x1="50" y1="4" x2="96" y2="50">
            <stop offset="0%" stopColor="#C6A85A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C6A85A" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="arcGradient2" x1="50" y1="96" x2="4" y2="50">
            <stop offset="0%" stopColor="#C6A85A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C6A85A" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
