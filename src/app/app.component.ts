import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
