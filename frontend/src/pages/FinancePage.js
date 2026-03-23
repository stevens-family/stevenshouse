import { PageLayout } from '../components/PageLayout';
import { Wallet, ExternalLink, Shield, TrendingUp, PiggyBank } from 'lucide-react';

const FinancePage = () => {
  const financeSheetUrl = "https://docs.google.com/spreadsheets/d/YOUR_FINANCE_SHEET_ID/edit";
  const embedUrl = "https://docs.google.com/spreadsheets/d/YOUR_FINANCE_SHEET_ID/preview";

  return (
    <PageLayout title="Family Legacy">
      <div className="space-y-8" data-testid="finance-page">
        {/* Action Card */}
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-dim flex items-center justify-center">
                <Wallet className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-primary text-lg">
                  Family Budget
                </h2>
                <p className="text-secondary text-sm">
                  Track spending & savings
                </p>
              </div>
            </div>
            
            <a
              href={financeSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="finance-sheet-link"
              className="p-3 rounded-lg bg-gold text-[var(--bg-primary)] hover:opacity-90 transition-luxury"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[var(--divider)] text-sm text-secondary">
            <Shield size={16} className="text-gold" />
            <span>Google Sign-in required to view</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="luxury-card p-5">
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-4">
              <TrendingUp className="text-secondary" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              Monthly Budget
            </h3>
            <p className="text-secondary text-xs">
              Track expenses
            </p>
          </div>

          <div className="luxury-card p-5">
            <div className="w-10 h-10 rounded-xl bg-gold-dim flex items-center justify-center mb-4">
              <PiggyBank className="text-gold" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              Savings Goals
            </h3>
            <p className="text-secondary text-xs">
              Family fund progress
            </p>
          </div>
        </div>

        {/* Embedded Sheet */}
        <div className="luxury-card overflow-hidden">
          <div className="p-4 border-b border-[var(--divider)] flex items-center justify-between">
            <span className="text-secondary text-sm font-medium">Budget Dashboard</span>
            <a
              href={financeSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gold font-semibold hover:underline"
            >
              Open Sheet
            </a>
          </div>
          <div className="aspect-[4/3] w-full bg-secondary">
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
        <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <div className="flex items-start gap-3">
            <Shield className="text-gold flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-heading font-bold text-primary mb-1">
                Privacy Protected
              </h3>
              <p className="text-secondary text-sm">
                Financial data is only accessible to family members with Google account access. 
                Sign in to view budget details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FinancePage;
