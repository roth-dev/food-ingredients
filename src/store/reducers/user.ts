
import { Type } from '../type';

interface IUser {
  _id?: string,
  confirmed?: boolean,
  blocked?: boolean,
  username?: string,
  email?: string,
  provider?: string,
  createdAt?: string,
  updatedAt?: string,
  image?: Image
  phone?: number
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
  // rols?: Rols

}

export interface UserState {
  user?: IUser
  token?: string | null
}
interface Action<T> {
  type: string
  payload?: T
}

export type UserActions = Action<UserState>;

const initailState: UserState = {
  user: {},
  token: null,
};
const userReducers = (state: UserState = initailState, action: UserActions): UserState => {
  const { payload } = <Action<UserState>>action;

  switch (action.type) {
    case Type.SET_USER:
      return {
        ...state,
        user: payload?.user,
        token: payload?.token,
      };
    case Type.LOGOUT:
      return initailState;
    default:
      return state
  }
};

export default userReducers;