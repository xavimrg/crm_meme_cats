import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

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

addProduct(product: Product){ // le pasamos a la funcion un product con la estructura del Interfaz Product
  return this.hhtp.post<Product>(this.Url, product) // devuelvo el serv. hhtp. con el metodo post <Product> (a esta url y le paso el product concreto)
}

getProductById(id: number){ // le pasamos el ID
return this.hhtp.get<Product>(`${this.Url}/${id}`) // = pero añado el ID 

}

updateProduct(id: number, product: Product){ // en este caso usamos el ID para localizar y pasamos de nuevo el producto para actualizarlo
return this.hhtp.put<Product>(`${this.Url}/${id}`, product) // usamos metodo put en lugar de post y añadimos el product de nuevo
}

deleteProduct(id: number): Observable<void>{ // localiazmos con el ID pasado y despues utilizamos el observable vacio
  return this.hhtp.delete<void>(`${this.Url}/${id}`)  // metodo delete de http
}

}

