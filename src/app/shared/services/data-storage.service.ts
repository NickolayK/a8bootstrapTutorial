import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';
import { map , tap } from 'rxjs/operators';


@Injectable({
    providedIn : 'root'
})
export class DataStorageService{

    constructor( private http : HttpClient  , private recipeService : RecipeService){

    }

    storeRecipe( ){

        const recipes = this.recipeService.getRecipes();

        this.http.put('https://a8course.firebaseio.com/recipe.json' , recipes).pipe( 

        ).subscribe( (response)=>{
                console.log(response);
        }) 
 
    }

    fetchData(){

     return this.http.get<Recipe[]>('https://a8course.firebaseio.com/recipe.json').pipe(
            map((recipes)=>{
                return recipes.map( recipe =>{
                    return {...recipe , ingredients : recipe.ingredients ? recipe.ingredients : [] }
                })

            }),

            tap( (recipes)=>{
                this.recipeService.setRecipes(recipes);
            } )
        )
    }
 
} 