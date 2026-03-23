import { PageLayout } from '../components/PageLayout';
import { Activity, ExternalLink, Gamepad2, TreePine, Palette, BookOpen } from 'lucide-react';

const ActivitiesPage = () => {
  const activitiesDocUrl = "https://docs.google.com/document/d/YOUR_ACTIVITIES_DOC_ID/edit";

  const activityCategories = [
    { icon: Gamepad2, name: "Indoor Fun", description: "Board games, movies, crafts" },
    { icon: TreePine, name: "Outdoor Adventures", description: "Parks, hikes, sports" },
    { icon: Palette, name: "Creative Time", description: "Art projects, music" },
    { icon: BookOpen, name: "Learning", description: "Educational activities" },
  ];

  const quickIdeas = [
    "Family movie night",
    "Backyard picnic",
    "Board game tournament",
    "Bake cookies together",
    "Nature walk"
  ];

  return (
    <PageLayout title="Sports & Events">
      <div className="space-y-8" data-testid="activities-page">
        {/* Action Card */}
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-dim flex items-center justify-center">
                <Activity className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-primary text-lg">
                  Things to Do
                </h2>
                <p className="text-secondary text-sm">
                  Family quality time ideas
                </p>
              </div>
            </div>
            
            <a
              href={activitiesDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="activities-doc-link"
              className="flex items-center gap-2 px-4 py-2 bg-gold text-[var(--bg-primary)] rounded-lg font-semibold text-sm hover:opacity-90 transition-luxury"
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">View All</span>
            </a>
          </div>
        </div>

        {/* Activity Categories */}
        <div className="grid grid-cols-2 gap-4">
          {activityCategories.map((category, index) => (
            <a
              key={index}
              href={activitiesDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-card p-5"
              data-testid={`activity-category-${index}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-4">
                <category.icon className="text-secondary" size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-primary text-sm mb-1">
                {category.name}
              </h3>
              <p className="text-secondary text-xs">
                {category.description}
              </p>
            </a>
          ))}
        </div>

        {/* Quick Ideas */}
        <div className="luxury-card p-6">
          <h3 className="font-heading font-bold text-primary mb-4">Quick Ideas for Today</h3>
          <div className="space-y-3">
            {quickIdeas.map((idea, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)]"
              >
                <div className="w-8 h-8 rounded-full bg-gold-dim flex items-center justify-center">
                  <span className="text-gold text-sm">✦</span>
                </div>
                <span className="text-primary text-sm">{idea}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend Planning */}
        <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <h3 className="font-heading font-bold text-primary mb-2">
            Weekend Planning
          </h3>
          <p className="text-secondary text-sm mb-4">
            Check our shared document for upcoming weekend plans and activity ideas.
          </p>
          <a
            href={activitiesDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="weekend-plans-link"
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
          >
            <ExternalLink size={14} />
            Plan This Weekend
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default ActivitiesPage;
