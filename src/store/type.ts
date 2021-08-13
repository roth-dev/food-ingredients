import { Products } from "../models/products";

export enum Type {
  LOGOUT = "LOGOUT",
  SET_USER = "SET_USER",
  SET_PRODUCTS = "SET_PRODUCTS",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  TOGGLE_FAVORITE = "TOGGLE_FAVORITE",
  REMOVE_FAVORITE = "REMOVE_FAVORITE",
  CREATE_ORDERS = "CREATE_ORDERS",
}

export type SuccessAction<T> = {
  type: string;
  payload?: T;
};

export type FailureAction<T> = {
  type: string;
  payload: T;
};

export interface CartItems extends Products {
  qty: number;
}
