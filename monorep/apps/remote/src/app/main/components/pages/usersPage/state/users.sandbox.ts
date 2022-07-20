import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserResponseI } from "../../../../../models/users.model";
import { getUsers } from "./users.actions";
import { getUsersList, getUsersLoader, getUserTotal } from "./users.selectors";
import { UsersStateI } from "./users.state";


@Injectable({
  providedIn: 'root'
})

export class UsersSandbox {
  public usersList$: Observable<UserResponseI[]> = this.store.select(getUsersList)
  public length$: Observable<number> = this.store.select(getUserTotal)
  public loader$: Observable<boolean> = this.store.select(getUsersLoader)

  constructor(
    private readonly store: Store<UsersStateI>
  ) { }

  setPage(page: number, limit: number): void {
    this.store.dispatch(getUsers({page: page, limit: limit}))
  }

}
