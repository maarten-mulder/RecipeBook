import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        if (id && id.length > 0 && !isNaN(id)) {
          this.recipe = this.recipeService.getRecipeById(+id);
          this.editMode = true;
        }
        this.initializeForm();
      }
    );
  }


  private initializeForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let ingredientsFormGroup = new FormArray([]);

    if (this.editMode && this.recipe) {
      const rec = this.recipe;
      recipeName = rec.name;
      recipeImagePath = rec.imagePath;
      recipeDescription = rec.description;
      if (rec['ingredients']) {
        for (let ingredient of rec['ingredients']) {
          ingredientsFormGroup.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': ingredientsFormGroup
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  // onDeleteIngredient(ingredientControl: FormGroup) {
  //   const name = ingredientControl.get('name').value;
  //   const amount = +ingredientControl.get('amount').value;
  //   const ingredients = this.recipe.ingredients;

  //   const indexToRemove = ingredients.indexOf(ingredients.find(ing => ing.name === name && ing.amount === amount));
  //   ingredients.splice(indexToRemove);
  // }

  onSubmit() {
    if (this.editMode) {
      this.convertFormToRecipe(this.recipe);
      this.recipeService.updateRecipe(this.recipe);
    }
    else {
      this.convertFormToRecipe();
      this.recipeService.addRecipe(this.recipe);
      console.log(this.recipe);
    }
    this.router.navigate(['../'],  { relativeTo: this.route });
  }

  onDeleteIngredient(ingredientContrl: FormGroup) {

  }

  getIngredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  convertFormToRecipe(recipe?: Recipe) {
    const form = this.recipeForm;

    const name = form.get('name').value;
    const imagePath = form.get('imagePath').value;
    const description = form.get('description').value;

    const ingredients: Ingredient[] = [];

    for (let ingredient of this.getIngredientControls()) {
      ingredients.push(
        new Ingredient(ingredient.get('name').value, +ingredient.get('amount').value)
      );
    }

    if (!recipe) {
      this.recipe = new Recipe(null, null, null, []);
    }

    this.recipe.name = name;
    this.recipe.imagePath = imagePath;
    this.recipe.description = description;
    this.recipe.ingredients = ingredients;
  }
}
