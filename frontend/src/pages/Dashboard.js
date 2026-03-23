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

const tiles = [
  { 
    to: '/dinner', 
    icon: UtensilsCrossed, 
    label: 'Dinner', 
    subtitle: "Tonight's plan",
    category: 'dinner',
    testId: 'tile-dinner'
  },
  { 
    to: '/calendar', 
    icon: Calendar, 
    label: 'Calendar', 
    subtitle: 'Family schedule',
    category: 'calendar',
    testId: 'tile-calendar'
  },
  { 
    to: '/photos', 
    icon: Image, 
    label: 'Photos', 
    subtitle: 'Family moments',
    category: 'photos',
    testId: 'tile-photos'
  },
  { 
    to: '/upload', 
    icon: Upload, 
    label: 'Upload', 
    subtitle: 'Add memories',
    category: 'upload',
    testId: 'tile-upload'
  },
  { 
    to: '/closet', 
    icon: Shirt, 
    label: 'Closet', 
    subtitle: 'Plan your fit',
    category: 'closet',
    testId: 'tile-closet'
  },
  { 
    to: '/find-items', 
    icon: Search, 
    label: 'Find Items', 
    subtitle: 'Locate anything',
    category: 'search',
    testId: 'tile-find-items'
  },
  { 
    to: '/recipes', 
    icon: CookingPot, 
    label: 'Recipes', 
    subtitle: 'Family kitchen',
    category: 'recipes',
    testId: 'tile-recipes'
  },
  { 
    to: '/activities', 
    icon: Activity, 
    label: 'Activities', 
    subtitle: 'Sports and events',
    category: 'activities',
    testId: 'tile-activities'
  },
  { 
    to: '/finance', 
    icon: Wallet, 
    label: 'Finance', 
    subtitle: 'Family legacy',
    category: 'finance',
    testId: 'tile-finance'
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0B0C0F]">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Hero Section */}
        <div className="mb-12 md:mb-16">
          {/* Mobile: Centered monogram */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="md:hidden">
              <SFMonogram size="lg" variant="default" />
            </div>
            
            <div className="text-center md:text-left">
              <h1 
                className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="app-title"
              >
                Stevens Family
              </h1>
              
              <div className="flex flex-col items-center md:items-start gap-4">
                <p 
                  className="text-[#A7AAB3] text-lg md:text-xl tracking-wide"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
                >
                  God First. Family Always.
                </p>
                
                {/* Elegant gold accent */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-gradient-to-r from-[#C6A85A] to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C6A85A]" />
                  <div className="w-8 h-px bg-gradient-to-l from-[#C6A85A] to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
          data-testid="dashboard-grid"
        >
          {tiles.map((tile) => (
            <LuxuryTile
              key={tile.to}
              to={tile.to}
              icon={tile.icon}
              label={tile.label}
              subtitle={tile.subtitle}
              category={tile.category}
              testId={tile.testId}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 md:mt-24 text-center">
          <div className="flex items-center justify-center gap-3">
            <SFMonogram size="sm" variant="stacked" />
            <div className="w-px h-6 bg-[rgba(255,255,255,0.1)]" />
            <span className="text-[#6B7280] text-sm tracking-wider uppercase">Family Legacy Platform</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
