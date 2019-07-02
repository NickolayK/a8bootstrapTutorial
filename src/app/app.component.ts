import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  signUpForm : FormGroup;
  genders = ['male', 'female'];

  forbiddenUsernames = ['Chris' ,  'Anna']

  constructor(private fb : FormBuilder){
    

  }
  

  ngOnInit(){

    this.signUpForm = new FormGroup( {
      'userData': new FormGroup ({
        'username' : new FormControl(null , [Validators.required, this.forbiddenNames.bind(this)]),
        'email' :  new FormControl(null , [Validators.required , Validators.email] ,  this.forbiddenEmail.bind(this))
      }) ,
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])

    } )
    // this.signUpForm.valueChanges.subscribe( (value)=>{
    //     console.log(value)
    // })
    this.signUpForm.statusChanges.subscribe( (status)=>{
      console.log(status)
  });

  // this.signUpForm.setValue({
  //   'userData' : {
  //     'username' : 'nick',
  //     'email' : 'test@test.com'
  //   },
  //   'gender' : 'male',
  //   'hobbies' : []

  // });
  this.signUpForm.patchValue({
    'userData' : {
      'username' : 'nick',
   
    },


  });
  }

  onSumbit(){
      console.log(this.signUpForm);
      this.signUpForm.reset({
        'userData' : {
          'username' : 'nick',
       
        },
      'gender' : 'male'});
  }
  addHobbie(){
      const hobbie = new FormControl(null, [Validators.required]);
      (<FormArray>this.signUpForm.get('hobbies')).push(hobbie);
  }

  forbiddenNames( control : FormControl):{[s :string] : boolean}{

      if(this.forbiddenUsernames.indexOf(control.value) !== -1){
        return { 'nameIsForbidden' : true }
      }else{
        return null;
      }
      
  }

  forbiddenEmail( control :FormControl) : Promise<any> | Observable<any> {

    const promise = new Promise<any>( (resolve , reject)=>{
          setTimeout(() => {
              if(control.value ===  'test@test.com'){
                  resolve ( {'emailIsForbbiden' : true });
              }else{
                resolve(null);
              }
          }, 2000);
    } );
    return promise;
  }
}

