import { Type } from '../type';
import { Action } from '../reducers/favorite'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '..';

export const toggleFavorite = (prodId: string, catId: string): ThunkAction<void, RootState, {}, Action> => {
  return (dispatch: ThunkDispatch<void, {}, Action>, getState: () => RootState) => {
    const state = getState();
    const { items } = state.favorite
    const category = state.categories.categories?.filter((cat) => cat.id === catId);
    const product = category[0].products?.filter((prod) => prod.id === prodId);
    const index = items.findIndex((item) => item.id === prodId);
    let arr = [...product!, ...items]
    if (index > -1) {
      arr = items.filter((i) => i.id !== prodId);
    }
    dispatch({
      type: Type.TOGGLE_FAVORITE,
      payload: { items: arr }
    });
  }
}