import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
    recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Lasagne', 
                'A delicious Lasagne, with a lot of cheese.', 
                'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/ratatouille_lasagne_28209_16x9.jpg', 
                [new Ingredient('Lasagne sheets', 6), 
                 new Ingredient('Tomatosauce', 1), 
                 new Ingredient('Cheese', 9001)]
        )];

    getRecipes() {
        return this.recipes.slice();
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.getRecipes());
    }

    deleteRecipe(recipe: Recipe) {
        const index = this.recipes.indexOf(recipe);
        this.recipes.splice(index);
        this.recipesChanged.next(this.getRecipes());
    }

    updateRecipe(recipe: Recipe) {
        const index = this.recipes.indexOf(this.recipes.find(rec => rec.id === recipe.id));
        this.recipes[index] = recipe;
    }

    getRecipeById(id: number): Recipe {
        return this.recipes.find(r => r.id === id);
    }
}