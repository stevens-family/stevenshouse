import { PageLayout } from '../components/PageLayout';
import { Calendar, ExternalLink } from 'lucide-react';

const CalendarPage = () => {
  const calendarEmbedUrl = "https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York";
  const calendarLinkUrl = "https://calendar.google.com/calendar/u/0/r";

  return (
    <PageLayout title="Family Schedule">
      <div className="space-y-8" data-testid="calendar-page">
        {/* Action Card */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-6 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center">
                <Calendar className="text-[#8B7D5E] dark:text-[#C9B896]" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-lg">
                  Family Events
                </h2>
                <p className="text-[#7A7A7A] dark:text-[#908C84] text-sm">
                  Keep everyone in sync
                </p>
              </div>
            </div>
            
            <a
              href={calendarLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="calendar-external-link"
              className="flex items-center gap-2 px-4 py-2 bg-[#8B7D5E] dark:bg-[#C9B896] text-white dark:text-[#0D0D0F] rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">Open Calendar</span>
            </a>
          </div>
        </div>

        {/* Calendar Embed */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl overflow-hidden transition-colors duration-300">
          <div className="p-4 border-b border-[#E8E4DC] dark:border-[#232328]">
            <span className="text-[#7A7A7A] dark:text-[#908C84] text-sm font-medium">Calendar View</span>
          </div>
          <div className="aspect-video md:aspect-[16/10] w-full bg-[#F5F2EB] dark:bg-[#1A1A1E]">
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
        <div className="p-6 rounded-xl bg-[#F5F2EB] dark:bg-[#1A1A1E] border border-[#E8E4DC] dark:border-[#232328] transition-colors duration-300">
          <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] mb-3">Quick Tips</h3>
          <ul className="text-[#5A5A5A] dark:text-[#908C84] text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#8B7D5E] dark:text-[#C9B896]">•</span>
              <span>View upcoming family events and appointments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B7D5E] dark:text-[#C9B896]">•</span>
              <span>Click "Open Calendar" to add new events</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B7D5E] dark:text-[#C9B896]">•</span>
              <span>Sync with your personal calendar for reminders</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default CalendarPage;
