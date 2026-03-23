import { PageLayout } from '../components/PageLayout';
import { Activity, ExternalLink, Gamepad2, TreePine, Palette, BookOpen } from 'lucide-react';

const ActivitiesPage = () => {
  const activitiesDocUrl = "https://docs.google.com/document/d/YOUR_ACTIVITIES_DOC_ID/edit";

  const activityCategories = [
    { 
      icon: Gamepad2, 
      name: "Indoor Fun", 
      description: "Board games, movies, crafts",
      color: "bg-primary/20",
      iconColor: "text-primary"
    },
    { 
      icon: TreePine, 
      name: "Outdoor Adventures", 
      description: "Parks, hikes, sports",
      color: "bg-secondary/20",
      iconColor: "text-secondary"
    },
    { 
      icon: Palette, 
      name: "Creative Time", 
      description: "Art projects, music, cooking",
      color: "bg-accent/30",
      iconColor: "text-accent"
    },
    { 
      icon: BookOpen, 
      name: "Learning", 
      description: "Educational activities, museums",
      color: "bg-primary/10",
      iconColor: "text-primary"
    },
  ];

  return (
    <PageLayout title="Family Activities">
      <div className="space-y-6" data-testid="activities-page">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-surface-light dark:bg-surface-dark shadow-sm">
              <Activity className="text-primary" size={24} />
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary dark:text-dark-primary">
                Things to Do
              </h2>
              <p className="text-sm text-text-secondary dark:text-dark-secondary">
                Ideas for family quality time
              </p>
            </div>
          </div>
          
          <a
            href={activitiesDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="activities-doc-link"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={16} />
            View Activity List
          </a>
        </div>

        {/* Activity Categories */}
        <div className="grid grid-cols-2 gap-4">
          {activityCategories.map((category, index) => (
            <a
              key={index}
              href={activitiesDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${category.color} rounded-3xl p-5 hover:scale-[1.02] transition-all`}
              data-testid={`activity-category-${index}`}
            >
              <div className="p-2 rounded-xl bg-surface-light/50 dark:bg-surface-dark/50 w-fit mb-3">
                <category.icon className={category.iconColor} size={20} />
              </div>
              <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
                {category.name}
              </h3>
              <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
                {category.description}
              </p>
            </a>
          ))}
        </div>

        {/* Quick Ideas */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-4">
            Quick Ideas for Today
          </h3>
          
          <div className="space-y-3">
            {["Family movie night", "Backyard picnic", "Board game tournament", "Bake cookies together", "Nature walk"].map((idea, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-2xl bg-background-light dark:bg-background-dark"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-sm">✦</span>
                </div>
                <span className="font-body text-text-primary dark:text-dark-primary">
                  {idea}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend Planning */}
        <div className="bg-accent/20 dark:bg-accent/30 rounded-3xl p-6">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-2">
            Weekend Planning
          </h3>
          <p className="text-sm text-text-secondary dark:text-dark-secondary mb-4">
            Check our shared document for upcoming weekend plans and activity ideas from the whole family.
          </p>
          <a
            href={activitiesDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="weekend-plans-link"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
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
