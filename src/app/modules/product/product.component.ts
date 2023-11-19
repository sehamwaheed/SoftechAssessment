import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductApiService } from '@softech/apis';
import { Product } from '@softech/shared-interfaces';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private productService = inject(ProductApiService);

  products$: Observable<Product[]> | undefined;
  productsList: Product[] =[];
  modifiedProductIndex: number | null = null;
  
  productForm = new FormControl(0)
  constructor() { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.products$ =  this.productService.getAllProducts().pipe(tap(products => this.productsList = products));
  }

  selectProduct(productIndex:number){
    this.modifiedProductIndex=productIndex;
    this.productForm.setValue(this.productsList[productIndex].AvailablePieces)
  }
  submit($event:any){
    this.productsList[this.modifiedProductIndex as number].AvailablePieces = this.productForm.value || 0;
    
  }
}
