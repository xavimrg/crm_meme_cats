import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product-form',
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
productForm! : FormGroup;

productService = inject(ProductsService)
fb = inject(FormBuilder)


onSubmit(){}
}
