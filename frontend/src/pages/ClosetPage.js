import { PageLayout } from '../components/PageLayout';
import { Shirt, ExternalLink, Smartphone, Sparkles } from 'lucide-react';

const ClosetPage = () => {
  const aclosetUrl = "https://acloset.com";
  const appStoreUrl = "https://apps.apple.com/app/acloset-your-closet-organized/id1489681573";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.acloset.android";

  return (
    <PageLayout title="Outfit Planner">
      <div className="space-y-6" data-testid="closet-page">
        {/* Hero Card */}
        <div className="bg-gradient-to-br from-accent/30 to-primary/20 dark:from-accent/40 dark:to-primary/30 rounded-3xl p-8 text-center">
          <div className="p-4 rounded-full bg-surface-light dark:bg-surface-dark w-fit mx-auto mb-4 shadow-sm">
            <Shirt className="text-primary" size={40} />
          </div>
          
          <h2 className="font-heading font-bold text-xl text-text-primary dark:text-dark-primary mb-2">
            Plan Your Outfits
          </h2>
          <p className="text-sm text-text-secondary dark:text-dark-secondary mb-6 max-w-sm mx-auto">
            Use Acloset to organize your wardrobe and plan outfits for the whole family
          </p>
          
          <a
            href={aclosetUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="acloset-website-link"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={18} />
            Visit Acloset
          </a>
        </div>

        {/* App Download Links */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-light dark:bg-surface-dark rounded-3xl p-5 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
            data-testid="acloset-appstore-link"
          >
            <div className="p-2 rounded-xl bg-text-primary/10 w-fit mb-3">
              <Smartphone className="text-text-primary dark:text-dark-primary" size={20} />
            </div>
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              App Store
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Download for iPhone
            </p>
          </a>

          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-light dark:bg-surface-dark rounded-3xl p-5 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
            data-testid="acloset-playstore-link"
          >
            <div className="p-2 rounded-xl bg-secondary/20 w-fit mb-3">
              <Smartphone className="text-secondary" size={20} />
            </div>
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Play Store
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Download for Android
            </p>
          </a>
        </div>

        {/* Features Info */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-accent/30">
              <Sparkles className="text-accent" size={20} />
            </div>
            <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary">
              What is Acloset?
            </h3>
          </div>
          
          <p className="text-sm text-text-secondary dark:text-dark-secondary mb-4">
            Acloset is a wardrobe organizer app that helps you:
          </p>
          
          <ul className="text-sm text-text-secondary dark:text-dark-secondary space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary text-xs">✓</span>
              </span>
              <span>Catalog all your clothes with photos</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary text-xs">✓</span>
              </span>
              <span>Create and save outfit combinations</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary text-xs">✓</span>
              </span>
              <span>Plan outfits for upcoming events</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary text-xs">✓</span>
              </span>
              <span>Track what you wear and when</span>
            </li>
          </ul>
        </div>

        {/* Tips */}
        <div className="bg-primary/10 dark:bg-primary/20 rounded-3xl p-6">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-2">
            Family Tip
          </h3>
          <p className="text-sm text-text-secondary dark:text-dark-secondary">
            Each family member can create their own Acloset account to manage their wardrobe. 
            Great for coordinating outfits for family photos or special events!
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClosetPage;
