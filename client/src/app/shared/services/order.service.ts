import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

private orderUrl ='http://localhost:3000/orders'

http = inject(HttpClient)

getAllOrders():Observable<Order[]>{
return this.http.get<Order[]>(this.orderUrl)
}

getOrderById(id: number):Observable<Order>{
  return this.http.get<Order>(`${this.orderUrl}/${id}`)
}

createOrder(order: Order):Observable<Order>{
  return this.http.post<Order>(this.orderUrl, order)
}

updateOrder(order: Order):Observable<Order>{
  return this.http.put<Order>(`${this.orderUrl}/${order.id}`, order)
}

deleteOrder(id: number):Observable<void>{
  return this.http.delete<void>(`${this.orderUrl}/${id}`)
}

}
