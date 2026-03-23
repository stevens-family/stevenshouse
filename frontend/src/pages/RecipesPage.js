import { PageLayout } from '../components/PageLayout';
import { CookingPot, ExternalLink, Clock, Users } from 'lucide-react';

const RecipesPage = () => {
  const recipesDocUrl = "https://docs.google.com/document/d/YOUR_RECIPES_DOC_ID/edit";
  const recipesSheetUrl = "https://docs.google.com/spreadsheets/d/YOUR_RECIPES_SHEET_ID/edit";

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
        <div className="luxury-card p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-dim flex items-center justify-center">
                <CookingPot className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-primary text-lg">
                  Family Favorites
                </h2>
                <p className="text-secondary text-sm">
                  Our recipe collection
                </p>
              </div>
            </div>
            
            <a
              href={recipesDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="recipes-doc-link"
              className="flex items-center gap-2 px-4 py-2 bg-gold text-[var(--bg-primary)] rounded-lg font-semibold text-sm hover:opacity-90 transition-luxury"
            >
              <ExternalLink size={16} />
              <span>View All</span>
            </a>
          </div>
        </div>

        {/* Featured Recipes */}
        <div className="luxury-card overflow-hidden">
          <div className="p-4 border-b border-[var(--divider)]">
            <span className="text-secondary text-sm font-medium">Featured Recipes</span>
          </div>
          
          <div className="divide-y divide-[var(--divider)]">
            {featuredRecipes.map((recipe, index) => (
              <a
                key={index}
                href={recipesDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 hover:bg-[var(--bg-secondary)] transition-luxury"
                data-testid={`recipe-${index}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center">
                    <CookingPot className="text-secondary" size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-heading font-bold text-primary">
                    {recipe.name}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-secondary">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {recipe.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} />
                    {recipe.servings}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: 'Quick Meals', subtitle: 'Under 30 minutes' },
            { title: 'Kid Approved', subtitle: 'Family tested' },
            { title: 'Special Occasions', subtitle: 'Holidays & celebrations' },
            { title: "Grandma's Recipes", subtitle: 'Passed down treasures' },
          ].map((category, index) => (
            <a
              key={index}
              href={recipesDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-card p-5"
            >
              <h3 className="font-heading font-bold text-primary text-sm mb-1">
                {category.title}
              </h3>
              <p className="text-secondary text-xs">
                {category.subtitle}
              </p>
            </a>
          ))}
        </div>

        {/* Add Recipe CTA */}
        <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-center">
          <h3 className="font-heading font-bold text-primary mb-2">
            Have a Recipe to Share?
          </h3>
          <p className="text-secondary text-sm mb-4">
            Add your favorite recipes to our family collection
          </p>
          <a
            href={recipesDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="add-recipe-link"
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
          >
            <ExternalLink size={14} />
            Add a Recipe
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default RecipesPage;
