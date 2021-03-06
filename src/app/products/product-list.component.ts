import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    // selector:'pm-products',
    templateUrl:  './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})


export class ProductListComponent implements OnInit{
    pageTitle: string="Product List";
    imageWidth : number = 50;
    imageMargin : Number =2;
    showImage : boolean = false;
    _listFilter : string;
    errorMessage: any;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter? this.performFilter(this.listFilter): this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[];
//     products :  IProduct [] =[
//        {"productId": 2,
//     "productName":"Garden Cart",
//      "productCode":"GBN-0023",
//     "releaseDate":"March 18, 2019",
//     "description":"Garden cart",
//     "price":32.99,
//     "starRating":4.2,
//     "imageUrl":"assets/Images/Garden-Cart.jpg", 
// },
// {"productId": 2,
//     "productName":"Showel",
//      "productCode":"GBN-0023",
//     "releaseDate":"March 18, 2019",
//     "description":"Garden cart",
//     "price":32.99,
//     "starRating":4.2,
//     "imageUrl":"assets/Images/Garden-Cart.jpg", 
// }
// ];
private _productService;
public records: IProduct[];

constructor(private productService: ProductService)
{
    
    
}
toggleImage(): void{
    this.showImage = !this.showImage; 
 }
 ngOnInit(): void{
     //this.product = this.productService.getProducts();
     this.loadProducts(); 
     this.filteredProducts = this.products;
     //this.listFilter = 'cart';
 }
 loadProducts(){
    this.productService.getProducts().subscribe(
        (productData : IProduct[]) => {
          this.products = productData;
          console.log('JSON Response = ', JSON.stringify(productData))
          
        }
    );
  }

 performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((products: IProduct)=>products.productName.toLocaleLowerCase().indexOf(filterBy)!= -1)
}

}
 