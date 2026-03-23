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
        group relative overflow-hidden
        bg-[#141419] rounded-2xl
        border border-[rgba(255,255,255,0.04)]
        p-5 md:p-6 flex flex-col justify-between cursor-pointer
        transition-all duration-500 ease-out
        hover:border-[rgba(198,168,90,0.4)] 
        hover:bg-[#18181f]
        hover:-translate-y-1
        ${sizeClasses[size]}
      `}
      data-testid={testId}
    >
      {/* Subtle corner glow on hover */}
      <div 
        className="absolute -top-12 -right-12 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(198, 168, 90, 0.08) 0%, transparent 70%)'
        }}
      />
      
      {/* Minimal line icon - no background */}
      <div className="relative">
        <Icon 
          size={26} 
          strokeWidth={1.25}
          className="text-[#6B7280] transition-all duration-500 group-hover:text-[#C6A85A] group-hover:scale-110"
        />
      </div>
      
      {/* Text */}
      <div className="mt-auto">
        <h3 
          className="font-semibold text-[#E5E5E5] text-[15px] md:text-base tracking-tight transition-colors duration-300 group-hover:text-[#F5F5F5]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {label}
        </h3>
        {subtitle && (
          <p className="text-[#4B5563] text-xs mt-0.5 transition-colors duration-300 group-hover:text-[#6B7280]">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Minimal bottom line on hover */}
      <div 
        className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C6A85A] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"
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
