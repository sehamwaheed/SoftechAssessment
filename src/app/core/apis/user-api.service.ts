import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '@softech/shared-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private http = inject(HttpClient);

  public getAllUsers(){
    return this.http.get<User[]>('assets/server/users.json')
  }
}
