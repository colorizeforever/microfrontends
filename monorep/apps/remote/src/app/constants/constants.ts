import {UserKeys} from "../models/users.model";

export const storageKey = 'isAuthenticated'
export const navBarElements = [
  {icon: 'poll', route: 'dashboard', name: 'Graphics'},
  {icon: 'dashboard', route: 'users', name: 'Users'},
]
export const usersKeys: UserKeys[]  = ['name', 'age', 'trips', 'country', 'nickname', 'company', 'skills', 'gender']
