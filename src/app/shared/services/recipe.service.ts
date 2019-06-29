import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from '../models/recipe.model';
import { ShopListService } from './shoplist.service';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes :Recipe[] = [
        new Recipe('A test Recipe',
        'Simply test',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTo0oP9y1yGIemsKrCUkhpnue0dc_uoQ-SU6oWyWxj8c-KkM3',
         1 ,
         [ new Ingredient('Meat', 2) , 
           new Ingredient( 'French Fries', 20)
        ]),

        new Recipe( 'second Test recipe' 
        , ' some description' ,
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTo0oP9y1yGIemsKrCUkhpnue0dc_uoQ-SU6oWyWxj8c-KkM3'
        ,
         2,
        [
           new Ingredient('Buns', 2) , 
           new Ingredient( 'Meat', 1)           
        ])
      ];

      constructor(private shopService : ShopListService){}

    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList( ingredients:Ingredient[]){
        this.shopService.addIngredients(ingredients);
    }

    getRecipeById(id :number){
        
      const recipe =  this.recipes.find( (recipe:Recipe ) =>{
            if(recipe.id === id) {
                return true;
            }
        });
        return recipe;
    }
}