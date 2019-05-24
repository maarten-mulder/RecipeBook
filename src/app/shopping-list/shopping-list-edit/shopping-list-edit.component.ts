import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('shoppingListForm') shoppingListForm: NgForm;
  selectedIngredientSubscription: Subscription;
  editMode: boolean = false;
  selectedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.selectedIngredientSubscription = this.shoppingListService.selectedIngredient.subscribe(
      (ingredient: Ingredient) => {
        this.toggleEditMode(ingredient);
        this.shoppingListForm.setValue({
          'name': ingredient.name,
          'amount': ingredient.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.selectedIngredientSubscription.unsubscribe();
  }

  onSubmit(shoppingListForm: NgForm) {
    if(this.editMode && this.selectedIngredient) {
      this.shoppingListService.deleteIngredient(this.selectedIngredient.id);
      this.toggleEditMode();
    }
    const ingredient: Ingredient = new Ingredient(shoppingListForm.value.name, +shoppingListForm.value.amount)
    this.shoppingListService.addIngredient(ingredient);
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.selectedIngredient.id);
    this.toggleEditMode();
  }

  private toggleEditMode(ingredient?: Ingredient) {
    if(ingredient) {
      this.editMode = true;
      this.selectedIngredient = ingredient;
    }
    else if(!ingredient) {
      this.editMode = false;
      this.selectedIngredient = null;
    }
  }

}
