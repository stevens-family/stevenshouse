import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './Header';

export const PageLayout = ({ children, title, showBack = true }) => {
  return (
    <div className="min-h-screen bg-[#FDFCFA] dark:bg-[#0D0D0F] transition-colors duration-300">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 animate-fadeIn">
        {/* Page Header */}
        <div className="mb-8 md:mb-12">
          {showBack && (
            <Link 
              to="/" 
              data-testid="back-button"
              className="inline-flex items-center gap-2 text-[#7A7A7A] dark:text-[#908C84] hover:text-[#8B7D5E] dark:hover:text-[#C9B896] transition-colors mb-4"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
              <span className="text-sm font-medium">Back</span>
            </Link>
          )}
          
          <h1 
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#F0EDE6]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
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
