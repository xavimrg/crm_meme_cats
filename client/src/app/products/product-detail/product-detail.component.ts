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

  loadProductDetails(id: number) {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deteleProduct() {
    if (this.product?.id !== undefined) { // Verifica que el ID no sea undefined
      const confirmed = confirm('Are you sure you want to delete this product?');
      if (confirmed) {
        this.productService.deleteProduct(this.product.id).subscribe(() => {
          alert('Product deleted successfully');
          this.router.navigate(['/products']); // Redirigir a la lista de productos
        }, (error) => {
          console.error('Error deleting product:', error);
          alert('Failed to delete product. Please try again.');
        });
      }
    } else {
      console.error('Product ID is undefined. Cannot delete.');
      alert('Failed to delete product: invalid product ID.');
    }
  }

}
