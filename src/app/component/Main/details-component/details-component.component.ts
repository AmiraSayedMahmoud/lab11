import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Model/iproduct';
import { StaticProductService } from 'src/app/Services/static-product.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {
 currentPrdID:number=0;
 prd:IProduct | null = null;
 prdIDsArr:number[]=[];
  constructor(private activatedRoute: ActivatedRoute, private prdService:StaticProductService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    // this.currentPrdID = Number(this.activatedRoute.snapshot.paramMap.get('pid'))
    // console.log(this.currentPrdID);
   
    this.prdIDsArr = this.prdService.getPrdIDs();
    
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentPrdID=Number(paramMap.get('pid'));
      this.prd = this.prdService.getProductByID(this.currentPrdID);
    });
  }
  goback(){
    this.location.back();
  }
  prevPrd(){
    let currIndex = this.prdIDsArr.findIndex((elem)=>elem==this.currentPrdID);
    // console.log(currIndex)
    let prevPrdID;
    if(currIndex>0)
    {
      prevPrdID = this.prdIDsArr[currIndex-1];
      this.router.navigate(['/product',prevPrdID]);
    }
   

  }
  nextPrd(){
    let currIndex = this.prdIDsArr.findIndex((elem)=>elem==this.currentPrdID);
    // console.log(currIndex)
    let nextPrdID;
    if(currIndex<this.prdIDsArr.length)
    {
      nextPrdID = this.prdIDsArr[currIndex+1];
      this.router.navigate(['/product',nextPrdID]);
    }
   
  }
  
}
