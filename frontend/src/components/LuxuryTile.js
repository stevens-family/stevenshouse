import { Link } from 'react-router-dom';

// Premium duotone gold dashboard icons — bold filled, warm gold tones, 56px
const iconStyle = "w-full h-full";

const IconDinner = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <circle cx="12" cy="13" r="8.5" fill="currentColor" fillOpacity="0.18" />
    <circle cx="12" cy="13" r="8.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <path d="M8.5 5v4.5c0 1.2.8 2.2 2 2.4V18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="6.5" y1="8" x2="10.5" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15.5 5c1.8 0 2.2 2 2.2 4s-.6 3-2.2 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M15.5 12v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const IconCalendar = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <rect x="2.5" y="4.5" width="19" height="17" rx="3.5" fill="currentColor" fillOpacity="0.18" />
    <rect x="2.5" y="4.5" width="19" height="17" rx="3.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <rect x="2.5" y="4.5" width="19" height="6" rx="3.5" fill="currentColor" fillOpacity="0.25" />
    <path d="M3 10.5h18" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.2" />
    <path d="M8 2.5v4M16 2.5v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <rect x="6.5" y="13" width="4" height="4" rx="1.2" fill="currentColor" />
    <rect x="13.5" y="13" width="4" height="4" rx="1.2" fill="currentColor" fillOpacity="0.35" />
  </svg>
);

const IconPhotos = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" fill="currentColor" fillOpacity="0.18" />
    <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <circle cx="8.5" cy="9.5" r="2.5" fill="currentColor" />
    <path d="M2.5 16.5l5-4.5 3.5 3L15.5 10l6 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUpload = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <path d="M6 17C2.8 17 1.2 14.2 1.8 11.5 2.3 9.2 4.2 7.5 6.5 7.5A8 8 0 0119.5 8c2.2.4 4 2.8 3.3 5.2-.6 2.2-2.8 3.8-5 3.8H6z" fill="currentColor" fillOpacity="0.18" />
    <path d="M6 17C2.8 17 1.2 14.2 1.8 11.5 2.3 9.2 4.2 7.5 6.5 7.5A8 8 0 0119.5 8c2.2.4 4 2.8 3.3 5.2-.6 2.2-2.8 3.8-5 3.8H6z" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <path d="M12 10v7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M8.5 13L12 10l3.5 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCloset = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <rect x="5.5" y="11.5" width="13" height="10" rx="2.5" fill="currentColor" fillOpacity="0.18" />
    <rect x="5.5" y="11.5" width="13" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <line x1="12" y1="11.5" x2="12" y2="21.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.2" />
    <path d="M8 10C8 6.5 9.8 4 12 4s4 2.5 4 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M5.5 10l6.5-3.5L18.5 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="3" r="1.5" fill="currentColor" />
  </svg>
);

const IconSearch = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <circle cx="10" cy="10" r="7" fill="currentColor" fillOpacity="0.18" />
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <circle cx="10" cy="10" r="3" fill="currentColor" fillOpacity="0.3" />
    <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

const IconRecipes = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <rect x="3.5" y="2.5" width="17" height="19" rx="3.5" fill="currentColor" fillOpacity="0.18" />
    <rect x="3.5" y="2.5" width="17" height="19" rx="3.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <rect x="3.5" y="2.5" width="17" height="5.5" rx="3.5" fill="currentColor" fillOpacity="0.2" />
    <path d="M7.5 11.5h9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M7.5 15h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M7.5 18.5h3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const IconActivities = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <circle cx="16.5" cy="5.5" r="4" fill="currentColor" fillOpacity="0.18" />
    <circle cx="16.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <circle cx="7" cy="5.5" r="3" fill="currentColor" fillOpacity="0.18" />
    <circle cx="7" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <path d="M7 8.5v6l4 5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 14l-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M11 19.5l3-2.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const IconFinance = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`}>
    <rect x="2.5" y="3.5" width="19" height="17" rx="3.5" fill="currentColor" fillOpacity="0.18" />
    <rect x="2.5" y="3.5" width="19" height="17" rx="3.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    <path d="M2.5 15l5.5-5 4 3.5 4-5.5 5.5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="19" cy="7" r="1.8" fill="currentColor" />
    <path d="M2.5 20.5h19" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.2" />
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
        group relative overflow-hidden rounded-2xl
        bg-white dark:bg-[#16161A]
        border border-[#E8E4DC] dark:border-[#2A2A30]
        p-5 md:p-6 flex flex-col justify-between cursor-pointer
        transition-all duration-500 ease-out
        hover:border-[#D4AF37]/30 dark:hover:border-[#D4AF37]/40
        hover:bg-[#FDFCFA] dark:hover:bg-[#1E1E24]
        hover:-translate-y-[3px]
        hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)]
        dark:hover:shadow-[0_8px_32px_rgba(212,175,55,0.08),0_2px_10px_rgba(0,0,0,0.35)]
        ${sizeClasses[size]}
      `}
      data-testid={testId}
    >
      {/* Gold glow on hover */}
      <div 
        className="absolute -top-16 -right-16 w-44 h-44 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 60%)'
        }}
      />
      
      {/* Duotone icon — 56px */}
      <div className="relative w-14 h-14 text-[#D4AF37] dark:text-[#D4AF37] transition-all duration-500 group-hover:text-[#C5981A] dark:group-hover:text-[#F1D27A] group-hover:scale-110 dark:group-hover:drop-shadow-[0_0_6px_rgba(212,175,55,0.3)]">
        {IconComponent && <IconComponent className="" />}
      </div>
      
      {/* Text */}
      <div className="mt-auto">
        <h3 
          className="font-semibold text-[15px] tracking-tight transition-colors duration-300 
            text-[#3D3D3D] dark:text-[#D8D8DC] 
            group-hover:text-[#1A1A1A] dark:group-hover:text-white"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          {label}
        </h3>
        {subtitle && (
          <p 
            className="text-xs mt-0.5 transition-colors duration-300
              text-[#9A9A9A] dark:text-[#706E6A] 
              group-hover:text-[#7A7A7A] dark:group-hover:text-[#C9B896]"
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
