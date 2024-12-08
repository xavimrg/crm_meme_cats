import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { MatCardHeader, MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-list',
  imports: [MatCardModule, TranslateModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  productsService = inject(ProductsService)


  constructor(){
    this.productsService.getAllProducts()
  }

  }

  

