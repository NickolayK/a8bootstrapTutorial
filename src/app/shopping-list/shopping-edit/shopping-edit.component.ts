import { Component, OnInit, ViewChild, ElementRef, Output ,EventEmitter } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild( 'nameInput' , {static : false}) nameInput:ElementRef;
  @ViewChild( 'amountInput' , {static : false}) amountInput:ElementRef;
  @Output() onAddIngredientEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    let ingredient = new Ingredient(
         this.nameInput.nativeElement.value ,
         this.amountInput.nativeElement.value
    )

    this.onAddIngredientEvent.emit(ingredient)
  }
}
