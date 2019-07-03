import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({

        'name' : new FormControl( '' , [Validators.required ] , CustomValidators.asyncNameValidator.bind(this) ),
        'email' : new FormControl('' , [ Validators.required, Validators.email]),
        'status' : new FormControl ('critical')


    })

  }

  onSubmit() {
    console.log(this.projectForm.value);
    
  }
}
