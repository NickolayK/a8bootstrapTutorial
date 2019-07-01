import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShopListService } from '../shared/services/shoplist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit ,OnDestroy {

  ingredients:Ingredient[] = [  ];
  private subScription :Subscription;
  constructor( private shopService : ShopListService) { 

  }

  ngOnInit() {
    this.ingredients = this.shopService.getIngridients();
    this.subScription =  this.shopService.ingredientsChange.subscribe( (ingredients:Ingredient[]) =>{
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(){
    console.log(this.subScription)

    this.subScription.unsubscribe();

}
}
