import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

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
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        if(id && id.length > 0 && !isNaN(id)) {
          this.recipe = this.recipeService.getRecipeById(+id);
          this.editMode = true;
          this.initializeForm();
        }
      }
    );
  }

  private initializeForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let ingredientsFormGroup = new FormArray(null);

    if(this.editMode && this.recipe) {
      let rec = this.recipe;
      recipeName = rec.name;
      recipeImagePath = rec.imagePath;
      recipeDescription = rec.description;

    }


    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath), 
      'description': new FormControl(recipeDescription),
      });
    
  }


}
