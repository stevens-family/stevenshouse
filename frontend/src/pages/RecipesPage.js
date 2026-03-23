import { PageLayout } from '../components/PageLayout';
import { CookingPot, ExternalLink, Heart, Clock, Users } from 'lucide-react';

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
    <PageLayout title="Family Recipes">
      <div className="space-y-6" data-testid="recipes-page">
        {/* Hero Card */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-sm"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur">
                <CookingPot size={24} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl">Family Favorites</h2>
                <p className="text-sm text-white/80">Our collection of loved recipes</p>
              </div>
            </div>
            
            <div className="flex gap-3 flex-wrap">
              <a
                href={recipesDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="recipes-doc-link"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-text-primary rounded-full font-bold text-sm hover:bg-white/90 transition-colors"
              >
                <ExternalLink size={16} />
                View All Recipes
              </a>
              <a
                href={recipesSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="recipes-sheet-link"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 text-white rounded-full font-bold text-sm hover:bg-white/30 transition-colors backdrop-blur"
              >
                <Heart size={16} />
                Recipe Index
              </a>
            </div>
          </div>
        </div>

        {/* Featured Recipes */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-4">
            Family Favorites
          </h3>
          
          <div className="space-y-3">
            {featuredRecipes.map((recipe, index) => (
              <a
                key={index}
                href={recipesDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-background-light dark:bg-background-dark hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                data-testid={`recipe-${index}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <CookingPot className="text-primary" size={18} />
                  </div>
                  <span className="font-heading font-bold text-text-primary dark:text-dark-primary">
                    {recipe.name}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-secondary dark:text-dark-secondary">
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
          <div className="bg-primary/10 dark:bg-primary/20 rounded-3xl p-5">
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Quick Meals
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Under 30 minutes
            </p>
          </div>
          <div className="bg-secondary/20 dark:bg-secondary/30 rounded-3xl p-5">
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Kid Approved
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Family tested favorites
            </p>
          </div>
          <div className="bg-accent/20 dark:bg-accent/30 rounded-3xl p-5">
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Special Occasions
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Holidays & celebrations
            </p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-5 shadow-sm">
            <h3 className="font-heading font-bold text-sm text-text-primary dark:text-dark-primary">
              Grandma's Recipes
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-secondary mt-1">
              Passed down treasures
            </p>
          </div>
        </div>

        {/* Add Recipe CTA */}
        <div className="bg-accent/20 dark:bg-accent/30 rounded-3xl p-6 text-center">
          <h3 className="font-heading font-bold text-text-primary dark:text-dark-primary mb-2">
            Have a Recipe to Share?
          </h3>
          <p className="text-sm text-text-secondary dark:text-dark-secondary mb-4">
            Add your favorite recipes to our family collection
          </p>
          <a
            href={recipesDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="add-recipe-link"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={16} />
            Add a Recipe
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default RecipesPage;
