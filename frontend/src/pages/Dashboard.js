import { Header } from '../components/Header';
import { LuxuryTile } from '../components/LuxuryTile';
import { SFMonogram } from '../components/SFMonogram';
import { HeroBackground } from '../components/HeroBackground';

const tiles = [
  { 
    to: '/dinner', 
    iconType: 'dinner',
    label: 'Dinner', 
    subtitle: "Tonight's plan",
    testId: 'tile-dinner'
  },
  { 
    to: '/calendar', 
    iconType: 'calendar',
    label: 'Calendar', 
    subtitle: 'Family schedule',
    testId: 'tile-calendar'
  },
  { 
    to: '/photos', 
    iconType: 'photos',
    label: 'Photos', 
    subtitle: 'Family moments',
    testId: 'tile-photos'
  },
  { 
    to: '/upload', 
    iconType: 'upload',
    label: 'Upload', 
    subtitle: 'Add memories',
    testId: 'tile-upload'
  },
  { 
    to: '/closet', 
    iconType: 'closet',
    label: 'Closet', 
    subtitle: 'Plan your fit',
    testId: 'tile-closet'
  },
  { 
    to: '/find-items', 
    iconType: 'search',
    label: 'Find Items', 
    subtitle: 'Locate anything',
    testId: 'tile-find-items'
  },
  { 
    to: '/recipes', 
    iconType: 'recipes',
    label: 'Recipes', 
    subtitle: 'Family kitchen',
    testId: 'tile-recipes'
  },
  { 
    to: '/activities', 
    iconType: 'activities',
    label: 'Activities', 
    subtitle: 'Sports and events',
    testId: 'tile-activities'
  },
  { 
    to: '/finance', 
    iconType: 'finance',
    label: 'Finance', 
    subtitle: 'Family legacy',
    testId: 'tile-finance'
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0B0C0F]">
      <Header />
      
      {/* Hero Section with rotating background */}
      <section className="relative overflow-hidden">
        {/* Rotating Background */}
        <HeroBackground />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            {/* Monogram */}
            <div className="mb-8">
              <SFMonogram size="lg" variant="default" />
            </div>
            
            {/* Title */}
            <h1 
              className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid="app-title"
            >
              Stevens Family
            </h1>
            
            {/* Tagline */}
            <p 
              className="text-[#8B8D94] text-lg md:text-xl tracking-wide mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
            >
              God First. Family Always.
            </p>
            
            {/* Elegant gold accent */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C6A85A]/60" />
              <div className="w-1 h-1 rounded-full bg-[#C6A85A]" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C6A85A]/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Grid Section */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
          data-testid="dashboard-grid"
        >
          {tiles.map((tile) => (
            <LuxuryTile
              key={tile.to}
              to={tile.to}
              iconType={tile.iconType}
              label={tile.label}
              subtitle={tile.subtitle}
              testId={tile.testId}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 md:mt-28 text-center pb-8">
          <div className="flex flex-col items-center gap-4">
            {/* Family Name */}
            <div className="flex items-center gap-2">
              <SFMonogram size="sm" variant="stacked" />
              <span 
                className="text-[#9CA3AF] text-sm font-medium"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Stevens Family
              </span>
            </div>
            
            {/* Tagline */}
            <p className="text-[#6B7280] text-xs">
              God First. Family Always.
            </p>
            
            {/* Domain info */}
            <p className="text-[#4B5563] text-xs max-w-xs">
              Part of our private family domain: <span className="text-[#C6A85A]">god-1st.com</span>
            </p>
            
            {/* Copyright */}
            <p className="text-[#3F3F46] text-[11px] mt-2">
              © Stevens Family
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
