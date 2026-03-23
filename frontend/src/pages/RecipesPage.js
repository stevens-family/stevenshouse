import { PageLayout } from '../components/PageLayout';
import { CookingPot, ExternalLink, Clock, Users } from 'lucide-react';

const RecipesPage = () => {
  const recipesDocUrl = "https://docs.google.com/document/d/YOUR_RECIPES_DOC_ID/edit";

  const featuredRecipes = [
    { name: "Family Pasta Night", time: "30 min", servings: 6 },
    { name: "Sunday Roast", time: "2 hrs", servings: 8 },
    { name: "Quick Tacos", time: "20 min", servings: 4 },
    { name: "Homemade Pizza", time: "45 min", servings: 6 },
  ];

  return (
    <PageLayout title="Family Kitchen">
      <div className="space-y-8" data-testid="recipes-page">
        {/* Action Card */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-6 transition-colors duration-300">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center">
                <CookingPot className="text-[#8B7D5E] dark:text-[#C9B896]" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-lg">Family Favorites</h2>
                <p className="text-[#7A7A7A] dark:text-[#908C84] text-sm">Our recipe collection</p>
              </div>
            </div>
            <a href={recipesDocUrl} target="_blank" rel="noopener noreferrer" data-testid="recipes-doc-link"
              className="flex items-center gap-2 px-4 py-2 bg-[#8B7D5E] dark:bg-[#C9B896] text-white dark:text-[#0D0D0F] rounded-lg font-semibold text-sm hover:opacity-90 transition-all">
              <ExternalLink size={16} /><span>View All</span>
            </a>
          </div>
        </div>

        {/* Featured Recipes */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl overflow-hidden transition-colors duration-300">
          <div className="p-4 border-b border-[#E8E4DC] dark:border-[#232328]">
            <span className="text-[#7A7A7A] dark:text-[#908C84] text-sm font-medium">Featured Recipes</span>
          </div>
          <div className="divide-y divide-[#E8E4DC] dark:divide-[#232328]">
            {featuredRecipes.map((recipe, index) => (
              <a key={index} href={recipesDocUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-4 hover:bg-[#F5F2EB] dark:hover:bg-[#1A1A1E] transition-all" data-testid={`recipe-${index}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center">
                    <CookingPot className="text-[#7A7A7A] dark:text-[#6B6B70]" size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4]">{recipe.name}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#9A9A9A] dark:text-[#6B6B70]">
                  <span className="flex items-center gap-1"><Clock size={14} />{recipe.time}</span>
                  <span className="flex items-center gap-1"><Users size={14} />{recipe.servings}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RecipesPage;
