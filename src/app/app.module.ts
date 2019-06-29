import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component'

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';


import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'

import { DropDownDerective } from './shared/dropDown.directive';

import { RecipeService } from './shared/services/recipe.service';
import { ShopListService } from './shared/services/shoplist.service';
import { RecipeMessageComponent } from './recipes/recipe-message/recipe-message.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    ShoppingEditComponent,
    DropDownDerective,
    RecipeMessageComponent,
    RecipeEditComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecipeService , ShopListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
