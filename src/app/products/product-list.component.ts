import { Component } from "@angular/core";
import { IProduct } from "./product";


@Component({
    selector:'pm-products',
    templateUrl:  './product-list.component.html'
})


export class ProductListComponent{
    pageTitle: string="Product List";
    imageWidth : number = 50;
    imageMargin : Number =2;
    showImage : boolean = false;
    listFilter : string = 'Cart';
    products :  IProduct [] =[
       {"productId": 2,
    "productName":"Garden Cart",
     "productCode":"GBN-0023",
    "releaseDate":"March 18, 2019",
    "description":"Garden cart",
    "price":32.99,
    "starRating":4.2,
    "imageUrl":"assets/Images/Garden-Cart.jpg", 
}
];
toggleImage(): void{
    this.showImage = !this.showImage; 
 }

}
