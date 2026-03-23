import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  Shirt, 
  Search, 
  CookingPot, 
  Activity, 
  Wallet,
  Upload,
  Heart
} from 'lucide-react';

const menuItems = [
  { 
    path: '/dinner', 
    icon: UtensilsCrossed, 
    label: 'Dinner Tonight', 
    description: 'Weekly meal planning',
    color: 'bg-primary/20',
    iconColor: 'text-primary'
  },
  { 
    path: '/upload', 
    icon: Upload, 
    label: 'Upload Photos', 
    description: 'Add to family album',
    color: 'bg-secondary/20',
    iconColor: 'text-secondary'
  },
  { 
    path: '/closet', 
    icon: Shirt, 
    label: 'Outfit Planner', 
    description: 'Acloset wardrobe app',
    color: 'bg-accent/30',
    iconColor: 'text-accent'
  },
  { 
    path: '/find-items', 
    icon: Search, 
    label: 'Find Items', 
    description: 'Home inventory lookup',
    color: 'bg-secondary/20',
    iconColor: 'text-secondary'
  },
  { 
    path: '/recipes', 
    icon: CookingPot, 
    label: 'Recipes', 
    description: 'Family favorites collection',
    color: 'bg-primary/20',
    iconColor: 'text-primary'
  },
  { 
    path: '/activities', 
    icon: Activity, 
    label: 'Activities', 
    description: 'Things to do together',
    color: 'bg-accent/30',
    iconColor: 'text-accent'
  },
  { 
    path: '/finance', 
    icon: Wallet, 
    label: 'Family Finance', 
    description: 'Budget & savings',
    color: 'bg-secondary/20',
    iconColor: 'text-secondary'
  },
];

const MorePage = () => {
  return (
    <PageLayout title="More" showBack={false}>
      <div className="space-y-6" data-testid="more-page">
        {/* Header */}
        <div className="text-center py-4">
          <div className="p-4 rounded-full bg-primary/20 w-fit mx-auto mb-3">
            <Heart className="text-primary" size={32} />
          </div>
          <h2 className="font-heading font-bold text-xl text-text-primary dark:text-dark-primary">
            Stevens Family Tools
          </h2>
          <p className="text-sm text-text-secondary dark:text-dark-secondary mt-1">
            Everything you need in one place
          </p>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-4 p-4 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-[1.01]"
              data-testid={`more-menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`p-3 rounded-2xl ${item.color}`}>
                <item.icon className={item.iconColor} size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary">
                  {item.label}
                </h3>
                <p className="text-xs text-text-secondary dark:text-dark-secondary">
                  {item.description}
                </p>
              </div>
              <div className="text-text-secondary dark:text-dark-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center py-6 text-sm text-text-secondary dark:text-dark-secondary">
          <p className="font-heading">God First. Family Always.</p>
          <p className="mt-1 text-xs">Stevens Family Portal</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default MorePage;
