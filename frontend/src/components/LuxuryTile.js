import { Link } from 'react-router-dom';

// Custom stylish icons with personality
const IconDinner = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth="1.25" stroke="currentColor">
    <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    <circle cx="8" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="10" cy="18" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconCalendar = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth="1.25" stroke="currentColor">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
    <path d="M8 3v4M16 3v4" strokeLinecap="round" />
    <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
    <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconPhotos = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth="1.25" stroke="currentColor">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <circle cx="8" cy="10" r="2" />
    <path d="M22 16l-5-5-3 3-4-4-8 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUpload = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth="1.25" stroke="currentColor">
    <path d="M12 4v12M12 4l4 4M12 4l-4 4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" />
  </svg>
);

const IconCloset = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth="1.25" stroke="currentColor">
    <path d="M12 3l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
    <path d="M12 8v4M10 10h4" strokeLinecap="round" />
  </svg>
);

const IconSearch = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth="1.25" stroke="currentColor">
    <circle cx="10" cy="10" r="6" />
    <path d="M14.5 14.5L20 20" strokeLinecap="round" />
    <circle cx="10" cy="10" r="2" strokeDasharray="2 2" />
  </svg>
);

const IconRecipes = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth="1.25" stroke="currentColor">
    <path d="M12 3c-1.5 0-3 1-3 3 0 1.5.5 2.5 1 3.5.5 1 1 2 1 3.5h2c0-1.5.5-2.5 1-3.5s1-2 1-3.5c0-2-1.5-3-3-3z" />
    <ellipse cx="12" cy="17" rx="4" ry="2" />
    <path d="M8 17v3a1 1 0 001 1h6a1 1 0 001-1v-3" />
    <path d="M12 6v2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const IconActivities = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth="1.25" stroke="currentColor">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <path d="M8 21l2-7M16 21l-2-7" strokeLinecap="round" />
    <path d="M7 11h10" strokeLinecap="round" />
    <path d="M5 14l3-3M19 14l-3-3" strokeLinecap="round" />
  </svg>
);

const IconFinance = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth="1.25" stroke="currentColor">
    <rect x="2" y="6" width="20" height="14" rx="2" />
    <circle cx="12" cy="13" r="3" />
    <path d="M6 10v6M18 10v6" strokeLinecap="round" opacity="0.5" />
    <path d="M2 10h20" />
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
        bg-[#131316] rounded-2xl
        border border-[rgba(255,255,255,0.04)]
        p-5 md:p-6 flex flex-col justify-between cursor-pointer
        transition-all duration-500 ease-out
        hover:border-[rgba(198,168,90,0.5)] 
        hover:bg-[#17171b]
        hover:-translate-y-1
        hover:shadow-[0_8px_30px_rgba(198,168,90,0.08)]
        ${sizeClasses[size]}
      `}
      data-testid={testId}
    >
      {/* Ambient glow on hover */}
      <div 
        className="absolute -top-16 -right-16 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(198, 168, 90, 0.12) 0%, transparent 60%)'
        }}
      />
      
      {/* Custom icon */}
      <div className="relative w-7 h-7 md:w-8 md:h-8">
        {IconComponent && (
          <IconComponent 
            className="w-full h-full text-[#5A5A65] transition-all duration-500 group-hover:text-[#C6A85A] group-hover:scale-110"
          />
        )}
      </div>
      
      {/* Text */}
      <div className="mt-auto">
        <h3 
          className="font-semibold text-[#D4D4D8] text-[15px] md:text-base tracking-tight transition-colors duration-300 group-hover:text-[#FAFAFA]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {label}
        </h3>
        {subtitle && (
          <p className="text-[#52525B] text-xs mt-0.5 transition-colors duration-300 group-hover:text-[#71717A]">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Corner accent on hover */}
      <div 
        className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(198, 168, 90, 0.1) 50%)'
        }}
      />
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
