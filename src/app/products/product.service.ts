import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
    providedIn : 'root'
})
export class ProductService{
    public productUrl = 'http://192.168.193.177:80/Service/api/products';
    
    constructor(private http: HttpClient){}

getProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl);
}

getProductsById(id: number) : Observable<IProduct>{
    return this.getProducts()
    .pipe(map((products: IProduct[]) => products.find(p => p.productId === id))
    );
    //return this.http.get<IProduct[]>('http://192.168.193.177:80/Service/api/products/'+ id);
}

private handleError(err: HttpErrorResponse){
    let errorMessage ='';
    if(err.error instanceof ErrorEvent){
        errorMessage=`An error occured: ${err.error.message}`;
    }
    else{
        errorMessage=`Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}

}