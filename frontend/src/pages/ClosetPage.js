import { PageLayout } from '../components/PageLayout';
import { Shirt, ExternalLink, Smartphone } from 'lucide-react';

const ClosetPage = () => {
  const aclosetUrl = "https://acloset.com";
  const appStoreUrl = "https://apps.apple.com/app/acloset-your-closet-organized/id1489681573";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.acloset.android";

  return (
    <PageLayout title="Plan Your Fit">
      <div className="space-y-8" data-testid="closet-page">
        {/* Hero Card */}
        <div className="luxury-card p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold-dim flex items-center justify-center mx-auto mb-6">
            <Shirt className="text-gold" size={32} strokeWidth={1.5} />
          </div>
          
          <h2 className="font-heading font-bold text-primary text-2xl mb-2">
            Outfit Planner
          </h2>
          <p className="text-secondary mb-6 max-w-md mx-auto">
            Use Acloset to organize your wardrobe and plan outfits for the whole family.
          </p>
          
          <a
            href={aclosetUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="acloset-website-link"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[var(--bg-primary)] rounded-lg font-bold hover:opacity-90 transition-luxury"
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
            className="luxury-card p-5"
            data-testid="acloset-appstore-link"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-4">
              <Smartphone className="text-secondary" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              App Store
            </h3>
            <p className="text-secondary text-xs">
              Download for iPhone
            </p>
          </a>

          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-card p-5"
            data-testid="acloset-playstore-link"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-4">
              <Smartphone className="text-secondary" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              Play Store
            </h3>
            <p className="text-secondary text-xs">
              Download for Android
            </p>
          </a>
        </div>

        {/* Features Info */}
        <div className="luxury-card p-6">
          <h3 className="font-heading font-bold text-primary mb-4">What is Acloset?</h3>
          <p className="text-secondary text-sm mb-4">
            Acloset is a wardrobe organizer app that helps you:
          </p>
          <ul className="text-secondary text-sm space-y-3">
            {[
              'Catalog all your clothes with photos',
              'Create and save outfit combinations',
              'Plan outfits for upcoming events',
              'Track what you wear and when'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-gold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tip */}
        <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <h3 className="font-heading font-bold text-primary mb-2">Family Tip</h3>
          <p className="text-secondary text-sm">
            Each family member can create their own Acloset account to manage their wardrobe. 
            Great for coordinating outfits for family photos or special events.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClosetPage;
