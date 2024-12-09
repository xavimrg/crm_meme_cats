import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Product } from '../../shared/interfaces/product';
import { FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product-detail',
  imports: [MatCardModule, MatFormFieldModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  editMode = false; // establecemos el modo para saber si activamos el formulario de Update
  productService = inject(ProductsService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));
      if (productId) {
        this.loadProductDetails(productId);
      }
    });
  }

  deteleProduct() {}

  loadProductDetails(id: number) {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }
}
