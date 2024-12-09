import { Component, inject, OnInit } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductsService } from '../../shared/services/products.service';
import { ProductFormComponent } from "../product-form/product-form.component";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product',
  imports: [ProductListComponent, ProductFormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
fb = inject(FormBuilder)
productForm!: FormGroup;

productsService = inject(ProductsService)
products = this.productsService.products

constructor(){
   this.productsService.getAllProducts()
 }

 newProduct: Product = {
name:'', 
imageUrl:'',
price:0,
categories: [''],
description: '',
stock: 0,
maxStock: 1, 
stockShippingStatus: '',
 }

ngOnInit(): void {
  this.productForm = this.fb.group(this.newProduct)
}

onSubmit(product: Product){
  this.productsService.addProduct(product)
}

}
