

import  { Subject } from 'rxjs'
import { Ingredient } from '../models/ingredient.model';



export class ShopListService {

    ingredientsChange = new Subject<Ingredient[]>();

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
        this.ingredientsChange.next(this.ingredients.slice())
    }

    addIngredients(ingredients:Ingredient[]){
  
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice())
    }

}