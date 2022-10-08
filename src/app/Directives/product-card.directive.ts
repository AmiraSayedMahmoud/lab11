import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective {
@Input() bgColour:string="yellow";
  constructor(private elemRef:ElementRef) { 
    this.elemRef.nativeElement.style.border = "2px solid gray"
    // this.elemRef.nativeElement.style.border.radius="25px"
  }
 @HostListener('mouseover') onMouseOver(){
   this.elemRef.nativeElement.style.border = `3px solid ${this.bgColour}` 
  }
  @HostListener('mouseout') onMouseOut(){
    this.elemRef.nativeElement.style.border = "2px solid gray"
   }
}
