import { Component, OnInit , Input, ViewEncapsulation ,OnChanges,ViewChild,ElementRef,
   SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-elem',
  templateUrl: './server-elem.component.html',
  styleUrls: ['./server-elem.component.scss'],
  encapsulation : ViewEncapsulation.Emulated
})
export class ServerElemComponent implements OnInit , OnChanges , 
DoCheck ,AfterContentInit ,AfterContentChecked , AfterViewChecked, OnDestroy ,AfterViewInit
{
  @ViewChild('heading' , { static : true  }) header :ElementRef
  @Input('customElement') element:{type:string, name:string , content:string} ;
  @Input() name :string;
  @ContentChild('contentParagraph', {static:true}) projectedContent :ElementRef;
  constructor() { 

    console.log('constructor log');

  }

  ngOnInit() {
    console.log('ngOnInit log');
    console.log("Text content of the header : "  + this.header.nativeElement.textContent);
    console.log("Text content of projection : "  + this.projectedContent.nativeElement.textContent);
  }

  ngOnChanges(changes :SimpleChanges){
    console.log('ngOnChanges');
    console.log(changes)
  }

  ngDoCheck(){
    console.log('ngDoCheck logs')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    console.log("Text content of projection : "  + this.projectedContent.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log(this.header.nativeElement.textContent)
  }
  ngOnDestroy(){
    console.log('on destroy')
  }
}
