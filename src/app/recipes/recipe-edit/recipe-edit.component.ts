import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  editMode = false;
  myForm : FormGroup;

  
  constructor(private route : ActivatedRoute , private recipeServie : RecipeService , private router :Router) { }

  ngOnInit() {
    this.route.params.subscribe ( (params :Params)=> {
        this.id = +params['id'];
        this.editMode = this.id ? true : false;
       this.initForm()
    })


  }
  private initForm(){
    
    let recipeName = '';
    let imgPath = '';
    let description = '';
    let ingredients = new FormArray([]);

    if(this.editMode){
      const recipe =  this.recipeServie.getRecipeById(this.id);
      recipeName =  recipe.name;
      imgPath =  recipe.imgPath;
      description = recipe.description;
      

      if(recipe['ingredients']){
        recipe.ingredients.forEach( item=>{
            ingredients.push( new FormGroup({
              'name' : new FormControl (item.name , Validators.required),
              'amount' : new FormControl (item.amount , 
                [Validators.required , Validators.pattern(/^[1-9][0-9]*$/)])
            }))
        })
      }
    }

    this.myForm = new FormGroup({

      'name' : new FormControl(recipeName , Validators.required),
      'imgPath': new FormControl(imgPath , Validators.required),
      'description': new FormControl(description  , Validators.required),
      
      'ingredients' : ingredients

    });

  }
  onReset(){
      this.router.navigate(['../'] ,{relativeTo : this.route});
  }

  onAddIngredient(){
    let ingredient = new FormGroup({
      'name' : new FormControl (null , Validators.required),
      'amount' : new FormControl (null , [Validators.required , Validators.pattern(/^[1-9][0-9]*$/)])     
    });
    
    (<FormArray>this.myForm.get('ingredients')).push(ingredient)
    
  }
  onDeleteIngredient(index : number){
    (<FormArray>this.myForm.get('ingredients')).removeAt(index);
  }
  onDelete(){
    this.recipeServie.onDeleteById(this.id);
    this.router.navigate( ['recipes'] );
  }

  onSubmit(){
    let id = this.id;
    if(!id){
        id = Math.floor(Math.random() * 16)
    }
   
    let recipe = new Recipe( 
      this.myForm.value.name , 
      this.myForm.value.description , 
      this.myForm.value.imgPath , 
      id , 
      this.myForm.value.ingredients)


    if(this.editMode){
      this.recipeServie.updateRecipeById(this.id, recipe);
    }
    else {
      this.recipeServie.addRecipe(recipe);
      
    }
    this.onReset()
  }


}
