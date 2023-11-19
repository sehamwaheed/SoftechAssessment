import { Injectable, inject } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { OrderApiService, ProductApiService, UserApiService } from '@softech/apis';
import { Order, Product, User } from '@softech/shared-interfaces';
import { Observable, forkJoin } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class GetAllDataResolver implements Resolve<[Product[], Order[], User[]]> {
  private orderService = inject(OrderApiService);
  private productService = inject(ProductApiService);
  private userService = inject(UserApiService);
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[Product[], Order[], User[]]> {   
    return forkJoin([
      this.productService.getAllProducts(),
      this.orderService.getAllOrders(),
      this.userService.getAllUsers(),
    ]) ;
  }
}
