import { Component, Input } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import {  MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-product-list',
  imports: [MatCardModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() products: Product[] = []; 

}
