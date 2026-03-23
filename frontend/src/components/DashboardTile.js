import { Link } from 'react-router-dom';

export const DashboardTile = ({ 
  to, 
  icon: Icon, 
  label, 
  description,
  bgImage,
  bgColor,
  size = 'small',
  external = false,
  testId
}) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1 aspect-square',
    medium: 'col-span-1 row-span-1 md:col-span-2 aspect-square md:aspect-video',
    large: 'col-span-2 row-span-1 aspect-video'
  };

  const content = (
    <div 
      className={`
        relative overflow-hidden rounded-3xl shadow-sm hover:shadow-lg 
        transition-all duration-300 hover:scale-[1.02] cursor-pointer
        ${sizeClasses[size]}
        ${bgColor || 'bg-surface-light dark:bg-surface-dark'}
      `}
      data-testid={testId}
    >
      {bgImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}
      
      <div className={`
        relative h-full flex flex-col items-center justify-center p-4 gap-2
        ${bgImage ? 'text-white' : 'text-text-primary dark:text-dark-primary'}
      `}>
        {Icon && <Icon size={size === 'small' ? 28 : 36} strokeWidth={1.5} />}
        <span className={`font-heading font-bold text-center ${size === 'small' ? 'text-sm' : 'text-base'}`}>
          {label}
        </span>
        {description && size !== 'small' && (
          <span className={`text-xs opacity-80 text-center ${bgImage ? 'text-white/90' : 'text-text-secondary dark:text-dark-secondary'}`}>
            {description}
          </span>
        )}
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link to={to}>{content}</Link>;
};
