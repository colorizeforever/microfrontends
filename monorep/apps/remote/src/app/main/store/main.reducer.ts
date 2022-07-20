import {Action, createReducer} from "@ngrx/store";

export const MAIN_STATE = 'MAIN_STATE'
const initialState = '';

const _dashBoardReducer = createReducer(initialState)

export function dashBoardReducer(state: any, action: Action) {
  return _dashBoardReducer(state, action)
}
