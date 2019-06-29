import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { ShopListService } from 'src/app/shared/services/shoplist.service';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  
  recipe:Recipe;
  constructor(private router : Router, private recipeService :RecipeService , private route : ActivatedRoute) { }

  ngOnInit() {
    console.log('recipe detail')
    // this.recipe  = this.recipeService.getRecipeById( +this.route.snapshot.params['id']);
    this.route.params.subscribe( (params:Params)=>{
          this.recipe = this.recipeService.getRecipeById( +params['id'])
    })
  }

  onAddToShoppingList(){

      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)

  }

  onEdit(){
    // this.router.navigate( ['edit'] , { relativeTo : this.route});
    this.router.navigate( ['../' , this.recipe.id , 'edit'] , {relativeTo : this.route} );
  }
}
 