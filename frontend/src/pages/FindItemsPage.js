import { PageLayout } from '../components/PageLayout';
import { Search, ExternalLink, MapPin, Package } from 'lucide-react';

const FindItemsPage = () => {
  const findItemsSheetUrl = "https://docs.google.com/spreadsheets/d/YOUR_FIND_ITEMS_SHEET_ID/edit";
  const embedUrl = "https://docs.google.com/spreadsheets/d/YOUR_FIND_ITEMS_SHEET_ID/preview";

  return (
    <PageLayout title="Find Items">
      <div className="space-y-6" data-testid="find-items-page">
        {/* Header Card */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-secondary/20">
                <Search className="text-secondary" size={24} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-text-primary dark:text-dark-primary">
                  Home Inventory
                </h2>
                <p className="text-sm text-text-secondary dark:text-dark-secondary">
                  Know where everything is
                </p>
              </div>
            </div>
            
            <a
              href={findItemsSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="find-items-sheet-link"
              className="p-3 rounded-full bg-secondary text-white hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          
          <p className="text-sm text-text-secondary dark:text-dark-secondary">
            Can't find something? Check our home inventory sheet to see where items are stored.
          </p>
        </div>

        {/* Quick Categories */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-3xl p-5">
            <div className="p-2 rounded-xl bg-primary/20 w-fit mb-3">
              <MapPin className="text-primary" size={20} />
            </div>
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Locations
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Search by room or area
            </p>
          </div>

          <div className="bg-accent/20 dark:bg-accent/30 rounded-3xl p-5">
            <div className="p-2 rounded-xl bg-accent/40 w-fit mb-3">
              <Package className="text-accent" size={20} />
            </div>
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Categories
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Browse by item type
            </p>
          </div>
        </div>

        {/* Embedded Sheet */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
            <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary">
              Inventory List
            </h3>
            <a
              href={findItemsSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary font-bold hover:underline"
            >
              Edit in Google Sheets
            </a>
          </div>
          <div className="aspect-[4/3] w-full">
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
        <div className="bg-secondary/10 dark:bg-secondary/20 rounded-3xl p-6">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-2">
            Keep It Updated
          </h3>
          <ul className="text-sm text-text-secondary dark:text-dark-secondary space-y-2">
            <li>Add new items when you buy them</li>
            <li>Update locations when you move things</li>
            <li>Include details like "top shelf" or "blue box"</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default FindItemsPage;
