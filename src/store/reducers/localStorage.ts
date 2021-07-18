import { SET_TOKEN, LOGOUT } from "../actions/localStorage";
export interface LocalState {
  token?: string | null
}
interface Action<T> {
  type: string
  payload?: T
}

export type LocalActions = Action<LocalState>;
const initState: LocalState = {
  token: null
}

const localStorageReducer = (state: LocalState = initState, action: LocalActions): LocalState => {
  switch (action.type) {
    case SET_TOKEN:
      const actions = <Action<LocalState>>action;
      return {
        ...state,
        token: actions.payload?.token
      }
    case LOGOUT:
      return {
        ...state,
        token: null
      }
    default:
      return state
  }
}

export default localStorageReducer