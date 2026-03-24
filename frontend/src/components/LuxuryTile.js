import { Link } from 'react-router-dom';

// Premium gold dashboard icons — thick strokes, semi-filled, high contrast
const iconStyle = "w-full h-full";
const sw = "2"; // thick base stroke

const IconDinner = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`} stroke="currentColor" strokeWidth={sw}>
    <circle cx="12" cy="13" r="7.5" fill="currentColor" fillOpacity="0.12" />
    <path d="M9 7V4.5" strokeLinecap="round" />
    <path d="M9 7v6.5c0 .8.6 1.5 1.4 1.5" strokeLinecap="round" />
    <line x1="7" y1="10" x2="11" y2="10" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 7l.8 5.5c.1.9-.5 1.5-1.3 1.5" strokeLinecap="round" />
    <path d="M15 7c1.2 0 1.5 1.5 1.5 3s-.5 2-1.5 2" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10.5" y1="15" x2="10.5" y2="19" strokeLinecap="round" />
  </svg>
);

const IconCalendar = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`} stroke="currentColor" strokeWidth={sw}>
    <rect x="3" y="5" width="18" height="16" rx="3" fill="currentColor" fillOpacity="0.12" />
    <path d="M3 10h18" />
    <path d="M8 2.5v4M16 2.5v4" strokeLinecap="round" />
    <rect x="7" y="13" width="3.5" height="3.5" rx="0.75" fill="currentColor" stroke="none" />
    <rect x="13" y="13" width="3.5" height="3.5" rx="0.75" fill="currentColor" fillOpacity="0.35" stroke="none" />
  </svg>
);

const IconPhotos = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`} stroke="currentColor" strokeWidth={sw}>
    <rect x="3" y="5" width="18" height="14" rx="3" fill="currentColor" fillOpacity="0.12" />
    <circle cx="9.5" cy="10.5" r="2" fill="currentColor" stroke="none" />
    <path d="M3 17l4.5-4 3 2.5L15 11l6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUpload = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`} stroke="currentColor" strokeWidth={sw}>
    <path d="M6.5 16C3.5 16 2 13.5 2.5 11c.4-2 2-3.5 4-3.5A7 7 0 0119 8.5c2 .5 3.5 2.5 3 4.5-.5 2-2.5 3-4.5 3H6.5z" fill="currentColor" fillOpacity="0.12" strokeLinejoin="round" />
    <path d="M12 11v6" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M9 13.5L12 11l3 2.5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCloset = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`} stroke="currentColor" strokeWidth={sw}>
    <path d="M8.5 10C8.5 7 10 5 12 5s3.5 2 3.5 5" strokeLinecap="round" />
    <path d="M6 10l6-3 6 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7v-3" strokeLinecap="round" />
    <circle cx="12" cy="3.5" r="1" fill="currentColor" stroke="none" />
    <rect x="7" y="13" width="10" height="8" rx="2" fill="currentColor" fillOpacity="0.12" />
    <line x1="12" y1="13" x2="12" y2="21" strokeWidth="1.5" opacity="0.35" />
  </svg>
);

const IconSearch = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`} stroke="currentColor" strokeWidth={sw}>
    <circle cx="10.5" cy="10.5" r="5.5" fill="currentColor" fillOpacity="0.12" />
    <circle cx="10.5" cy="10.5" r="2" fill="currentColor" fillOpacity="0.25" stroke="none" />
    <path d="M15 15l5.5 5.5" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconRecipes = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`} stroke="currentColor" strokeWidth={sw}>
    <rect x="4" y="3" width="16" height="18" rx="3" fill="currentColor" fillOpacity="0.12" />
    <path d="M8 8h8" strokeLinecap="round" />
    <path d="M8 12h5" strokeLinecap="round" />
    <path d="M8 16h3" strokeLinecap="round" />
    <circle cx="16.5" cy="14.5" r="1.25" fill="currentColor" stroke="none" />
  </svg>
);

const IconActivities = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`} stroke="currentColor" strokeWidth={sw}>
    <circle cx="16" cy="6.5" r="3.5" fill="currentColor" fillOpacity="0.12" />
    <circle cx="7" cy="6" r="2.5" fill="currentColor" fillOpacity="0.12" />
    <path d="M7 8.5v5l3.5 4.5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 13l-3.5 3.5" strokeLinecap="round" />
    <path d="M10.5 18l2.5-2" strokeLinecap="round" />
  </svg>
);

const IconFinance = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${iconStyle} ${className}`} stroke="currentColor" strokeWidth={sw}>
    <rect x="3" y="4" width="18" height="16" rx="3" fill="currentColor" fillOpacity="0.12" />
    <path d="M3 14l5-4 4 3 4-5 5 4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="8" r="1.25" fill="currentColor" stroke="none" />
    <path d="M3 20h18" strokeLinecap="round" />
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
        className="absolute -top-20 -right-20 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 60%)'
        }}
      />
      
      {/* Icon in container */}
      <div className="relative w-10 h-10 md:w-11 md:h-11 p-1.5 rounded-[10px] bg-gradient-to-br from-[#D4AF37]/[0.08] to-[#D4AF37]/[0.02] border border-[#D4AF37]/10 dark:from-[#D4AF37]/[0.1] dark:to-[#D4AF37]/[0.03] dark:border-[#D4AF37]/[0.15] transition-all duration-400 group-hover:border-[#D4AF37]/35 dark:group-hover:border-[#D4AF37]/45 group-hover:shadow-[0_2px_10px_rgba(212,175,55,0.1)] dark:group-hover:shadow-[0_2px_12px_rgba(212,175,55,0.15),0_0_20px_rgba(212,175,55,0.06)]">
        {IconComponent && (
          <IconComponent 
            className="text-[#D4AF37] dark:text-[#D4AF37] transition-all duration-500 group-hover:text-[#D4AF37] dark:group-hover:text-[#F1D27A] group-hover:scale-110 dark:group-hover:drop-shadow-[0_0_3px_rgba(212,175,55,0.25)]"
          />
        )}
      </div>
      
      {/* Text */}
      <div className="mt-auto">
        <h3 
          className="font-medium text-[15px] tracking-tight transition-colors duration-300 
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
