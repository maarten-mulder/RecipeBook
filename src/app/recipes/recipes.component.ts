import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log("recipe was selected. Now in recipes.component.ts")
    console.log(this.selectedRecipe.name)
  }

}
