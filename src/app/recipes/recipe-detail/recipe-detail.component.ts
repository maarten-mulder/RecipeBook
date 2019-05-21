import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Route, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (p) => {
        const id = +p['id'];
        const recipe = this.recipeService.getRecipeById(id);
        if(!this.recipe) {
          this.recipe = recipe;
        }
      }
    )
  }

  toShoppingList() {
    const ingredients = this.recipe.ingredients;
    this.shoppingListService.addIngredients(ingredients);
  }

}
