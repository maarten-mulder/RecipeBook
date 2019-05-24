import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    highestId: number = 0;

    private recipes: Recipe[] = [
        new Recipe(0, 'Lasagne', 
                'A delicious Lasagne, with a lot of cheese.', 
                'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/ratatouille_lasagne_28209_16x9.jpg', 
                [new Ingredient('Lasagne sheets', 6), 
                 new Ingredient('Tomatosauce', 1), 
                 new Ingredient('Cheese', 9001)]
        )];

    getRecipes() {
        return this.recipes.slice();
    }

    addRecipe() {
        var newRecipe = { ...this.recipes[0] };
        this.highestId++;
        newRecipe.id = this.highestId;
        newRecipe.name += ' ' + (this.recipes.length + 1);
        this.recipes.push(newRecipe);
    }

    getRecipeById(id: number): Recipe {
        return this.recipes.find(r => r.id === id);
    }
}