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

  return (
    <PageLayout title="Sports & Events">
      <div className="space-y-8" data-testid="activities-page">
        {/* Action Card */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-6 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center">
                <Activity className="text-[#8B7D5E] dark:text-[#C9B896]" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-lg">Things to Do</h2>
                <p className="text-[#7A7A7A] dark:text-[#908C84] text-sm">Family quality time ideas</p>
              </div>
            </div>
            <a href={activitiesDocUrl} target="_blank" rel="noopener noreferrer" data-testid="activities-doc-link"
              className="flex items-center gap-2 px-4 py-2 bg-[#8B7D5E] dark:bg-[#C9B896] text-white dark:text-[#0D0D0F] rounded-lg font-semibold text-sm hover:opacity-90 transition-all">
              <ExternalLink size={16} /><span className="hidden sm:inline">View All</span>
            </a>
          </div>
        </div>

        {/* Activity Categories */}
        <div className="grid grid-cols-2 gap-4">
          {activityCategories.map((category, index) => (
            <a key={index} href={activitiesDocUrl} target="_blank" rel="noopener noreferrer"
              className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 hover:border-[#C9B896] transition-all" data-testid={`activity-category-${index}`}>
              <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
                <category.icon className="text-[#7A7A7A] dark:text-[#6B6B70]" size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">{category.name}</h3>
              <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">{category.description}</p>
            </a>
          ))}
        </div>

        {/* Quick Ideas */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-6 transition-colors duration-300">
          <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] mb-4">Quick Ideas for Today</h3>
          <div className="space-y-3">
            {["Family movie night", "Backyard picnic", "Board game tournament", "Bake cookies together", "Nature walk"].map((idea, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F2EB] dark:bg-[#1A1A1E]">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-[#232328] flex items-center justify-center">
                  <span className="text-[#8B7D5E] dark:text-[#C9B896] text-sm">✦</span>
                </div>
                <span className="text-[#2D2D2D] dark:text-[#E8DCC4] text-sm">{idea}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ActivitiesPage;
