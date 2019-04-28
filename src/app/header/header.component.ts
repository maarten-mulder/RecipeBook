import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showComponents: EventEmitter<{showRecipes: boolean, showShoppingList: boolean}> 
    = new EventEmitter<{showRecipes: boolean, showShoppingList: boolean}>();


  constructor() { }

  ngOnInit() {
  }

  showRecipes() {
    this.showComponents.emit({showRecipes: true, showShoppingList: false});
  }

  showShoppingList() {
    this.showComponents.emit({showRecipes: false, showShoppingList: true});
  }

}
