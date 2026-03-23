import { Header } from '../components/Header';
import { LuxuryTile } from '../components/LuxuryTile';
import { FamilyLogo } from '../components/FamilyLogo';
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
      
      {/* Hero Section - Logo is the centerpiece */}
      <section className="relative overflow-hidden min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center">
        <HeroBackground />
        
        <div className="relative z-10 w-full px-4 py-12 sm:py-16">
          <FamilyLogo size="hero" className="mx-auto" />
        </div>
      </section>

      {/* Dashboard Grid */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* Section header */}
        <div className="text-center mb-8">
          <p 
            className="text-[#58585C] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Family Dashboard
          </p>
        </div>

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
            {/* Mini logo */}
            <span 
              className="text-2xl text-[#78756E]"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Stevens
            </span>
            
            {/* Tagline */}
            <p className="text-[#4A4844] text-xs tracking-wider">
              God First. Family Always.
            </p>
            
            {/* Domain */}
            <p className="text-[#3A3836] text-xs">
              Our family home: <span className="text-[#8B7D5E]">god-1st.com</span>
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
