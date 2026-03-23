import { PageLayout } from '../components/PageLayout';
import { Search, ExternalLink, MapPin, Package } from 'lucide-react';

const FindItemsPage = () => {
  const findItemsSheetUrl = "https://docs.google.com/spreadsheets/d/YOUR_FIND_ITEMS_SHEET_ID/edit";
  const embedUrl = "https://docs.google.com/spreadsheets/d/YOUR_FIND_ITEMS_SHEET_ID/preview";

  return (
    <PageLayout title="Locate Anything">
      <div className="space-y-8" data-testid="find-items-page">
        {/* Action Card */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-6 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center">
                <Search className="text-[#8B7D5E] dark:text-[#C9B896]" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-lg">Home Inventory</h2>
                <p className="text-[#7A7A7A] dark:text-[#908C84] text-sm">Know where everything is</p>
              </div>
            </div>
            <a href={findItemsSheetUrl} target="_blank" rel="noopener noreferrer" data-testid="find-items-sheet-link"
              className="p-3 rounded-lg bg-[#8B7D5E] dark:bg-[#C9B896] text-white dark:text-[#0D0D0F] hover:opacity-90 transition-all">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <MapPin className="text-[#8B7D5E] dark:text-[#C9B896]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">Locations</h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">Search by room</p>
          </div>
          <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <Package className="text-[#7A7A7A] dark:text-[#6B6B70]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">Categories</h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">Browse by type</p>
          </div>
        </div>

        {/* Embedded Sheet */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl overflow-hidden transition-colors duration-300">
          <div className="p-4 border-b border-[#E8E4DC] dark:border-[#232328] flex items-center justify-between">
            <span className="text-[#7A7A7A] dark:text-[#908C84] text-sm font-medium">Inventory List</span>
            <a href={findItemsSheetUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#8B7D5E] dark:text-[#C9B896] font-semibold hover:underline">Edit Sheet</a>
          </div>
          <div className="aspect-[4/3] w-full bg-[#F5F2EB] dark:bg-[#1A1A1E]">
            <iframe src={embedUrl} title="Home Inventory" className="w-full h-full border-0" data-testid="find-items-iframe" style={{ minHeight: '400px' }} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FindItemsPage;
