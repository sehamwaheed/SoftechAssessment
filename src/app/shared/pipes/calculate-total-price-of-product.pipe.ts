import { Pipe, PipeTransform } from '@angular/core';
import { Product, ProductQ } from '@softech/shared-interfaces';

@Pipe({
  name: 'calculateTotalPriceOfProduct',
})
export class CalculateTotalPriceOfProductPipe implements PipeTransform {
  transform(value: ProductQ[], products: Product[]): string {
    let totalPrice = 0;
    let partialProducts = value.map((elm) => {
      elm.product = products.find(
        (product) => product.ProductId == elm?.ProductId
      );
      elm.totalPrice = elm.Quantity * (elm.product?.ProductPrice || 0);
      return elm;
    });
    partialProducts.forEach(
      (el) => (totalPrice = totalPrice + (el.totalPrice || 0))
    );
    return totalPrice.toFixed(2).toString();
  }
}
