import { Component,OnInit } from "@angular/core";
import { Stordata } from "src/app/Viewmodel/stordata";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']

})

export class HeaderComponent implements OnInit{
    storeInfo: Stordata;
    constructor() { 
        this.storeInfo=new Stordata('https://picsum.photos/200/300/')
    }

    ngOnInit(): void {
    }
}