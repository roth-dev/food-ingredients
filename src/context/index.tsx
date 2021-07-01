import React, { createContext, useReducer } from 'react';

export const ActionTypes = {
  APP_SET_TOKEN: "APP_SET_TOKEN",
  APP_SET_LOGUOT: "APP_SET_LOGUOT",
  APP_SET_STATE: "APP_SET_STATE"
}
export interface IContextAction {
  type: string,
  payload?: any
}

interface Props {
  children: JSX.Element
}

interface IContextState {
  token?: string | null,
}

interface IContextActions {
  logout: () => void
  setToken: (token: string) => void
  setState: (state: IContextState) => void,

}

export type ApplicationContext = IContextState & IContextActions

const initailState: ApplicationContext = {
  token: null,
  logout: () => { },
  setState: (state: IContextState) => { },
  setToken: (token: string) => { },
}

export const AppCreateContext = createContext<ApplicationContext>(initailState);

export const ContextProvider = AppCreateContext.Provider;
export const ContextConsumer = AppCreateContext.Consumer;

export default ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    (prevState: IContextState, action: IContextAction) => {
      switch (action.type) {
        case ActionTypes.APP_SET_STATE:
          return { ...prevState, ...action.payload }
        case ActionTypes.APP_SET_TOKEN:
          return { ...prevState, token: action.payload.token };
        case ActionTypes.APP_SET_LOGUOT:
          return { ...prevState, ...action.payload };
        default:
          return prevState
      }
    },
    initailState
  );
  const context: ApplicationContext = {
    token: state.token,
    logout: () => {
      dispatch({ type: ActionTypes.APP_SET_LOGUOT, payload: { token: null } })
    },
    setToken: (token: string) => {
      dispatch({ type: ActionTypes.APP_SET_TOKEN, payload: { token } })
    },
    setState: (state: IContextState) => {
      console.log(state)
      dispatch({ type: ActionTypes.APP_SET_STATE, payload: { ...state } })
    },

  }
  return (
    <ContextProvider value={context} >
      {children}
    </ContextProvider>
  )
}




