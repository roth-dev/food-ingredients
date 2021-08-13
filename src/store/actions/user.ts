import { ThunkAction, ThunkDispatch } from "redux-thunk";
import API from "../../api/API";
import { RootState } from "../index";
import { User, UserActions } from "../reducers/user";
import { UserInput } from "../../models/user";
import { Type } from "../type";

export const success = (data: User): UserActions => {
  return {
    type: Type.SET_USER,
    payload: { user: data.user, token: data.jwt },
  };
};
export const login = (
  user: UserInput
): ThunkAction<Promise<void>, RootState, {}, UserActions> => {
  return async (
    dispatch: ThunkDispatch<Promise<void>, {}, UserActions>,
    getState: () => RootState
  ) => {
    try {
      const rs = await API.post<{ jwt: string; user: object }>("auth/local", {
        identifier: user.identifier,
        password: user.password,
      });
      dispatch(success(rs.data))
    } catch {
      throw new Error("Something when wrong!");
    }
  };
};
export const logout = (): ThunkAction<void, {}, {}, UserActions> => {
  return (dispatch: ThunkDispatch<void, {}, UserActions>) => {
    dispatch({ type: Type.LOGOUT })
  }
}
export const createUser =(
  user: UserInput
  ):ThunkAction<Promise<void>, RootState, {}, UserActions> => {
  return async (
    dispatch: ThunkDispatch<Promise<void>, {}, UserActions>,
    getState: () => RootState
  ) => {
    try {
      const rs = await API.post<{ jwt: string; user: object }>("auth/local/register", {
        username: user.username,
        email:user.email,
        phonenumber:user.phonenumber,
        password: user.password,
      });
      dispatch(success(rs.data))
    } catch {
      throw new Error("Something when wrong!");
    }
  };
};
export const updateUser =(
  user:UserInput
):ThunkAction<Promise<void>, RootState, {}, UserActions> => {
  return async (
    dispatch: ThunkDispatch<Promise<void>, {}, UserActions>,
    getState: () => RootState
  ) => {
    try {
      const rs = await API.post<{ jwt: string; user: object }>("auth/local/register", {
        
        username: user.username,
        email:user.email,
        phonenumber:user.phonenumber,
      });
      dispatch(success(rs.data))
    } catch {
      throw new Error("Something when wrong!");
    }
  };
};