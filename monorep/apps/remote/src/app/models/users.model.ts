export interface UsersI {
  total: number
  results: UserResponseI[]
}

export interface UserResponseI {
  name: string,
  _id: string,
  age: number,
  country: string,
  trips: number,
  nickname: string,
  company: string,
  skills: string,
  gender: string,
}

export type UserKeys = keyof UserResponseI
