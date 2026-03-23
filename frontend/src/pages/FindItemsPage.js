import { PageLayout } from '../components/PageLayout';
import { Search, ExternalLink, MapPin, Package } from 'lucide-react';

const FindItemsPage = () => {
  const findItemsSheetUrl = "https://docs.google.com/spreadsheets/d/YOUR_FIND_ITEMS_SHEET_ID/edit";
  const embedUrl = "https://docs.google.com/spreadsheets/d/YOUR_FIND_ITEMS_SHEET_ID/preview";

  return (
    <PageLayout title="Locate Anything">
      <div className="space-y-8" data-testid="find-items-page">
        {/* Action Card */}
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center">
                <Search className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-primary text-lg">
                  Home Inventory
                </h2>
                <p className="text-secondary text-sm">
                  Know where everything is
                </p>
              </div>
            </div>
            
            <a
              href={findItemsSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="find-items-sheet-link"
              className="p-3 rounded-lg bg-gold text-[var(--bg-primary)] hover:opacity-90 transition-luxury"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="grid grid-cols-2 gap-4">
          <div className="luxury-card p-5">
            <div className="w-10 h-10 rounded-xl bg-gold-dim flex items-center justify-center mb-4">
              <MapPin className="text-gold" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              Locations
            </h3>
            <p className="text-secondary text-xs">
              Search by room
            </p>
          </div>

          <div className="luxury-card p-5">
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-4">
              <Package className="text-secondary" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              Categories
            </h3>
            <p className="text-secondary text-xs">
              Browse by type
            </p>
          </div>
        </div>

        {/* Embedded Sheet */}
        <div className="luxury-card overflow-hidden">
          <div className="p-4 border-b border-[var(--divider)] flex items-center justify-between">
            <span className="text-secondary text-sm font-medium">Inventory List</span>
            <a
              href={findItemsSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gold font-semibold hover:underline"
            >
              Edit Sheet
            </a>
          </div>
          <div className="aspect-[4/3] w-full bg-secondary">
            <iframe
              src={embedUrl}
              title="Home Inventory"
              className="w-full h-full border-0"
              data-testid="find-items-iframe"
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>

        {/* Tips */}
        <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <h3 className="font-heading font-bold text-primary mb-3">Keep It Updated</h3>
          <ul className="text-secondary text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>Add new items when you buy them</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>Update locations when you move things</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>Include details like "top shelf" or "blue box"</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default FindItemsPage;
