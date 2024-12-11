import { Component, inject, OnInit } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/interfaces/product';
import { ProductFormComponent } from "./product-form/product-form.component";

@Component({
  selector: 'app-product',
  imports: [ProductListComponent, ProductFormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

productService = inject(ProductsService)

products: Product[] = [];

ngOnInit(): void {
  this.productService.getAllProducts().subscribe((data) =>{
    this.products = data
  })
}

}
