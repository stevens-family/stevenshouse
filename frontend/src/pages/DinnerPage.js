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
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-6 transition-colors duration-300">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center">
                <UtensilsCrossed className="text-[#8B7D5E] dark:text-[#C9B896]" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-lg">Meal Planning</h2>
                <p className="text-[#7A7A7A] dark:text-[#908C84] text-sm">What's cooking tonight?</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <a href={dinnerDocUrl} target="_blank" rel="noopener noreferrer" data-testid="dinner-doc-link"
                className="flex items-center gap-2 px-4 py-2 bg-[#8B7D5E] dark:bg-[#C9B896] text-white dark:text-[#0D0D0F] rounded-lg font-semibold text-sm hover:opacity-90 transition-all">
                <ExternalLink size={16} /><span className="hidden sm:inline">View Plan</span>
              </a>
              <a href={dinnerSheetUrl} target="_blank" rel="noopener noreferrer" data-testid="dinner-sheet-link"
                className="flex items-center gap-2 px-4 py-2 bg-[#F5F2EB] dark:bg-[#1F1F23] text-[#5A5A5A] dark:text-[#908C84] rounded-lg font-semibold text-sm hover:opacity-90 transition-all">
                <Clock size={16} /><span className="hidden sm:inline">Weekly</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Document */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl overflow-hidden transition-colors duration-300">
          <div className="p-4 border-b border-[#E8E4DC] dark:border-[#232328]">
            <span className="text-[#7A7A7A] dark:text-[#908C84] text-sm font-medium">This Week's Menu</span>
          </div>
          <div className="aspect-[4/3] w-full bg-[#F5F2EB] dark:bg-[#1A1A1E]">
            <iframe src={embedUrl} title="Dinner Menu" className="w-full h-full border-0" data-testid="dinner-iframe" style={{ minHeight: '400px' }} />
          </div>
        </div>

        {/* Tips */}
        <div className="p-6 rounded-xl bg-[#F5F2EB] dark:bg-[#1A1A1E] border border-[#E8E4DC] dark:border-[#232328] transition-colors duration-300">
          <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] mb-3">Meal Planning Tips</h3>
          <ul className="text-[#5A5A5A] dark:text-[#908C84] text-sm space-y-2">
            <li className="flex items-start gap-2"><span className="text-[#8B7D5E] dark:text-[#C9B896]">•</span><span>Check the meal plan each morning</span></li>
            <li className="flex items-start gap-2"><span className="text-[#8B7D5E] dark:text-[#C9B896]">•</span><span>Anyone can suggest changes in the shared document</span></li>
            <li className="flex items-start gap-2"><span className="text-[#8B7D5E] dark:text-[#C9B896]">•</span><span>Link your favorite recipes from the Recipes page</span></li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default DinnerPage;
