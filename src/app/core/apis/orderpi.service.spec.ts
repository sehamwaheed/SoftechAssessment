import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
import { Order } from '@softech/shared-interfaces';
import { OrderApiService } from './orderpi.service';

describe('OrderApiService', () => {
  let orderApiService: OrderApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderApiService],
    });

    orderApiService = TestBed.inject(OrderApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(orderApiService).toBeTruthy();
  });

  it('should retrieve orders from the API', () => {
    const dummyOrders : Order[] = [
      {
        "OrderId": 1253,
        "OrderDate": "Sun Jul 22 2019 01:55:37 GMT+0200(Eastern European Standard Time)",
        "UserId": "5432-3425-1234",
        "Products": [
          {
            "ProductId": 141,
            "Quantity": 3
          },
          {
            "ProductId": 130,
            "Quantity": 1
          }
        ],
        "PaymentType": "Cash"
      },
      {
        "OrderId": 1254,
        "OrderDate": "Fri Jul 20 2019 12:55:37 GMT+0200(Eastern European Standard Time)",
        "UserId": "5432-3425-1234",
        "Products": [
          {
            "ProductId": 141,
            "Quantity": 3
          },
          {
            "ProductId": 130,
            "Quantity": 1
          }
        ],
        "PaymentType": "online"
      },
    ];

    orderApiService.getAllOrders().subscribe((orders) => {
      expect(orders).toEqual(dummyOrders);
    });

    const req = httpTestingController.expectOne('assets/server/orders.json');
    expect(req.request.method).toBe('GET');

    req.flush(dummyOrders);
  });

  it('should retrieve an order by ID from the API', () => {
    const orderId = 1253;
    const dummyOrders : Order[] = [
      {
        "OrderId": 1253,
        "OrderDate": "Sun Jul 22 2019 01:55:37 GMT+0200(Eastern European Standard Time)",
        "UserId": "5432-3425-1234",
        "Products": [
          {
            "ProductId": 141,
            "Quantity": 3
          },
          {
            "ProductId": 130,
            "Quantity": 1
          }
        ],
        "PaymentType": "Cash"
      },
      {
        "OrderId": 1254,
        "OrderDate": "Fri Jul 20 2019 12:55:37 GMT+0200(Eastern European Standard Time)",
        "UserId": "5432-3425-1234",
        "Products": [
          {
            "ProductId": 141,
            "Quantity": 3
          },
          {
            "ProductId": 130,
            "Quantity": 1
          }
        ],
        "PaymentType": "online"
      },
    ];

    orderApiService.getOrderById(orderId).subscribe((order) => {
      expect(order).toEqual(dummyOrders[0]);
    });

    const req = httpTestingController.expectOne('assets/server/orders.json');
    expect(req.request.method).toBe('GET');

    req.flush(dummyOrders);
  });
});
