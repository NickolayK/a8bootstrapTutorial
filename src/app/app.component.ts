import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f' , {static : false}) myForm:NgForm ;
  defaultQuestion = 'pet';
  answer = 'default';
  genders = ['male' , 'female'];
  submitted = false;

  user = {
    username : '',
    email : '' ,
    secretQuestion: '',
    answer : '' , 
    gender : ''



  }
  
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.myForm.setValue({
    //   userData:{ userName : suggestedName ,
    //   email:''},
    //   secret : 'pet',
    //   questionAnswer : '',
    //   gender : 'male'

    // })
    this.myForm.form.patchValue({userData : {
      userName : suggestedName
    }});
  }

  onReset(){
    this.myForm.reset();
  }


  // onSubmit(formData:NgForm){
  //   console.log(formData)
  // }
  onSubmit(){
    this.submitted = true;
    this.user.username = this.myForm.value.userData.userName;
    this.user.email = this.myForm.value.userData.email;
    this.user.secretQuestion = this.myForm.value.secret;
    this.user.answer = this.myForm.value.questionAnswer;
    this.user.gender = this.myForm.value.gender;
  }
}
