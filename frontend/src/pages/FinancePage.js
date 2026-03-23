import { PageLayout } from '../components/PageLayout';
import { Wallet, ExternalLink, Shield, TrendingUp, PiggyBank } from 'lucide-react';

const FinancePage = () => {
  const financeSheetUrl = "https://docs.google.com/spreadsheets/d/YOUR_FINANCE_SHEET_ID/edit";
  const embedUrl = "https://docs.google.com/spreadsheets/d/YOUR_FINANCE_SHEET_ID/preview";

  return (
    <PageLayout title="Family Budget">
      <div className="space-y-8" data-testid="finance-page">
        {/* Action Card */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-6 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center">
                <Wallet className="text-[#8B7D5E] dark:text-[#C9B896]" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-lg">Family Budget</h2>
                <p className="text-[#7A7A7A] dark:text-[#908C84] text-sm">Track spending & savings</p>
              </div>
            </div>
            <a href={financeSheetUrl} target="_blank" rel="noopener noreferrer" data-testid="finance-sheet-link"
              className="p-3 rounded-lg bg-[#8B7D5E] dark:bg-[#C9B896] text-white dark:text-[#0D0D0F] hover:opacity-90 transition-all">
              <ExternalLink size={18} />
            </a>
          </div>
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#E8E4DC] dark:border-[#232328] text-sm text-[#7A7A7A] dark:text-[#908C84]">
            <Shield size={16} className="text-[#8B7D5E] dark:text-[#C9B896]" />
            <span>Google Sign-in required to view</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <TrendingUp className="text-[#7A7A7A] dark:text-[#6B6B70]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">Monthly Budget</h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">Track expenses</p>
          </div>
          <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <PiggyBank className="text-[#8B7D5E] dark:text-[#C9B896]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">Savings Goals</h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">Family fund progress</p>
          </div>
        </div>

        {/* Embedded Sheet */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl overflow-hidden transition-colors duration-300">
          <div className="p-4 border-b border-[#E8E4DC] dark:border-[#232328] flex items-center justify-between">
            <span className="text-[#7A7A7A] dark:text-[#908C84] text-sm font-medium">Budget Dashboard</span>
            <a href={financeSheetUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#8B7D5E] dark:text-[#C9B896] font-semibold hover:underline">Open Sheet</a>
          </div>
          <div className="aspect-[4/3] w-full bg-[#F5F2EB] dark:bg-[#1A1A1E]">
            <iframe src={embedUrl} title="Family Finance Dashboard" className="w-full h-full border-0" data-testid="finance-iframe" style={{ minHeight: '400px' }} />
          </div>
        </div>

        {/* Privacy Note */}
        <div className="p-6 rounded-xl bg-[#F5F2EB] dark:bg-[#1A1A1E] border border-[#E8E4DC] dark:border-[#232328] transition-colors duration-300">
          <div className="flex items-start gap-3">
            <Shield className="text-[#8B7D5E] dark:text-[#C9B896] flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] mb-1">Privacy Protected</h3>
              <p className="text-[#5A5A5A] dark:text-[#908C84] text-sm">Financial data is only accessible to family members with Google account access.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FinancePage;
