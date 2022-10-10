import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective implements OnChanges {
@Input('ProductCard') bgColor:string="white";
  constructor(private elemRef:ElementRef) { 
    this.elemRef.nativeElement.style.border = "2px solid gray"
    this.elemRef.nativeElement.style.boxShadow = "5px 5px 5px 5px gray"
 
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elemRef.nativeElement.style.backgroundColor=`${this.bgColor}`
  }
 @HostListener('mouseover') onMouseOver(){
  this.elemRef.nativeElement.style.boxShadow = "15px 15px 15px 15px gray"
  }
  @HostListener('mouseout') onMouseOut(){
    this.elemRef.nativeElement.style.boxShadow = "5px 5px 5px 5px gray"
    // this.elemRef.nativeElement.style.backgroundColor=`${this.bgColor}`
   }
}
