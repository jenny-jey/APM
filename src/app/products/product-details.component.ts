import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle : string ='Product Detail';
  product : IProduct;
  sub: Subscription;
  errorMessage = '';

  private _productserice;
  constructor(private route: ActivatedRoute,
    private router: Router, private productService: ProductService) {
   }


  ngOnInit() {
  
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.loadProductsById(id);
    }
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

  loadProductsById(id : number){
          this.productService.getProductsById(id).subscribe({
            next: product => this.product = product,
            error: err => this.errorMessage = err}
    );
  }
}
