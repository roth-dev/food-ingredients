import { Products } from "../../models/products";
import { SuccessAction, Type } from "../type";

export interface CartItems extends Products {
  qty: number;
}
export interface CartState {
  cartItems: CartItems[];
  cartTotalAmount?: number;
}

export type CartAction = SuccessAction<CartState>
export const cartState: CartState = {
  cartItems: [],
  cartTotalAmount: 0,
}

export default function cartReducer(
  state: CartState = cartState,
  action: CartAction): CartState {
  switch (action.type) {
    case Type.ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems
      };
    case Type.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
}