import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: 'app-product',
  imports: [ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
