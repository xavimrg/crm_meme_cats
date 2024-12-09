import { Component, inject } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product',
  imports: [ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {


productsService = inject(ProductsService)
products = this.productsService.products

constructor(){
   this.productsService.getAllProducts()
 }

}
