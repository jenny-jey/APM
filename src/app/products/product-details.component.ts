import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle : string ='Product Detail';
  product : IProduct;

  constructor(private route: ActivatedRoute,
    private router: Router) {
   }


  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    // this.pageTitle += `:${id}`;
    this.product ={
      'productId': id,
      'productName':'Leaf Rake',
      'productCode': 'GDN-001',
      'releaseDate': 'April 10, 2020',
      'description': 'Leaf rake with 48-inch wooden handle',
      'price': 19.95,
      'starRating': 3.5,
      'imageUrl':'assets/Images/Garden-Cart.jpg'
    }
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }



}
