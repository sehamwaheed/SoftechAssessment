import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@softech/shared-interfaces';

@Pipe({
  name: 'getUser'
})
export class GetUserNamePipe implements PipeTransform {

  transform(id: string, users: User[]): User | undefined {
    return users.find(user=>user.Id == id);
  }

}
