import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  errorMassage:string;

  constructor( private route :ActivatedRoute) { }

  ngOnInit() {

    // this.errorMassage = this.route.snapshot.data['message'];

    this.route.data.subscribe( (data:Data)=>{

      this.errorMassage = data['message'];
    })
  }

}
