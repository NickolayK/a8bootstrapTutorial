import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe :Recipe;
  @Output() onRecipeSelect  = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
   
    this.onRecipeSelect.emit();
  }

}
