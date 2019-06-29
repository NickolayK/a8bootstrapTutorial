import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  editMode = false;

  recipe :Recipe;
  constructor(private route : ActivatedRoute , private recipeServie : RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe ( (params :Params)=> {
        this.id = +params['id'];
        this.editMode = this.id != null;
      if(this.id){
       this.recipe =  this.recipeServie.getRecipeById(this.id);
      }else{

        this.recipe = new Recipe('' , '' , '', 1 , [] )
      }

    })
  }




}
