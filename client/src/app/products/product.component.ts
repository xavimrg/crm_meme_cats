import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/interfaces/product';
import { ProductFormComponent } from "./product-form/product-form.component";
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-product',
  imports: [ProductListComponent, ProductFormComponent,  MatButtonToggleModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productService = inject(ProductsService);
  fb = inject(FormBuilder);

  products = signal<Product[]>([])

  productForm!: FormGroup;
  isFormVisible: boolean = false;
toggleGroup: any;



ngOnInit(): void {
this.loadProducts();


// inicializa el formulario vacio en el momento de cargar los productos 
this.productForm = this.fb.group({
  name: [''],
  imageUrl: [''],
  price: [0],
  description: [''],
  stock: [0],
  maxStock: [0],
  stockShippingStatus: [''],
});

  
}
// para cargar y mantener actualizado el product list - conectamos con el servicio y el metodo del mismo
loadProducts(): void {
this.productService.getAllProducts().subscribe( // subscribe -> signal
(data) => {
  this.products.set(data) // setter de signals
});
}

onSubmit(product: Product): void{
this.productService.createProduct(product).subscribe((newProduct) => { // crea el nuevo producto y lo manda pero se suscribe a los signals
  this.products.set([...this.products(), newProduct]); // products() es el get de signals - no un metodo
});}




}






