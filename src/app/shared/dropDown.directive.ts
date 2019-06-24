import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from "@angular/core";


@Directive({

    selector : '[appDropDown]'
})


export class DropDownDerective {

    // @HostListener('click') onDropDown(){
    //     console.log('drop down');

    //     this.elRef.nativeElement.classList.toggle('open')
    // }
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') onToggle(){
            this.isOpen = !this.isOpen;
    }
    constructor( private renderer : Renderer2 ,  private elRef : ElementRef ){

        

    }
}