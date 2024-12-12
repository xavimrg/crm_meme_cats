import {Component,EventEmitter,Input,Output} from '@angular/core';
import {  FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  @Input() productForm!: FormGroup;
  @Output() sentForm = new EventEmitter<Product>();

  onSubmit(): void {
    if (this.productForm.valid) {
    const product: Product = this.productForm.value; // la constante es el Interfaz que son los valores del formulario
    this.sentForm.emit(product);}
  }
}

// @Output() sentProductForm= new EventEmitter<Product>();

// productService = inject(ProductsService);
// fb = inject(FormBuilder);

//   productForm = this.fb.group({
//     name: ['', Validators.required],
//     price: [0, Validators.required],
//     imageUrl: ['', Validators.required],
//     categories: ['', Validators.required],
//     description: ['', Validators.required],
//     stock: [0, Validators.required],
//     maxStock: [0, Validators.required],
//     stockShippingStatus: ['', Validators.required],
//   });

// onSubmit() {
//   if (this.productForm.valid) {
//     this.productService
//       .createProduct(this.productForm.value)
//       .subscribe((newProduct) => {
//         this.sentProductForm.emit(newProduct);
//         this.productForm.reset();
//       });
//   }
// }
