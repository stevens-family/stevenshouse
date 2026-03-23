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
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-8 text-center transition-colors duration-300">
          <div className="w-16 h-16 rounded-2xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mx-auto mb-6">
            <Shirt className="text-[#8B7D5E] dark:text-[#C9B896]" size={32} strokeWidth={1.5} />
          </div>
          <h2 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-2xl mb-2">Outfit Planner</h2>
          <p className="text-[#7A7A7A] dark:text-[#908C84] mb-6 max-w-md mx-auto">Use Acloset to organize your wardrobe and plan outfits for the whole family.</p>
          <a href={aclosetUrl} target="_blank" rel="noopener noreferrer" data-testid="acloset-website-link"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B7D5E] dark:bg-[#C9B896] text-white dark:text-[#0D0D0F] rounded-lg font-bold hover:opacity-90 transition-all">
            <ExternalLink size={18} />Visit Acloset
          </a>
        </div>

        {/* App Download Links */}
        <div className="grid grid-cols-2 gap-4">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 hover:border-[#C9B896] transition-all" data-testid="acloset-appstore-link">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <Smartphone className="text-[#7A7A7A] dark:text-[#6B6B70]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">App Store</h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">Download for iPhone</p>
          </a>
          <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 hover:border-[#C9B896] transition-all" data-testid="acloset-playstore-link">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <Smartphone className="text-[#7A7A7A] dark:text-[#6B6B70]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">Play Store</h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">Download for Android</p>
          </a>
        </div>

        {/* Features */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-6 transition-colors duration-300">
          <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] mb-4">What is Acloset?</h3>
          <ul className="text-[#5A5A5A] dark:text-[#908C84] text-sm space-y-3">
            {['Catalog all your clothes with photos', 'Create and save outfit combinations', 'Plan outfits for upcoming events', 'Track what you wear and when'].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><span className="text-[#8B7D5E] dark:text-[#C9B896]">✓</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClosetPage;
