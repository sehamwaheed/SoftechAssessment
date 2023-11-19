import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Order, Product, User } from '@softech/shared-interfaces';
import { Observable, map, share, tap } from 'rxjs';

export enum TypeProp {
  Product,
  Order,
  User,
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders$: Observable<Order[]> | undefined;
  products: Product[] = [];
  users: User[] = [];
  ordersList: Order[] = [];
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orders$ = this.activeRoute.data.pipe(
      map((e: Data) => e['allData']),
      map((value: [Product[], Order[], User[]]) => {
        this.products = value[TypeProp.Product];
        value[TypeProp.Order] = value[TypeProp.Order].filter(
          (order) =>
            order.UserId ==
            value[TypeProp.User].find((user) => user.Id == order.UserId)?.Id
        );
        this.users = value[TypeProp.User];
        this.ordersList = value[TypeProp.Order];

        return value[TypeProp.Order];
      }),
      share()
    );
  }
  orderDetails(order: Order) {
    this.router.navigate(['softech/orders/orderDetails', order.OrderId]);
  }
}
