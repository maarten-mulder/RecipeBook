import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/ratatouille_lasagne_28209_16x9.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}