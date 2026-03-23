// Stevens Family House Emblem - Elegant Family Brand Mark
export const SFMonogram = ({ size = 'md', variant = 'default', className = '' }) => {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 72, height: 72 },
    xl: { width: 96, height: 96 }
  };

  const { width, height } = sizes[size];

  // Footer variant - simplified
  if (variant === 'stacked') {
    return (
      <div 
        className={`relative ${className}`}
        style={{ width: width * 0.7, height: height * 0.7 }}
        data-testid="sf-monogram"
      >
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Simple house roof */}
          <path 
            d="M25 8L6 22h38L25 8z" 
            fill="none" 
            stroke="#C6A85A" 
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* House body */}
          <path 
            d="M10 22v18h30V22" 
            fill="none" 
            stroke="#9CA3AF" 
            strokeWidth="1.5"
          />
          {/* S initial */}
          <text 
            x="25" 
            y="36" 
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="16"
            fontWeight="600"
            fill="#C6A85A"
            textAnchor="middle"
          >
            S
          </text>
        </svg>
      </div>
    );
  }

  // Default - Elegant House Crest with S
  return (
    <div 
      className={`relative ${className}`}
      style={{ width, height }}
      data-testid="sf-monogram"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer decorative frame */}
        <path 
          d="M50 6L12 32v4L50 10l38 26v-4L50 6z" 
          fill="#C6A85A"
          opacity="0.9"
        />
        
        {/* House shape - main body */}
        <path 
          d="M50 14L16 38v50h68V38L50 14z" 
          fill="#151518"
          stroke="#2A2A2E"
          strokeWidth="1"
        />
        
        {/* Inner frame accent */}
        <path 
          d="M50 22L24 42v40h52V42L50 22z" 
          fill="none"
          stroke="#C6A85A"
          strokeWidth="0.75"
          opacity="0.4"
        />
        
        {/* Elegant S letterform */}
        <text 
          x="50" 
          y="72" 
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="42"
          fontWeight="600"
          fill="#E8DCC4"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          S
        </text>
        
        {/* Small decorative line under S */}
        <line 
          x1="38" y1="78" x2="62" y2="78" 
          stroke="#C6A85A" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Corner accents */}
        <circle cx="24" cy="88" r="2" fill="#C6A85A" opacity="0.5" />
        <circle cx="76" cy="88" r="2" fill="#C6A85A" opacity="0.5" />
      </svg>
    </div>
  );
};
