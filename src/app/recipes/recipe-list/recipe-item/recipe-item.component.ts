import { Component, OnInit, Input,  } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe :Recipe;


  constructor(private recipeServices : RecipeService) { }

  ngOnInit() {
  }

  onSelect(){

        this.recipeServices.recipeSelected.emit(this.recipe);
  }

}