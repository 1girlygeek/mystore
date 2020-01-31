import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Products} from '../products';
import {CartService} from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = Products[+params.get('productId')]
    })
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addtoCart(product);
  }
}
