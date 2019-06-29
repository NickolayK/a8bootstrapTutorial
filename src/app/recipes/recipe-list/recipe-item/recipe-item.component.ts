import { Component, OnInit, Input,  } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe :Recipe;
  id :number;


  constructor(private recipeServices : RecipeService ,
    private router :Router ,private route :ActivatedRoute) { }

  ngOnInit() {
  }

  // onSelect(){
      
  //      this.router.navigate([this.recipe.id ], { relativeTo : this.route });
  // }

}
