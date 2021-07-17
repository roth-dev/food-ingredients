import { ThunkAction, ThunkDispatch } from "redux-thunk"
import API from "../../api/API";
import { RootState } from "../index";
import { User, UserActions } from '../reducers/user';
import axios from "axios";
export const type = {
  SET_USER: "SET_USER"
}
export const success = (user: User): UserActions => {
  return {
    type: type.SET_USER,
    payload: { user }
  }
}
export const getUser = (): ThunkAction<Promise<void>, RootState, {}, UserActions> => {
  return async (dispatch: ThunkDispatch<Promise<void>, {}, UserActions>, getState: () => RootState) => {
    try {
      const respone = await axios.post("https://sarona-backend.herokuapp.com/auth/local", {
        identifier: "roth.dev.ops@gmail.com",
        pasword: "rothdev@123"
      },
      ).then((res) => {
        console.log(res)
      }).catch((er) => {
        console.log({ ...er })
      })
    } catch {
      throw new Error("Something when wrong!")
    }

    // dispatch(sucess())
  }
}