import { PageLayout } from '../components/PageLayout';
import { UtensilsCrossed, ExternalLink, Clock } from 'lucide-react';

const DinnerPage = () => {
  const dinnerDocUrl = "https://docs.google.com/document/d/YOUR_DINNER_DOC_ID/edit";
  const dinnerSheetUrl = "https://docs.google.com/spreadsheets/d/YOUR_DINNER_SHEET_ID/edit";
  const embedUrl = "https://docs.google.com/document/d/YOUR_DINNER_DOC_ID/preview";

  return (
    <PageLayout title="Tonight's Plan">
      <div className="space-y-8" data-testid="dinner-page">
        {/* Action Card */}
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-dim flex items-center justify-center">
                <UtensilsCrossed className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-primary text-lg">
                  Meal Planning
                </h2>
                <p className="text-secondary text-sm">
                  What's cooking tonight?
                </p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <a
                href={dinnerDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="dinner-doc-link"
                className="flex items-center gap-2 px-4 py-2 bg-gold text-[var(--bg-primary)] rounded-lg font-semibold text-sm hover:opacity-90 transition-luxury"
              >
                <ExternalLink size={16} />
                <span className="hidden sm:inline">View Plan</span>
              </a>
              <a
                href={dinnerSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="dinner-sheet-link"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] text-secondary rounded-lg font-semibold text-sm hover:text-primary transition-luxury"
              >
                <Clock size={16} />
                <span className="hidden sm:inline">Weekly</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Document */}
        <div className="luxury-card overflow-hidden">
          <div className="p-4 border-b border-[var(--divider)]">
            <span className="text-secondary text-sm font-medium">This Week's Menu</span>
          </div>
          <div className="aspect-[4/3] w-full bg-secondary">
            <iframe
              src={embedUrl}
              title="Dinner Menu"
              className="w-full h-full border-0"
              data-testid="dinner-iframe"
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>

        {/* Tips */}
        <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <h3 className="font-heading font-bold text-primary mb-3">Meal Planning Tips</h3>
          <ul className="text-secondary text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>Check the meal plan each morning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>Anyone can suggest changes in the shared document</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>Link your favorite recipes from the Recipes page</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default DinnerPage;
