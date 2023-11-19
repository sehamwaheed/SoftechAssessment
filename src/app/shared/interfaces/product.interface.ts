export interface Product {
    ProductId: number ;
    ProductName: string;
    ProductPrice: number;
    AvailablePieces: number;
    ProductImg: string;
    product?:Product;
  }

  export interface ProductQ{
    ProductId : number  
    Quantity: number;
    product?: Partial<Product>;
    totalPrice?: number;   
  }
