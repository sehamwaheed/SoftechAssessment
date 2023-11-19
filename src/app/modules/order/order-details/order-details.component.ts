import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { OrderApiService } from '@softech/apis';
import { Order, Product, User } from '@softech/shared-interfaces';
import { Observable, map, share, switchMap, tap } from 'rxjs';
import { TypeProp } from '../order.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  private orderService = inject(OrderApiService);
  private activeRoute = inject(ActivatedRoute);
  otherData$: Observable<Data> | undefined;
  order$: Observable<Order> | undefined;
  products: Product[] = [];
  users: User[] = [];
  ordersList: Order[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.otherData$ = this.activeRoute.data.pipe(
      map((e: Data) => e['allData']),
      tap((data: [Product[], Order[], User[]]) => {
        this.products = data[TypeProp.Product];
        this.users = data[TypeProp.User];
        this.ordersList = data[TypeProp.Order];
      })
      ) ;
     this.getOrder();
  }

  getOrder() {
    this.order$ = this.orderService
      .getOrderById(this.activeRoute.snapshot.params['id'])
      .pipe(
        map((order: Order) => {
          order.user = this.users.find(user=> user.Id == order?.UserId);
          return order;
        }),
        map((order: Order) => {
          order.Products.map(prod=>{
            prod.product = this.products.find(product => product.ProductId == prod.ProductId);
            prod.totalPrice = prod.Quantity * (prod.product?.ProductPrice || 0)
            return prod
          });
          return order;
        }),
        share()
      );

  }

  backOrder() {
    this.router.navigate(['softech/orders']);
  }
}
