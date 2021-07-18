import { ThunkAction, ThunkDispatch } from "redux-thunk"
import API from "../../api/API";
import { RootState } from "../index";
import { User, UserActions } from '../reducers/user';
import { UserInput } from "../../models/user";
import { setToken } from "./localStorage";
export const type = {
  SET_USER: "SET_USER"
}
export const success = (user: User): UserActions => {
  return {
    type: type.SET_USER,
    payload: { user }
  }
}
export const login = (user: UserInput): ThunkAction<Promise<void>, RootState, {}, UserActions> => {
  return async (dispatch: ThunkDispatch<Promise<void>, {}, UserActions>, getState: () => RootState) => {
    try {
      const rs = await API.post<{ jwt: string, user: object }>("auth/local", {
        identifier: user.identifier,
        password: user.password
      },
      )
      dispatch(setToken(rs.data.jwt))
      // dispatch(success(rs.data.user))
    } catch {
      throw new Error("Something when wrong!")
    }

    // dispatch(sucess())
  }
}