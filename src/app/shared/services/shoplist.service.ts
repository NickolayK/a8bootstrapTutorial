

import  { Subject } from 'rxjs'
import { Ingredient } from '../models/ingredient.model';



export class ShopListService {

    ingredientsChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();


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
    getIngredientByIndex(i:number){
        return this.ingredients[i];

    }
    updateIngredientByIndex( i :number , updatedIngredient:Ingredient){
            this.ingredients[i] = updatedIngredient;
            this.ingredientsChange.next(this.ingredients.slice());
    }

    onDeleteByIndex( index :number){
        this.ingredients.splice( index ,1);
        this.ingredientsChange.next(this.ingredients.slice())
       
    }
}