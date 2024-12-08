import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private hhtp = inject(HttpClient) // injectar servicio para realizar peticiones http
  private Url = 'http://localhost:3000/products'; // declarar constante estableciendo la url donde se alojan los valores. 

//inicializar el valor signal declarando que es un array vacio de productos e inicializando dentro de la funcion ([]) que es un array


products = signal<Product[]>([]);

// funcion para traer a los productos

getAllProducts(){
  return this.hhtp.get<Product[]>(this.Url). // al servicio http funcion get valor [] de products a traves de la URL
  subscribe(products=>this.products.set(products)) // me suscribo al signal procuts que le digo que es un set de products
}

}
