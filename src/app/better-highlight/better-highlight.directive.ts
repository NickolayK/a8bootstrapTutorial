import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
  
})
export class BetterHighlightDirective implements OnInit {


  @Input() defaultColor : string  = 'transparent';
  @Input('appBetterHighlight') highLightColor : string  = 'blue'; 
  @HostBinding('style.backgroundColor') backgroundColor :string ;

  constructor( private elRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color' , 'blue');
    this.backgroundColor  = this.defaultColor ;
  }

  @HostListener('mouseenter') mouseover( eventDate : Event){
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color' , 'blue');
    this.backgroundColor = this.highLightColor;
  }
  @HostListener('mouseleave') mouseleave( eventDate : Event){
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color' , 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
