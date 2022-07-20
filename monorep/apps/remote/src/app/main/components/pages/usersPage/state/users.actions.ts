import { createAction, props } from "@ngrx/store";
import { UsersI } from "../../../../../models/users.model";

export const GET_USERS = '[users page] get users'
export const GET_USERS_SUCCESS = '[users page] get users success'
export const GET_USERS_IS_LOADING = '[users page] is loading'

export const getUsers = createAction(GET_USERS,
  props<{ page: number, limit: number }>()
)

export const getUsersSuccess = createAction(GET_USERS_SUCCESS,
  props<{ users: UsersI }>()
)

export const setUsersLoader = createAction(GET_USERS_IS_LOADING,
  props<{isLoading: boolean}>()
)
