import { Pipe, PipeTransform } from '@angular/core';
import { ProductQ } from '../interfaces/product.interface';

@Pipe({
  name: 'getTotalPriceAllProducts'
})
export class GetTotalPriceAllProductsPipe implements PipeTransform {

  transform(value: ProductQ[]): string {
    let totalPrice = 0;
    value.forEach(product=>{
      totalPrice += (product.totalPrice || 0)
    })
    return totalPrice.toFixed(2).toString() ;
  }

}
