import { Pipe, PipeTransform } from '@angular/core';
import { UserKeys, UserResponseI } from '../models/users.model';
@Pipe({name:'sort'})

export class SortPipe implements PipeTransform{
  transform(value: UserResponseI[], sortEnabled: boolean, sortDirection: string, sortField: UserKeys): UserResponseI[]{
    return [...value]
      .sort((a: UserResponseI, b: UserResponseI) => {
        if (!sortEnabled) {
          return 0;
        }
        if (sortDirection === "asc") {
          return a[sortField] > b[sortField] ? 1 : -1;
        }
        return a[sortField] > b[sortField] ? -1 : 1;
      });
  }

}
