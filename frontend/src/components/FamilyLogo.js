// Stevens Family — Simple placeholder crest logo
// Clean serif "SF" centered in shield. Will be replaced later.

export const FamilyLogo = ({ size = 'hero', className = '' }) => {
  const sizes = {
    sm: { scale: 0.35 },
    md: { scale: 0.5 },
    lg: { scale: 0.75 },
    hero: { scale: 1 },
    icon: { scale: 0.3 }
  };

  const { scale } = sizes[size];

  if (size === 'icon') {
    return (
      <div className={`relative ${className}`} style={{ width: 100, height: 100 }} data-testid="family-logo">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0D0D0F" />
          <path d="M50 14L20 28v26c0 18 12 30 30 36 18-6 30-18 30-36V28L50 14z" fill="#1A1A1E" stroke="#C9B896" strokeWidth="2.5" />
          <text x="50" y="58" textAnchor="middle" fill="#C9B896" fontFamily="Georgia, serif" fontWeight="bold" fontSize="22" letterSpacing="1">SF</text>
        </svg>
      </div>
    );
  }

  if (size === 'sm' || size === 'md') {
    return (
      <div className={`flex items-center gap-3 ${className}`} data-testid="family-logo">
        <svg width="34" height="40" viewBox="0 0 34 40" fill="none">
          <path d="M17 2L2 9v14c0 10 6 16 15 19 9-3 15-9 15-19V9L17 2z" className="fill-[#F0EDE6] dark:fill-[#1A1A1E] stroke-[#C9B896]" strokeWidth="1.5" />
          <text x="17" y="24" textAnchor="middle" className="fill-[#8B7D5E] dark:fill-[#C9B896]" fontFamily="Georgia, serif" fontWeight="bold" fontSize="10" letterSpacing="0.5">SF</text>
        </svg>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-[0.12em] text-[#2D2D2D] dark:text-[#E8DCC4]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>STEVENS</span>
          <span className="text-[10px] tracking-[0.2em] text-[#8B7D5E] dark:text-[#C9B896] font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>FAMILY</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: 'center' }} data-testid="family-logo">
      <div className="mb-6">
        <svg width="120" height="145" viewBox="0 0 120 145" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 6L8 32v52c0 34 22 56 52 64 30-8 52-30 52-64V32L60 6z" className="fill-[#F0EDE6] dark:fill-[#1A1A1E]" />
          <path d="M60 6L8 32v52c0 34 22 56 52 64 30-8 52-30 52-64V32L60 6z" fill="none" className="stroke-[#B8A070] dark:stroke-[#C9B896]" strokeWidth="3" />
          <text x="60" y="80" textAnchor="middle" className="fill-[#8B7D5E] dark:fill-[#C9B896]" fontFamily="Georgia, serif" fontWeight="bold" fontSize="40" letterSpacing="2">SF</text>
          <line x1="40" y1="120" x2="80" y2="120" className="stroke-[#B8A070] dark:stroke-[#C9B896]" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.15em] text-[#1A1A1A] dark:text-[#F0EDE6]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>STEVENS</h1>
      <div className="mt-2 text-lg sm:text-xl tracking-[0.35em] font-bold text-[#8B7D5E] dark:text-[#C9B896]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>FAMILY</div>

      <div className="flex items-center gap-4 mt-6">
        <div className="w-16 h-px bg-[#C9B896] opacity-60" />
        <div className="w-2 h-2 rotate-45 bg-[#C9B896] opacity-80" />
        <div className="w-16 h-px bg-[#C9B896] opacity-60" />
      </div>

      <p className="mt-5 text-sm tracking-[0.12em] text-[#5A5A5A] dark:text-[#A0998C] uppercase font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>God First · Family Always</p>
    </div>
  );
};

export const HeaderLogo = ({ className = '' }) => {
  return <FamilyLogo size="sm" className={className} />;
};
