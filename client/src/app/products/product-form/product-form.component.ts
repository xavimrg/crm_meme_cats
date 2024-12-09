import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
@Input() productForm!: FormGroup;
@Output() sentProductForm = new EventEmitter<Product>()


submit(){
  const product: Product = {
name: this.productForm.controls["name"].value,
price: this.productForm.controls["name"].value,
imageUrl: this.productForm.controls["imageUrl"].value,
categories: this.productForm.controls["categories"].value,
description: this.productForm.controls["description"].value,
stock: this.productForm.controls["stock"].value,
maxStock: this.productForm.controls["maxStock"].value, 
stockShippingStatus: this.productForm.controls["stockShippingStatus"].value
  }
  this.sentProductForm.emit(product)
}

}
