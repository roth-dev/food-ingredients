import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { LocalActions } from "../reducers/localStorage"

export const SET_TOKEN = "SET_TOKEN"
export const LOGOUT = "LOGOUT"

export const setToken = (jwt: string): ThunkAction<void, {}, {}, LocalActions> => {
  return (dispatch: ThunkDispatch<void, {}, LocalActions>) => {
    dispatch({ type: SET_TOKEN, payload: { token: jwt } })
  }
}

export const logout = (): ThunkAction<void, {}, {}, LocalActions> => {
  return (dispatch: ThunkDispatch<void, {}, LocalActions>) => {
    dispatch({ type: LOGOUT })
  }
}