
import { Recipe } from '../models/recipe.model';
import { ShopListService } from './shoplist.service';
import { Ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

    private recipes : Recipe[] = [];
    // private recipes :Recipe[] = [
    //     new Recipe('A test Recipe',
    //     'Simply test',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTo0oP9y1yGIemsKrCUkhpnue0dc_uoQ-SU6oWyWxj8c-KkM3',
    //      1 ,
    //      [ new Ingredient('Meat', 2) , 
    //        new Ingredient( 'French Fries', 20)
    //     ]),

    //     new Recipe( 'second Test recipe' 
    //     , ' some description' ,
    //      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTo0oP9y1yGIemsKrCUkhpnue0dc_uoQ-SU6oWyWxj8c-KkM3'
    //     ,
    //      2,
    //     [
    //        new Ingredient('Buns', 2) , 
    //        new Ingredient( 'Meat', 1)           
    //     ])
    //   ];

      constructor(private shopService : ShopListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    setRecipes( recipes : Recipe[]){
        console.log(recipes)
         if(recipes.length){
            this.recipes = recipes;
            this.recipeChanged.next(this.recipes.slice());
         }

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
    updateRecipeById(id:number , recipe :Recipe){
        let updatedRecipe = this.recipes.find( (item)=>{
               if(item.id === id){
                   return true;
               }
        });
        let index = this.recipes.indexOf(updatedRecipe);
        if(index !== -1){
            this.recipes.splice( index , 1 , recipe)
        }

    this.recipeChanged.next(this.recipes.slice());
      
    }
    addRecipe(recipe :Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    onDeleteById( id :number){

        let updatedRecipe = this.recipes.find((item) => {
            if (item.id === id) {
                return true;
            }
        });
        let index = this.recipes.indexOf(updatedRecipe);
        if (index !== -1) {
            this.recipes.splice(index, 1)
        }

        this.recipeChanged.next(this.recipes.slice());
    }
}