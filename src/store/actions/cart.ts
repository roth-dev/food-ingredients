import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "..";
import { CartAction } from "../reducers/cart";
import { CartItems, Type } from "../type";

function getTotalAmount(cartItem: CartItems[]) {
  return cartItem.map((item) => item.price).reduce((a, b) => a + b, 0)
}

export function addToCart(
  cartItems: CartItems
): ThunkAction<void, RootState, {}, CartAction> {
  return (
    dispatch: ThunkDispatch<void, {}, CartAction>,
    getState: () => RootState
  ) => {
    const state = getState();
    const newCartItems = [cartItems, ...state.cart.cartItems];
    const totalAmount = getTotalAmount(newCartItems);
    dispatch({
      type: Type.ADD_TO_CART,
      payload: { cartItems: newCartItems, cartTotalAmount: totalAmount },
    });
  };
}

export function removeCartItem(
  cartId: string
): ThunkAction<void, RootState, {}, CartAction> {
  return (
    dispatch: ThunkDispatch<void, {}, CartAction>,
    getState: () => RootState
  ) => {
    const state = getState();
    const newCartItems = state.cart.cartItems.filter((item) => item.id !== cartId);
    const totalAmount = getTotalAmount(newCartItems)
    dispatch({
      type: Type.REMOVE_FROM_CART,
      payload: { cartItems: newCartItems, cartTotalAmount: totalAmount },
    });
  };
}

