import { PageLayout } from '../components/PageLayout';
import { Calendar, ExternalLink } from 'lucide-react';

const CalendarPage = () => {
  const calendarEmbedUrl = "https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York";
  const calendarLinkUrl = "https://calendar.google.com/calendar/u/0/r";

  return (
    <PageLayout title="Family Schedule">
      <div className="space-y-8" data-testid="calendar-page">
        {/* Action Card */}
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center">
                <Calendar className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-primary text-lg">
                  Family Events
                </h2>
                <p className="text-secondary text-sm">
                  Keep everyone in sync
                </p>
              </div>
            </div>
            
            <a
              href={calendarLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="calendar-external-link"
              className="flex items-center gap-2 px-4 py-2 bg-gold text-[var(--bg-primary)] rounded-lg font-semibold text-sm hover:opacity-90 transition-luxury"
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">Open Calendar</span>
            </a>
          </div>
        </div>

        {/* Calendar Embed */}
        <div className="luxury-card overflow-hidden">
          <div className="p-4 border-b border-[var(--divider)]">
            <span className="text-secondary text-sm font-medium">Calendar View</span>
          </div>
          <div className="aspect-video md:aspect-[16/10] w-full bg-secondary">
            <iframe
              src={calendarEmbedUrl}
              title="Family Calendar"
              className="w-full h-full border-0"
              data-testid="calendar-iframe"
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <h3 className="font-heading font-bold text-primary mb-3">Quick Tips</h3>
          <ul className="text-secondary text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>View upcoming family events and appointments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>Click "Open Calendar" to add new events</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>Sync with your personal calendar for reminders</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default CalendarPage;
