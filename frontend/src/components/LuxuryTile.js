import { Link } from 'react-router-dom';

// Cohesive warm family icons - consistent stroke, soft rounded style
const iconStyle = "w-full h-full";
const strokeColor = "currentColor";
const strokeWidth = "1.5";

const IconDinner = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    {/* Plate */}
    <circle cx="12" cy="13" r="8" stroke={strokeColor} strokeWidth={strokeWidth} />
    <circle cx="12" cy="13" r="5" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
    {/* Fork */}
    <path d="M5 3v4c0 1 .5 2 1.5 2S8 8 8 7V3M6.5 9v4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

const IconCalendar = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <rect x="3" y="5" width="18" height="16" rx="3" stroke={strokeColor} strokeWidth={strokeWidth} />
    <path d="M3 10h18" stroke={strokeColor} strokeWidth={strokeWidth} />
    <path d="M8 3v4M16 3v4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    <rect x="7" y="13" width="3" height="3" rx="0.5" fill={strokeColor} opacity="0.3" />
  </svg>
);

const IconPhotos = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    {/* Back photo */}
    <rect x="6" y="3" width="14" height="12" rx="2" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
    {/* Front photo */}
    <rect x="4" y="6" width="14" height="12" rx="2" stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
    <circle cx="8" cy="10" r="1.5" stroke={strokeColor} strokeWidth="1" />
    <path d="M4 15l3-3 2 2 4-4 5 5" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUpload = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    {/* Cloud */}
    <path d="M6 16a4 4 0 01-.5-7.97 6 6 0 0111.77-1.45A4.5 4.5 0 0118 16H6z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
    {/* Arrow */}
    <path d="M12 12v6M12 12l-2.5 2.5M12 12l2.5 2.5" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCloset = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    {/* Hanger */}
    <path d="M12 6a2 2 0 100-4 2 2 0 000 4z" stroke={strokeColor} strokeWidth={strokeWidth} />
    <path d="M12 6v2" stroke={strokeColor} strokeWidth={strokeWidth} />
    <path d="M12 8l-7 6h14l-7-6z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
    {/* Shirt suggestion */}
    <path d="M8 14v6h8v-6" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
  </svg>
);

const IconSearch = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    {/* Box */}
    <rect x="3" y="5" width="18" height="14" rx="2" stroke={strokeColor} strokeWidth={strokeWidth} />
    {/* Search glass */}
    <circle cx="11" cy="12" r="3" stroke={strokeColor} strokeWidth={strokeWidth} />
    <path d="M13.5 14.5L16 17" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

const IconRecipes = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    {/* Recipe card */}
    <rect x="4" y="3" width="16" height="18" rx="2" stroke={strokeColor} strokeWidth={strokeWidth} />
    {/* Lines */}
    <path d="M8 8h8M8 12h6M8 16h4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    {/* Corner fold */}
    <path d="M16 3v4h4" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
  </svg>
);

const IconActivities = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    {/* Ball */}
    <circle cx="17" cy="7" r="3" stroke={strokeColor} strokeWidth={strokeWidth} />
    {/* Person running */}
    <circle cx="7" cy="6" r="2" stroke={strokeColor} strokeWidth={strokeWidth} />
    <path d="M7 8v4l3 4M7 12l-3 3" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 18l2-2" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

const IconFinance = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    {/* Chart area */}
    <path d="M3 20V8l5 4 4-6 5 3 4-2v13H3z" stroke={strokeColor} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round" />
    {/* Chart line */}
    <path d="M3 12l5 4 4-6 5 3 4-2" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    {/* Base */}
    <path d="M3 20h18" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

const iconMap = {
  dinner: IconDinner,
  calendar: IconCalendar,
  photos: IconPhotos,
  upload: IconUpload,
  closet: IconCloset,
  search: IconSearch,
  recipes: IconRecipes,
  activities: IconActivities,
  finance: IconFinance,
};

export const LuxuryTile = ({ 
  to, 
  iconType,
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

  const IconComponent = iconMap[iconType];

  const content = (
    <div 
      className={`
        group relative overflow-hidden
        bg-[#16161A] rounded-2xl
        border border-[#232328]
        p-5 md:p-6 flex flex-col justify-between cursor-pointer
        transition-all duration-500 ease-out
        hover:border-[#3D3830] 
        hover:bg-[#1A1A1F]
        hover:-translate-y-0.5
        hover:shadow-[0_4px_24px_rgba(198,168,90,0.06)]
        ${sizeClasses[size]}
      `}
      data-testid={testId}
    >
      {/* Subtle warm glow on hover */}
      <div 
        className="absolute -top-20 -right-20 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232, 220, 196, 0.04) 0%, transparent 60%)'
        }}
      />
      
      {/* Icon */}
      <div className="relative w-7 h-7 md:w-8 md:h-8">
        {IconComponent && (
          <IconComponent 
            className="text-[#6B6B70] transition-all duration-500 group-hover:text-[#C9B896] group-hover:scale-105"
          />
        )}
      </div>
      
      {/* Text */}
      <div className="mt-auto">
        <h3 
          className="font-medium text-[#D8D8DC] text-[15px] tracking-tight transition-colors duration-300 group-hover:text-[#F0EDE6]"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          {label}
        </h3>
        {subtitle && (
          <p 
            className="text-[#58585C] text-xs mt-0.5 transition-colors duration-300 group-hover:text-[#78787C]"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
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
