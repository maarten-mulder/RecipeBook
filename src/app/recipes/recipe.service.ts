import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

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
}