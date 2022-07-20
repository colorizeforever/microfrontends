import { Injectable } from "@angular/core";
import {UsersService} from "../users.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  getUsers,
  getUsersSuccess,
  setUsersLoader
} from "./users.actions";
import { exhaustMap, map } from "rxjs";
import { Store } from "@ngrx/store";
import { UsersStateI } from "./users.state";

@Injectable()

export class UsersEffects {
  constructor(
    private service: UsersService,
    private action$: Actions,
    private store: Store<UsersStateI>
  ) {
  }

  private getUsers$ = createEffect(() =>
    this.action$
      .pipe(
        ofType(getUsers),
        exhaustMap((action) => {
          this.store.dispatch(setUsersLoader({isLoading: true}))
          return this.service.getUsers(action.page, action.limit)
            .pipe(
              map((users) => {
                this.store.dispatch(setUsersLoader({isLoading: false}))
                return getUsersSuccess({ users })
              })
            )
        })
      )
  )

}
