import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { Router } from '@angular/router';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'http://localhost:5000/orders';

  constructor(private http: HttpClient,private router:Router) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  // viewOrder(order: Order): void {
  //   this.router.navigate(['/view-order-info', order.orderNo]);
  // }

  // getItems(): Observable<Item[]> {
  //   return this.http.get<Item[]>(this.ordersUrl);
  // }

  getOrderDetails(): Observable<Order> {
    return this.http.get<Order>(`${this.ordersUrl}`);
  }
  getOrderDetailsById(orderNo: string): Observable<Order> {
    return this.http.get<Order>(`${this.ordersUrl}/${orderNo}`);
  }
}
