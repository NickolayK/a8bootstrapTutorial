import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeMessageComponent } from './recipes/recipe-message/recipe-message.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolver } from './recipes/recipe-start/recipe-resolver.service';

const routes: Routes = [
  { path : 'recipes' , component : RecipesComponent , children : [

    { path : '' , component : RecipeMessageComponent , pathMatch : 'full'},
    { path : 'new' , component : RecipeEditComponent , pathMatch : 'full'},
    { path : ':id' ,  component : RecipeDetailComponent , resolve : [RecipeResolver]},

    { path : ':id/edit' , component : RecipeEditComponent , resolve : [RecipeResolver]},
    

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
