import { Component, OnInit, inject } from '@angular/core';
import { UserApiService } from '@softech/apis';
import { User } from '@softech/shared-interfaces';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users$: Observable<User[]> | undefined
  userService = inject(UserApiService);
  constructor() { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.users$ =  this.userService.getAllUsers();
  }
 
}
