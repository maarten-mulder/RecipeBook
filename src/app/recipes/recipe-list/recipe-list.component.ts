import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/ratatouille_lasagne_28209_16x9.jpg')
  ];
  @Output() recipeEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  addRecipe() {
    var newRecipe = { ...this.recipes[0] };
    newRecipe.name += ' ' + (this.recipes.length + 1);
    this.recipes.push(newRecipe);
  }

  selectRecipe(recipe: Recipe) {
    this.recipeEvent.emit(recipe);
  }
}
