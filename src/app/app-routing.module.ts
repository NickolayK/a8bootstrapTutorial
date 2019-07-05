import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeMessageComponent } from './recipes/recipe-message/recipe-message.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path : 'recipes' , component : RecipesComponent , children : [

    { path : 'new' , component : RecipeEditComponent , pathMatch : 'full'},
    { path : ':id' ,  component : RecipeDetailComponent},
    { path : '' , component : RecipeMessageComponent , pathMatch : 'full'},
    { path : ':id/edit' , component : RecipeEditComponent},
    

  ]},
  { path : 'shopping-list' , component : ShoppingListComponent , children:[
    
  ]},
  {path : '' ,  redirectTo : '/recipes' ,pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
