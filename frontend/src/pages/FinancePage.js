import { PageLayout } from '../components/PageLayout';
import { Wallet, ExternalLink, Shield, TrendingUp, PiggyBank } from 'lucide-react';

const FinancePage = () => {
  const financeSheetUrl = "https://docs.google.com/spreadsheets/d/YOUR_FINANCE_SHEET_ID/edit";
  const embedUrl = "https://docs.google.com/spreadsheets/d/YOUR_FINANCE_SHEET_ID/preview";

  return (
    <PageLayout title="Family Finance">
      <div className="space-y-6" data-testid="finance-page">
        {/* Header Card */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-accent/30">
                <Wallet className="text-accent" size={24} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-text-primary dark:text-dark-primary">
                  Family Budget
                </h2>
                <p className="text-sm text-text-secondary dark:text-dark-secondary">
                  Track spending & savings
                </p>
              </div>
            </div>
            
            <a
              href={financeSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="finance-sheet-link"
              className="p-3 rounded-full bg-primary text-white hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-dark-secondary">
            <Shield size={16} className="text-secondary" />
            <span>Google Sign-in required to view</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary/20 dark:bg-secondary/30 rounded-3xl p-5">
            <div className="p-2 rounded-xl bg-secondary/30 w-fit mb-3">
              <TrendingUp className="text-secondary" size={20} />
            </div>
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Monthly Budget
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Track expenses
            </p>
          </div>

          <div className="bg-accent/20 dark:bg-accent/30 rounded-3xl p-5">
            <div className="p-2 rounded-xl bg-accent/40 w-fit mb-3">
              <PiggyBank className="text-accent" size={20} />
            </div>
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Savings Goals
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Family fund progress
            </p>
          </div>
        </div>

        {/* Embedded Sheet */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
            <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary">
              Budget Dashboard
            </h3>
            <a
              href={financeSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary font-bold hover:underline"
            >
              Open in Google Sheets
            </a>
          </div>
          <div className="aspect-[4/3] w-full bg-background-light dark:bg-background-dark">
            <iframe
              src={embedUrl}
              title="Family Finance Dashboard"
              className="w-full h-full border-0"
              data-testid="finance-iframe"
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>

        {/* Privacy Note */}
        <div className="bg-primary/10 dark:bg-primary/20 rounded-3xl p-6">
          <div className="flex items-start gap-3">
            <Shield className="text-primary flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-1">
                Privacy Protected
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-secondary">
                Financial data is only accessible to family members with Google account access. 
                Sign in to your Google account to view the budget details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FinancePage;
