import { Component, inject, Input, OnInit } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { Product } from '../../shared/interfaces/product';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product-list',
  imports: [MatCardModule, TranslateModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent  {

  @Input() products: Product[] = [];
  product: Product | null = null;
// recibe del padre los products que es un [] de Product i

productService = inject(ProductsService);

}
  

