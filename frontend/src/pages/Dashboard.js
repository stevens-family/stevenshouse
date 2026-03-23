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
import { Navigation } from '../components/Navigation';
import { DarkModeToggle } from '../components/DarkModeToggle';
import { DashboardTile } from '../components/DashboardTile';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-6 max-w-4xl mx-auto">
          <div>
            <h1 
              className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-primary font-heading"
              data-testid="app-title"
            >
              Stevens Family
            </h1>
            <p className="text-sm text-text-secondary dark:text-dark-secondary font-body mt-1">
              God First. Family Always.
            </p>
          </div>
          <DarkModeToggle />
        </div>
      </header>

      {/* Dashboard Grid */}
      <main className="px-4 md:px-6 max-w-4xl mx-auto">
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          data-testid="dashboard-grid"
        >
          {/* Large Tile - Dinner Tonight */}
          <DashboardTile
            to="/dinner"
            icon={UtensilsCrossed}
            label="Dinner Tonight"
            description="What's cooking?"
            bgImage="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80"
            size="large"
            testId="tile-dinner"
          />

          {/* Medium Tile - Calendar */}
          <DashboardTile
            to="/calendar"
            icon={Calendar}
            label="Calendar"
            description="Family events"
            bgColor="bg-secondary/20 dark:bg-secondary/30"
            size="medium"
            testId="tile-calendar"
          />

          {/* Medium Tile - Photos */}
          <DashboardTile
            to="/photos"
            icon={Image}
            label="Photos"
            description="Family memories"
            bgImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
            size="medium"
            testId="tile-photos"
          />

          {/* Small Tiles */}
          <DashboardTile
            to="/upload"
            icon={Upload}
            label="Upload"
            bgColor="bg-primary/20 dark:bg-primary/30"
            testId="tile-upload"
          />

          <DashboardTile
            to="/closet"
            icon={Shirt}
            label="Closet"
            bgColor="bg-accent/30 dark:bg-accent/40"
            testId="tile-closet"
          />

          <DashboardTile
            to="/find-items"
            icon={Search}
            label="Find Items"
            bgColor="bg-secondary/20 dark:bg-secondary/30"
            testId="tile-find-items"
          />

          <DashboardTile
            to="/recipes"
            icon={CookingPot}
            label="Recipes"
            bgImage="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&q=80"
            testId="tile-recipes"
          />

          <DashboardTile
            to="/activities"
            icon={Activity}
            label="Activities"
            bgColor="bg-primary/20 dark:bg-primary/30"
            testId="tile-activities"
          />

          <DashboardTile
            to="/finance"
            icon={Wallet}
            label="Finance"
            bgColor="bg-accent/30 dark:bg-accent/40"
            testId="tile-finance"
          />
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default Dashboard;
