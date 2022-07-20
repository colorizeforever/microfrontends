import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersStateI } from "./users.state";

export const USERS_STATE_NAME = 'passengers'

const getUsersState = createFeatureSelector<UsersStateI>(USERS_STATE_NAME)

export const getUsersData = createSelector(getUsersState, (state) => {
  return state.users;

})

export const getUsersLoader = createSelector(getUsersState, (state) => {
  return state.isLoading;
})

export const getUsersList = createSelector(getUsersState, (state) => {
  return state.users.results
})

export const getUserTotal = createSelector(getUsersState, (state) => {
  return state.users.total
})

