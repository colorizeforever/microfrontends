import { UsersI } from "../../../../../models/users.model";

export interface UsersStateI {
  users: UsersI,
  isLoading: boolean,
}

export const initialState: UsersStateI = {
  users: {
    total: 0,
    results: []
  },
  isLoading: false,
}
