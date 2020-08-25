import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    getProduct(): IProduct[]
    {
        return [
            {"productId": 2,
    "productName":"Showel",
     "productCode":"GBN-0023",
    "releaseDate":"March 18, 2019",
    "description":"Garden cart",
    "price":32.99,
    "starRating":4.2,
    "imageUrl":"assets/Images/Garden-Cart.jpg", 
},
{"productId": 1,
    "productName":"Garden Cart", 
     "productCode":"GBN-0023",
    "releaseDate":"March 18, 2019",
    "description":"Garden cart",
    "price":32.99,
    "starRating":4.2,
    "imageUrl":"assets/Images/Garden-Cart.jpg", 
}
        ];
    }

}