import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShopListService } from '../shared/services/shoplist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [  ];
  constructor( private shopService : ShopListService) { 

  }

  ngOnInit() {
    this.ingredients = this.shopService.getIngridients();
    this.shopService.ingredientsChange.subscribe( (ingredients:Ingredient[]) =>{
      this.ingredients = ingredients;
    })
  }


}
