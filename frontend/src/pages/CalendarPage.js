import { PageLayout } from '../components/PageLayout';
import { Calendar, ExternalLink } from 'lucide-react';

const CalendarPage = () => {
  const calendarEmbedUrl = "https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York";
  const calendarLinkUrl = "https://calendar.google.com/calendar/u/0/r";

  return (
    <PageLayout title="Family Calendar">
      <div className="space-y-6" data-testid="calendar-page">
        {/* Info Card */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-secondary/20">
              <Calendar className="text-secondary" size={24} />
            </div>
            <div>
              <h2 className="font-heading font-bold text-text-primary dark:text-dark-primary">
                Family Events
              </h2>
              <p className="text-sm text-text-secondary dark:text-dark-secondary">
                Stay organized together
              </p>
            </div>
          </div>
          
          <a
            href={calendarLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="calendar-external-link"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={16} />
            Open in Google Calendar
          </a>
        </div>

        {/* Calendar Embed */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl overflow-hidden shadow-sm">
          <div className="aspect-video md:aspect-[4/3] w-full">
            <iframe
              src={calendarEmbedUrl}
              title="Stevens Family Calendar"
              className="w-full h-full border-0"
              data-testid="calendar-iframe"
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-accent/20 dark:bg-accent/30 rounded-3xl p-6">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-2">
            How to Use
          </h3>
          <ul className="text-sm text-text-secondary dark:text-dark-secondary space-y-2">
            <li>View upcoming family events and appointments</li>
            <li>Click "Open in Google Calendar" to add new events</li>
            <li>Sync with your personal calendar for reminders</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default CalendarPage;
