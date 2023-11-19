import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
import { Product } from '@softech/shared-interfaces';
import { ProductApiService } from './product-api.service';

describe('ProductApiService', () => {
  let productApiService: ProductApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductApiService],
    });

    productApiService = TestBed.inject(ProductApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(productApiService).toBeTruthy();
  });

  it('should retrieve products from the API', () => {
    const dummyProducts: Product[] = [
      {
        "ProductId": 123,
        "ProductName": "Product 1",
        "ProductPrice": 123.5,
        "AvailablePieces": 25,
        "ProductImg": "https:\/\/www.decolore.net\/wp-content\/uploads\/2017\/04\/product-mock-up-set-2.jpg"
      },
      {
        "ProductId": 124,
        "ProductName": "Product 2",
        "ProductPrice": 100,
        "AvailablePieces": 100,
        "ProductImg": "https:\/\/www.decolore.net\/wp-content\/uploads\/2017\/04\/product-mock-up-set-2.jpg"
      },
    ];

    productApiService.getAllProducts().subscribe((products) => {
      expect(products).toEqual(dummyProducts);
    });

    const req = httpTestingController.expectOne('assets/server/porducts.json');
    expect(req.request.method).toBe('GET');

    req.flush(dummyProducts);
  });
});
