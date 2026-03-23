import { PageLayout } from '../components/PageLayout';
import { UtensilsCrossed, ExternalLink, Clock } from 'lucide-react';

const DinnerPage = () => {
  const dinnerDocUrl = "https://docs.google.com/document/d/YOUR_DINNER_DOC_ID/edit";
  const dinnerSheetUrl = "https://docs.google.com/spreadsheets/d/YOUR_DINNER_SHEET_ID/edit";
  const embedUrl = "https://docs.google.com/document/d/YOUR_DINNER_DOC_ID/preview";

  return (
    <PageLayout title="Dinner Tonight">
      <div className="space-y-6" data-testid="dinner-page">
        {/* Hero Card */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-sm"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur">
                <UtensilsCrossed size={24} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl">What's Cooking?</h2>
                <p className="text-sm text-white/80">Family meal planning</p>
              </div>
            </div>
            
            <div className="flex gap-3 flex-wrap">
              <a
                href={dinnerDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="dinner-doc-link"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-text-primary rounded-full font-bold text-sm hover:bg-white/90 transition-colors"
              >
                <ExternalLink size={16} />
                View Meal Plan
              </a>
              <a
                href={dinnerSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="dinner-sheet-link"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 text-white rounded-full font-bold text-sm hover:bg-white/30 transition-colors backdrop-blur"
              >
                <Clock size={16} />
                Weekly Schedule
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Document */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-black/5 dark:border-white/10">
            <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary">
              This Week's Menu
            </h3>
          </div>
          <div className="aspect-[4/3] w-full">
            <iframe
              src={embedUrl}
              title="Dinner Menu"
              className="w-full h-full border-0"
              data-testid="dinner-iframe"
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>

        {/* Quick Info */}
        <div className="bg-accent/20 dark:bg-accent/30 rounded-3xl p-6">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-2">
            Meal Planning Tips
          </h3>
          <ul className="text-sm text-text-secondary dark:text-dark-secondary space-y-2">
            <li>Check the meal plan each morning</li>
            <li>Anyone can suggest changes in the shared document</li>
            <li>Link your favorite recipes from the Recipes page</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default DinnerPage;
