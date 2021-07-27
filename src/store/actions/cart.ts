import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "..";
import { CartAction, CartItems } from "../reducers/cart";
import { Type } from "../type";



export function addToCart(prodId: string, catId: string, qty: number): ThunkAction<void, RootState, {}, CartAction> {
  return (dispatch: ThunkDispatch<void, {}, CartAction>, getState: () => RootState) => {
    const { cart } = getState();

    dispatch({
      type: Type.ADD_TO_CART,
      payload: { cartItems: [] }
    })
  };
}