import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { Observable } from 'rxjs';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Injectable({
    providedIn : 'root'
})
export class RecipeResolver implements Resolve<Recipe[]> {

    constructor( private dataStorageServices : DataStorageService,
        private recipeService : RecipeService){

    }

    resolve(route: ActivatedRouteSnapshot , state : RouterStateSnapshot) {
            const recipes = this.recipeService.getRecipes();
            if(!recipes.length ){
                return  this.dataStorageServices.fetchData();
            }else{
                return recipes;
            }
               
    }

}