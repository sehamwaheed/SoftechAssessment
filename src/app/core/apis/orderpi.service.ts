import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Order } from '@softech/shared-interfaces';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderApiService {
  private http = inject(HttpClient);

  public getAllOrders() {
    return this.http.get<Order[]>('assets/server/orders.json');
  }
  public getOrderById(id: number): Observable<Order> {
    return this.http.get<Order[]>('assets/server/orders.json').pipe(
      map((va: Order[]) => va.find((el) => el.OrderId == id) ?? ({} as Order)),
    );
  }
}
