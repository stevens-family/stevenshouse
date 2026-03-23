import { Link } from 'react-router-dom';

export const LuxuryTile = ({ 
  to, 
  icon: Icon, 
  label, 
  subtitle,
  size = 'normal',
  external = false,
  testId
}) => {
  const sizeClasses = {
    normal: 'aspect-square',
    wide: 'col-span-2 aspect-video',
    tall: 'row-span-2 aspect-[1/2]'
  };

  const content = (
    <div 
      className={`
        luxury-card p-6 flex flex-col justify-between cursor-pointer
        ${sizeClasses[size]}
      `}
      data-testid={testId}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-auto">
        {Icon && <Icon size={20} strokeWidth={1.5} className="text-secondary" />}
      </div>
      
      {/* Text */}
      <div className="mt-4">
        <h3 className="font-heading font-bold text-primary text-base md:text-lg mb-1">
          {label}
        </h3>
        {subtitle && (
          <p className="text-secondary text-xs md:text-sm">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return <Link to={to} className="block">{content}</Link>;
};
