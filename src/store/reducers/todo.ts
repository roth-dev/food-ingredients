
export enum type {
  SET_TODO = "SET_TODO"
}
export interface TodoState {
  todo: any[]
}
interface Action<T> {
  type: string
  payload: T
}

export type VideoActions = Action<TodoState>;

const initailState: TodoState = {
  todo: [],
};
const videoReducers = (state: TodoState = initailState, action: VideoActions): TodoState => {
  switch (action.type) {
    case type.SET_TODO:
      action = <Action<TodoState>>action;
      return {
        ...state,
        todo: []
      };

    default:
      return initailState
  }
};

export default videoReducers;