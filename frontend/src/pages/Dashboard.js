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
    <div className="min-h-screen bg-primary">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Hero Section */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="md:hidden">
              <SFMonogram size="lg" />
            </div>
            <h1 
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight"
              data-testid="app-title"
            >
              Stevens Family
            </h1>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-secondary text-lg md:text-xl font-medium tracking-wide">
              God First. Family Always.
            </p>
            {/* Gold accent line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--gold)] to-transparent" />
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
              testId={tile.testId}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 md:mt-24 text-center">
          <div className="flex items-center justify-center gap-2 text-muted text-sm">
            <SFMonogram size="sm" withBorder={false} />
            <span className="opacity-50">|</span>
            <span>Family Legacy Platform</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
