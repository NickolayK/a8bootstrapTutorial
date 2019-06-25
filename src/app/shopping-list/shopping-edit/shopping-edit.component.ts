import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShopListService } from 'src/app/shared/services/shoplist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild( 'nameInput' , {static : false}) nameInput:ElementRef;
  @ViewChild( 'amountInput' , {static : false}) amountInput:ElementRef;

  constructor( private shopService : ShopListService) { }

  ngOnInit() {
  }

  onAddIngredient(){
    let ingredient = new Ingredient(
         this.nameInput.nativeElement.value ,
         +this.amountInput.nativeElement.value
    )
      this.shopService.addIngredient(ingredient);
  }
}
