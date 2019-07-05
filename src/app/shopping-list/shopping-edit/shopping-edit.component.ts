import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShopListService } from 'src/app/shared/services/shoplist.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  // @ViewChild( 'nameInput' , {static : false}) nameInput:ElementRef;
  // @ViewChild( 'amountInput' , {static : false}) amountInput:ElementRef;

  @ViewChild('myForm', { static: false }) myForm: NgForm;

  editedItemIndex: number;
  editedIngredient: Ingredient;
  subscription :Subscription;
  editMode : boolean = false;

  constructor(private shopService: ShopListService, private route: ActivatedRoute , private router : Router) { }

  ngOnInit() {


    this.subscription = this.shopService.startedEditing
    .subscribe( (id:number)=>{
      
      this.editMode = true ; 
      this.editedItemIndex= id;
      this.editedIngredient = this.shopService.getIngredientByIndex(this.editedItemIndex);
      
        this.myForm.setValue({
          'name': this.editedIngredient.name,
          'amount': this.editedIngredient.amount
        });
     
    })
  }

  onAddIngredient(form: NgForm): void {

    let ingredient = new Ingredient(
      form.value.name,
      form.value.amount
    )

    if (this.editMode) {
      this.shopService.updateIngredientByIndex(this.editedItemIndex, ingredient);
    } else {
      this.shopService.addIngredient(ingredient);
      
    }
    this.myForm.reset();
    this.editMode = false;
    
  }

  onReset(){

    this.myForm.reset();
    this.editMode = false;
    
  }
  onDelete(){
    this.shopService.onDeleteByIndex(this.editedItemIndex);
    this.onReset();
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
