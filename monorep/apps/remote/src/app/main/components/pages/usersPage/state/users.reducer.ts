import { Action, createReducer, on } from "@ngrx/store";
import { initialState, UsersStateI } from "./users.state";
import { getUsersSuccess, setUsersLoader } from "./users.actions";

const _usersReducer = createReducer(initialState,
  on(getUsersSuccess, (state, action) => ({
      ...state,
      users: action.users
  })),
  on(setUsersLoader, (state, action) => ({
      ...state,
      isLoading: action.isLoading
  }))
)


export function usersReducer(state: UsersStateI, action: Action) {
  return _usersReducer(state, action)
}
