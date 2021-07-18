
import { type } from '../actions/user'

interface IUser {
  _id?: string,
  confirmed?: boolean,
  blocked?: boolean,
  username?: string,
  email?: string,
  provider?: string,
  createdAt?: string,
  updatedAt?: string,
}
interface Rols {
  _id?: string,
  name?: string,
  description?: string,
  type?: string,
  __v?: number,
  id?: string
}
interface Image {
  _id?: string,
  name?: string,
  alternativeText?: string,
  caption?: string,
  hash?: string,
  ext?: string,
  mime?: string,
  size?: number,
  width?: number,
  height?: number,
  url?: string,
}
export type User = {
  jwt?: string
  user?: IUser
  rols?: Rols
  phone?: number
  image?: Image
}
export interface UserState {
  user: User
}
interface Action<T> {
  type: string
  payload: T
}

export type UserActions = Action<UserState>;

const initailState: UserState = {
  user: {},
};
const userReducers = (state: UserState = initailState, action: UserActions): UserState => {
  switch (action.type) {
    case type.SET_USER:
      action = <Action<UserState>>action;
      return {
        ...state,
        user: {}
      };

    default:
      return state
  }
};

export default userReducers;