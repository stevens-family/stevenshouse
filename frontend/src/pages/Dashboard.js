import { Header } from '../components/Header';
import { LuxuryTile } from '../components/LuxuryTile';
import { SFMonogram } from '../components/SFMonogram';
import { HeroBackground } from '../components/HeroBackground';

const tiles = [
  { to: '/dinner', iconType: 'dinner', label: 'Dinner', subtitle: "Tonight's plan", testId: 'tile-dinner' },
  { to: '/calendar', iconType: 'calendar', label: 'Calendar', subtitle: 'Family schedule', testId: 'tile-calendar' },
  { to: '/photos', iconType: 'photos', label: 'Photos', subtitle: 'Family moments', testId: 'tile-photos' },
  { to: '/upload', iconType: 'upload', label: 'Upload', subtitle: 'Add memories', testId: 'tile-upload' },
  { to: '/closet', iconType: 'closet', label: 'Closet', subtitle: 'Plan your fit', testId: 'tile-closet' },
  { to: '/find-items', iconType: 'search', label: 'Find Items', subtitle: 'Locate anything', testId: 'tile-find-items' },
  { to: '/recipes', iconType: 'recipes', label: 'Recipes', subtitle: 'Family kitchen', testId: 'tile-recipes' },
  { to: '/activities', iconType: 'activities', label: 'Activities', subtitle: 'Sports & events', testId: 'tile-activities' },
  { to: '/finance', iconType: 'finance', label: 'Finance', subtitle: 'Family budget', testId: 'tile-finance' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0F]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            {/* House Emblem */}
            <div className="mb-10">
              <SFMonogram size="lg" variant="default" />
            </div>
            
            {/* Family Name - Elegant serif */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl text-[#F0EDE6] tracking-wide mb-3"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                letterSpacing: '0.04em'
              }}
              data-testid="app-title"
            >
              Stevens Family
            </h1>
            
            {/* Tagline */}
            <p 
              className="text-[#908C84] text-base md:text-lg tracking-widest uppercase mb-8"
              style={{ 
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 400,
                letterSpacing: '0.2em',
                fontSize: '13px'
              }}
            >
              God First · Family Always
            </p>
            
            {/* Subtle divider */}
            <div className="flex items-center gap-4 opacity-50">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9B896]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9B896]" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9B896]" />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
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
        <footer className="mt-24 md:mt-32 text-center pb-10">
          <div className="flex flex-col items-center gap-5">
            {/* Emblem */}
            <SFMonogram size="sm" variant="stacked" />
            
            {/* Family Name */}
            <p 
              className="text-[#78756E] text-sm"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            >
              Stevens Family
            </p>
            
            {/* Tagline */}
            <p 
              className="text-[#4A4844] text-xs tracking-wider"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              God First. Family Always.
            </p>
            
            {/* Domain */}
            <p className="text-[#3A3836] text-xs">
              Part of our family home: <span className="text-[#8B7D5E]">god-1st.com</span>
            </p>
            
            {/* Copyright */}
            <p className="text-[#2A2826] text-[11px] mt-4">
              © Stevens Family
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
