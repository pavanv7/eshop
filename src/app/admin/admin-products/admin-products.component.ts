import { Product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  product: {}[];
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  query;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => this.filteredProducts = this.product = products);
  }

  filter(query: string) {
    // console.log(query);
    // this.filteredProducts = (query) ?
    //   this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    //   this.product;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
