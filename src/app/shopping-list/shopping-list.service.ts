import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
    selectedIngredient: Subject<Ingredient> = new Subject<Ingredient>();
    

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient) {
        if(ingredient) {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.next(this.ingredients.slice());
      }
    }   

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(ingredientId: number) {
        const ingredient = this.ingredients.find(ingr => ingr.id === ingredientId);
        const index = this.ingredients.indexOf(ingredient);
        if(index !== -1) {
            this.ingredients.splice(index, 1);
            this.ingredientsChanged.next(this.ingredients.slice());
        }
    }

    selectIngredient(ingredientId: number) {
        const ingredient = this.ingredients.find(ingredient => ingredient.id === ingredientId);
        this.selectedIngredient.next(ingredient);
    }
}