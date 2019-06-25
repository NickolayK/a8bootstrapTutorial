import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { ShopListService } from 'src/app/shared/services/shoplist.service';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe :Recipe;
  
  constructor(private recipeService :RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){

      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)

  }
}
 