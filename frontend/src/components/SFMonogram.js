export const SFMonogram = ({ size = 'md', withBorder = true, className = '' }) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const paddingSizes = {
    sm: 'px-1.5 py-0.5',
    md: 'px-2 py-1',
    lg: 'px-3 py-1.5',
    xl: 'px-4 py-2'
  };

  if (withBorder) {
    return (
      <div 
        className={`sf-monogram-box ${paddingSizes[size]} ${className}`}
        data-testid="sf-monogram"
      >
        <span 
          className={`${sizes[size]}`}
          style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif", 
            fontWeight: 700, 
            letterSpacing: '0.05em',
            color: 'var(--text-primary)'
          }}
        >
          SF
        </span>
      </div>
    );
  }

  return (
    <span 
      className={`${sizes[size]} ${className}`}
      data-testid="sf-monogram"
      style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        fontWeight: 700, 
        letterSpacing: '0.05em',
        color: 'var(--text-primary)'
      }}
    >
      SF
    </span>
  );
};
