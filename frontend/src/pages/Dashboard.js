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
import { Header } from '../components/Header';
import { LuxuryTile } from '../components/LuxuryTile';
import { SFMonogram } from '../components/SFMonogram';
import { HeroBackground } from '../components/HeroBackground';

const tiles = [
  { 
    to: '/dinner', 
    icon: UtensilsCrossed, 
    label: 'Dinner', 
    subtitle: "Tonight's plan",
    testId: 'tile-dinner'
  },
  { 
    to: '/calendar', 
    icon: Calendar, 
    label: 'Calendar', 
    subtitle: 'Family schedule',
    testId: 'tile-calendar'
  },
  { 
    to: '/photos', 
    icon: Image, 
    label: 'Photos', 
    subtitle: 'Family moments',
    testId: 'tile-photos'
  },
  { 
    to: '/upload', 
    icon: Upload, 
    label: 'Upload', 
    subtitle: 'Add memories',
    testId: 'tile-upload'
  },
  { 
    to: '/closet', 
    icon: Shirt, 
    label: 'Closet', 
    subtitle: 'Plan your fit',
    testId: 'tile-closet'
  },
  { 
    to: '/find-items', 
    icon: Search, 
    label: 'Find Items', 
    subtitle: 'Locate anything',
    testId: 'tile-find-items'
  },
  { 
    to: '/recipes', 
    icon: CookingPot, 
    label: 'Recipes', 
    subtitle: 'Family kitchen',
    testId: 'tile-recipes'
  },
  { 
    to: '/activities', 
    icon: Activity, 
    label: 'Activities', 
    subtitle: 'Sports and events',
    testId: 'tile-activities'
  },
  { 
    to: '/finance', 
    icon: Wallet, 
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
              icon={tile.icon}
              label={tile.label}
              subtitle={tile.subtitle}
              testId={tile.testId}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 md:mt-28 text-center pb-8">
          <div className="flex items-center justify-center gap-3">
            <SFMonogram size="sm" variant="stacked" />
            <div className="w-px h-5 bg-[rgba(255,255,255,0.08)]" />
            <span 
              className="text-[#4B5563] text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Family Legacy Platform
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
