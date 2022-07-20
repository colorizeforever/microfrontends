import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserKeys, UserResponseI } from "../../../../models/users.model";
import { usersKeys } from "../../../../constants/constants";
import { UsersService } from "./users.service";
import { UsersSandbox } from "./state/users.sandbox";
import { PaginatorEventI } from "../../../../models/matPaginator.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
   usersList$: Observable<UserResponseI[]> = this.usersSandbox.usersList$
   length$: Observable<number> = this.usersSandbox.length$
   loader$: Observable<boolean> = this.usersSandbox.loader$
   usersHeader = usersKeys
   sortField: UserKeys = 'name';
   sortEnabled: boolean = false;
   sortDirection: string = 'asc';

  constructor(
    private usersService: UsersService,
    private readonly usersSandbox: UsersSandbox
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  private getUsers(count: number = 8, offset: number = 1): void {
    this.usersSandbox.setPage(count, offset)
  }

  public pageOptions(event: PaginatorEventI): void {
    const { pageIndex, pageSize } = event
    this.getUsers(pageIndex, pageSize)
  }

  public setSortField(field: UserKeys): void {
    this.sortEnabled = true;
    this.sortField = field;
  }

  public setSortDirection(direction: string): void {
    this.sortDirection = direction;
  }
}
