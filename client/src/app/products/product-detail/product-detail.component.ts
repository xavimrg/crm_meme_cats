import { Component, inject, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../shared/interfaces/product';
import { ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-detail',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  product!: Product ;

  productService = inject(ProductsService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    const productId = Number(params.get('id'));
    if (productId){
      this.loadProductDetails(productId)
    }
  })
  }

  loadProductDetails(id: number){
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct() {
const confirmDelete = window.confirm('Are you sure to delete this product?')
if (confirmDelete && this.product.id) {
  this.productService.deleteProduct(this.product.id).subscribe({
    next: () => {
      alert('El producto se ha eliminado correctamente.');
      this.router.navigate(['/product']); 
    },
    error: (err) => {
      console.error('Fail to delete the product.', err);
      alert('The product failed to be deleted.');
    },
  });
}
}
  
}
