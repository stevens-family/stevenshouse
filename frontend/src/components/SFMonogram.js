// Luxury SF Monogram with interlocking design
export const SFMonogram = ({ size = 'md', variant = 'default', className = '' }) => {
  const sizes = {
    sm: { width: 32, height: 32, fontSize: 12 },
    md: { width: 44, height: 44, fontSize: 16 },
    lg: { width: 64, height: 64, fontSize: 24 },
    xl: { width: 80, height: 80, fontSize: 32 }
  };

  const { width, height, fontSize } = sizes[size];

  // Interlocking monogram variant
  if (variant === 'interlocking') {
    return (
      <div 
        className={`relative ${className}`}
        style={{ width, height }}
        data-testid="sf-monogram"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle with gradient */}
          <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" />
          <circle cx="50" cy="50" r="46" fill="#0B0C0F" />
          
          {/* S letter */}
          <path 
            d="M35 35C35 32 38 28 46 28C54 28 58 32 58 37C58 42 54 45 46 47C38 49 32 52 32 60C32 68 38 72 48 72"
            stroke="#C6A85A"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* F letter - overlapping */}
          <path 
            d="M52 28H70M52 28V72M52 48H66"
            stroke="#F5F5F5"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Gold accent dot */}
          <circle cx="70" cy="28" r="3" fill="#C6A85A" />
          
          <defs>
            <linearGradient id="bgGradient" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#C6A85A" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C6A85A" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Stacked elegant variant
  if (variant === 'stacked') {
    return (
      <div 
        className={`relative flex flex-col items-center justify-center ${className}`}
        style={{ width, height }}
        data-testid="sf-monogram"
      >
        <span 
          style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: fontSize * 0.9,
            fontWeight: 800,
            lineHeight: 0.85,
            color: '#F5F5F5',
            letterSpacing: '0.15em'
          }}
        >
          S
        </span>
        <span 
          style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: fontSize * 0.9,
            fontWeight: 800,
            lineHeight: 0.85,
            color: '#C6A85A',
            letterSpacing: '0.15em'
          }}
        >
          F
        </span>
      </div>
    );
  }

  // Default - elegant bordered with accent
  return (
    <div 
      className={`relative ${className}`}
      style={{ width, height }}
      data-testid="sf-monogram"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer border with gold gradient */}
        <rect x="2" y="2" width="96" height="96" rx="16" fill="none" stroke="url(#borderGradient)" strokeWidth="2" />
        
        {/* Inner glow */}
        <rect x="8" y="8" width="84" height="84" rx="12" fill="#111318" />
        
        {/* S - with style */}
        <text 
          x="28" 
          y="68" 
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="48"
          fontWeight="800"
          fill="#F5F5F5"
        >
          S
        </text>
        
        {/* F - gold accent */}
        <text 
          x="52" 
          y="68" 
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="48"
          fontWeight="800"
          fill="#C6A85A"
        >
          F
        </text>
        
        {/* Decorative accent line */}
        <line x1="20" y1="78" x2="45" y2="78" stroke="#C6A85A" strokeWidth="2" strokeLinecap="round" />
        
        <defs>
          <linearGradient id="borderGradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#C6A85A" />
            <stop offset="50%" stopColor="#E0C878" />
            <stop offset="100%" stopColor="#C6A85A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
