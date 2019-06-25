import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from '../models/ingredient.model';


@Injectable()

export class ShopListService {

    ingredientsChange = new EventEmitter<Ingredient[]>();

    constructor(){ }

   private ingredients:Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
      ];

    getIngridients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient){
        
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice())
    }

    addIngredients(ingredients:Ingredient[]){
  
        this.ingredients.push(...ingredients);
    }

}