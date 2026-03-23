// Luxury SF Monogram - clean minimal design
export const SFMonogram = ({ size = 'md', variant = 'default', className = '' }) => {
  const sizes = {
    sm: { width: 28, height: 28 },
    md: { width: 44, height: 44 },
    lg: { width: 72, height: 72 },
    xl: { width: 96, height: 96 }
  };

  const { width, height } = sizes[size];

  // Stacked variant for footer
  if (variant === 'stacked') {
    return (
      <div 
        className={`relative flex flex-col items-center justify-center leading-none ${className}`}
        style={{ width: width * 0.6, height }}
        data-testid="sf-monogram"
      >
        <span 
          style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: width * 0.35,
            fontWeight: 700,
            lineHeight: 0.9,
            color: '#6B7280',
            letterSpacing: '0.1em'
          }}
        >
          S
        </span>
        <span 
          style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: width * 0.35,
            fontWeight: 700,
            lineHeight: 0.9,
            color: '#C6A85A',
            letterSpacing: '0.1em'
          }}
        >
          F
        </span>
      </div>
    );
  }

  // Default - elegant minimal with subtle gold accent
  return (
    <div 
      className={`relative ${className}`}
      style={{ width, height }}
      data-testid="sf-monogram"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle outer ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill="none" 
          stroke="url(#ringGradient)" 
          strokeWidth="1"
          opacity="0.6"
        />
        
        {/* Inner background */}
        <circle cx="50" cy="50" r="44" fill="#111318" />
        
        {/* S Letter - white */}
        <text 
          x="28" 
          y="64" 
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="38"
          fontWeight="700"
          fill="#E5E5E5"
          letterSpacing="-0.02em"
        >
          S
        </text>
        
        {/* F Letter - gold */}
        <text 
          x="52" 
          y="64" 
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="38"
          fontWeight="700"
          fill="#C6A85A"
          letterSpacing="-0.02em"
        >
          F
        </text>
        
        {/* Subtle gold accent dot */}
        <circle cx="78" cy="26" r="3" fill="#C6A85A" opacity="0.8" />
        
        <defs>
          <linearGradient id="ringGradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#C6A85A" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#C6A85A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C6A85A" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
