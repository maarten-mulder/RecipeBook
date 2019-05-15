import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'recipe-book';
  showRecipes: boolean = true;
  showShoppingList: boolean = false;

  updateShowComponentProperties(data) {
    this.showRecipes = data.showRecipes;
    this.showShoppingList = data.showShoppingList;
  }
}
