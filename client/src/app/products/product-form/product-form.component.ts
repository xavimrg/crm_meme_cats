import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-form',
  imports: [ ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  productForm!: FormGroup;
  @Output() productCreated = new EventEmitter<Product>();

  productService = inject(ProductsService);
  fb = inject(FormBuilder);

  constructor() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      imageUrl: ['', Validators.required],
      categories: ['', Validators.required],
      description: ['', Validators.required],
      stock: [0, Validators.required],
      maxStock: [0, Validators.required],
      stockShippingStatus: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService
        .createProduct(this.productForm.value)
        .subscribe((newProduct) => {
          this.productCreated.emit(newProduct);
          this.productForm.reset();
        });
    }
  }
}

