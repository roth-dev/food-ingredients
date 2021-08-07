import { CartItems, SuccessAction, Type } from "../type";

export interface CartState {
  cartItems: CartItems[];
  cartTotalAmount?: number;
}

export type CartAction = SuccessAction<CartState>;
export const cartState: CartState = {
  cartItems: [],
  cartTotalAmount: 0,
};

export default function cartReducer(
  state: CartState = cartState,
  action: CartAction
): CartState {
  const { payload } = <SuccessAction<CartState>>action
  switch (action.type) {
    case Type.ADD_TO_CART:
      return {
        ...state,
        cartItems: payload.cartItems,
        cartTotalAmount: payload.cartTotalAmount,
      };
    case Type.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: payload.cartItems,
        cartTotalAmount: payload.cartTotalAmount,
      };
    default:
      return state;
  }
}
