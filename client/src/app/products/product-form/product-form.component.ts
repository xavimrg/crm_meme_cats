import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-form',
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
productForm! : FormGroup;
@Output() productCreated = new EventEmitter<Product>();


productService = inject(ProductsService)
fb = inject(FormBuilder)

constructor(){
  this.productForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    price: [0, Validators.required],
    description: ['',Validators.required],
    stock: [0, Validators.required],
    maximumStock:[0,Validators.required]
  })
}
onSubmit() {
  if (this.productForm.valid) {
    this.productService.createProduct(this.productForm.value).subscribe((newProduct) => {
      this.productCreated.emit(newProduct);
      this.productForm.reset();
    });
  }
}

}

