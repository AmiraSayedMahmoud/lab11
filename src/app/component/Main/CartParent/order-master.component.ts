import { Component, OnInit } from '@angular/core';
import { ICategory } from "src/app/Model/icategory";
import { ShoppingCartItems } from 'src/app/Viewmodel/shopping-cart-items';
@Component({
  selector: 'order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit {
  catList:ICategory[] ;
  selectedCatID:number=0;
  receiveOrderTotalPrice:number=0;
  cartList:ShoppingCartItems[]=[];
  orderNewPrice:number=0;
  totalPriceWithTax:number=0;
  constructor() {
    this.catList=[
      {id:1,name:'Labtop'},
      {id:2,name:'Tab'},
      {id:3,name:'Mobile'}
   ];
   }

  ngOnInit(): void {
  }
  onTotalPriceChanges(totalPrice:number){
    this.receiveOrderTotalPrice=totalPrice;
  }
  addToCart(totalBuy:ShoppingCartItems){
     this.cartList.push(totalBuy)
  }
  totalPrice(cartID:number,count:string){
    let test=0
        this.cartList?.forEach(item=>{
          if(item.productID==cartID){
            item.selsctedQuantity-=+count
            //
            test += item.unitPrice *+count
          }
        })
        this.orderNewPrice += test ;
        this.totalPriceWithTax = this.orderNewPrice*0.14;
    //     this.totalPriceChanges.emit(this.orderNewPrice);
    //     // console.log(count)
  }

}
