import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@softech/shared-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private http = inject(HttpClient);

  public getAllProducts(){
    return this.http.get<Product[]>('assets/server/porducts.json')
  }
}
