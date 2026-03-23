import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';

export const PageLayout = ({ children, title, showBack = true }) => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 animate-fadeIn">
        {/* Page Header */}
        <div className="mb-8 md:mb-12">
          {showBack && (
            <Link 
              to="/" 
              data-testid="back-button"
              className="inline-flex items-center gap-2 text-secondary hover:text-gold transition-luxury mb-4"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
              <span className="text-sm font-medium">Back</span>
            </Link>
          )}
          
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary tracking-tight gold-underline inline-block">
            {title}
          </h1>
        </div>

        {/* Content */}
        <div>
          {children}
        </div>
      </main>
    </div>
  );
};
