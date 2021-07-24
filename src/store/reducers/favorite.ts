import { Products } from "../../models/products";
import { Type, SuccessAction } from '../type';

export interface FavoriteState {
  items: Products[]
}

export type Action = SuccessAction<FavoriteState>;

const initailState: FavoriteState = {
  items: [],
}

export default (state: FavoriteState = initailState, action: Action): FavoriteState => {
  switch (action.type) {
    case Type.TOGGLE_FAVORITE:
      const actions = <SuccessAction<FavoriteState>>action
      return {
        ...state,
        items: actions.payload.items,
      }
    default:
      return state;
  }
}