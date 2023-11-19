import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserApiService } from './user-api.service';
import { User } from '@softech/shared-interfaces';

describe('UserApiService', () => {
  let userApiService: UserApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserApiService],
    });

    userApiService = TestBed.inject(UserApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(userApiService).toBeTruthy();
  });

  it('should retrieve users from the API', () => {
    const dummyUsers: User[] = [
      {
        "Id": "5432-3425-1234",
        "Name": "Hossam Ramadan",
        "Email": "HossamRamadan2010@live.com",
        "Phone": "01025485522",
        "Address": "236A Al Labeini, Al Haraneyah, Giza District, Giza Governorate",
        "RegisterDate": "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
      },
      {
        "Id": "9179-2312-3421",
        "Name": "Hoda Ahmed",
        "Email": "HodaHoda2020@gmail.com",
        "Phone": "01256633333",
        "Address": "25 Street 214, Maadi as Sarayat Al Gharbeyah, Maadi, Cairo Governorate",
        "RegisterDate": "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
      },
    ];

    userApiService.getAllUsers().subscribe((users) => {
      expect(users).toEqual(dummyUsers);
    });

    const req = httpTestingController.expectOne('assets/server/users.json');
    expect(req.request.method).toBe('GET');

    req.flush(dummyUsers);
  });
});
