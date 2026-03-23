import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  Calendar, 
  Image, 
  Upload, 
  Shirt, 
  Search, 
  CookingPot, 
  Activity, 
  Wallet 
} from 'lucide-react';

// Custom luxury icon wrapper with unique styling per category
const LuxuryIcon = ({ icon: Icon, category }) => {
  const styles = {
    dinner: {
      bg: 'linear-gradient(135deg, #C6A85A 0%, #8B7355 100%)',
      shadow: '0 4px 20px rgba(198, 168, 90, 0.3)',
      iconColor: '#0B0C0F'
    },
    calendar: {
      bg: 'linear-gradient(135deg, #2D3748 0%, #1A202C 100%)',
      shadow: '0 4px 20px rgba(45, 55, 72, 0.4)',
      iconColor: '#C6A85A',
      border: '1px solid rgba(198, 168, 90, 0.3)'
    },
    photos: {
      bg: 'linear-gradient(135deg, #374151 0%, #1F2937 100%)',
      shadow: '0 4px 20px rgba(55, 65, 81, 0.4)',
      iconColor: '#E0C878'
    },
    upload: {
      bg: 'transparent',
      shadow: 'none',
      iconColor: '#C6A85A',
      border: '2px dashed rgba(198, 168, 90, 0.5)'
    },
    closet: {
      bg: 'linear-gradient(135deg, #1F1F23 0%, #111318 100%)',
      shadow: '0 4px 20px rgba(31, 31, 35, 0.4)',
      iconColor: '#F5F5F5',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    search: {
      bg: 'radial-gradient(circle at 30% 30%, #2A2A30 0%, #111318 100%)',
      shadow: '0 4px 20px rgba(42, 42, 48, 0.4)',
      iconColor: '#A7AAB3'
    },
    recipes: {
      bg: 'linear-gradient(135deg, #8B4513 0%, #5D2E0C 100%)',
      shadow: '0 4px 20px rgba(139, 69, 19, 0.3)',
      iconColor: '#F5F5F5'
    },
    activities: {
      bg: 'linear-gradient(135deg, #1E3A4C 0%, #0F1F29 100%)',
      shadow: '0 4px 20px rgba(30, 58, 76, 0.4)',
      iconColor: '#6BB5D1'
    },
    finance: {
      bg: 'linear-gradient(135deg, #C6A85A 0%, #A08945 100%)',
      shadow: '0 4px 20px rgba(198, 168, 90, 0.4)',
      iconColor: '#0B0C0F'
    }
  };

  const style = styles[category] || styles.calendar;

  return (
    <div 
      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
      style={{
        background: style.bg,
        boxShadow: style.shadow,
        border: style.border || 'none'
      }}
    >
      <Icon 
        size={24} 
        strokeWidth={1.5} 
        style={{ color: style.iconColor }}
        className="transition-transform duration-300"
      />
    </div>
  );
};

export const LuxuryTile = ({ 
  to, 
  icon: Icon, 
  label, 
  subtitle,
  category,
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
        group relative overflow-hidden
        bg-[#171A20] rounded-2xl md:rounded-3xl
        border border-[rgba(255,255,255,0.05)]
        p-5 md:p-6 flex flex-col justify-between cursor-pointer
        transition-all duration-500 ease-out
        hover:border-[var(--gold)] hover:shadow-[0_8px_40px_rgba(198,168,90,0.15)]
        hover:-translate-y-1
        ${sizeClasses[size]}
      `}
      data-testid={testId}
    >
      {/* Subtle corner accent */}
      <div 
        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at top right, rgba(198, 168, 90, 0.1) 0%, transparent 70%)'
        }}
      />
      
      {/* Icon */}
      <LuxuryIcon icon={Icon} category={category} />
      
      {/* Text */}
      <div className="mt-auto pt-4">
        <h3 
          className="font-heading font-bold text-[#F5F5F5] text-base md:text-lg tracking-tight transition-colors duration-300 group-hover:text-[#C6A85A]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {label}
        </h3>
        {subtitle && (
          <p className="text-[#6B7280] text-xs md:text-sm mt-1 transition-colors duration-300 group-hover:text-[#A7AAB3]">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Bottom accent line - appears on hover */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C6A85A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
