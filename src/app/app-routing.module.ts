import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: NoRecipeSelectedComponent, pathMatch: 'full'},
        { path: 'edit', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent },
    ] },
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: '**', redirectTo: '/shopping-list'}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}