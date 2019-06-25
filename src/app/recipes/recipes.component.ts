import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model'
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers : []
})
export class RecipesComponent implements OnInit {

  recipeDetail :Recipe ;

  constructor( private recipeServices : RecipeService) { 
   
  }

  ngOnInit() {
    this.recipeServices.recipeSelected.subscribe(this.onRecipeDetail.bind(this));
  }
  

  onRecipeDetail(recipe:Recipe){
    this.recipeDetail = recipe;
  }
}
