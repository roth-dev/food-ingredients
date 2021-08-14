import { ThunkAction, ThunkDispatch } from "redux-thunk";
import API from "../../api/API";
import { RootState } from "../index";
import { Type } from "../type";
import { OrderActions } from "../reducers/orders";

function generateNumber() {
  return Math.floor(Math.random() * 1000);
}

export const success = (data: any): OrderActions => {
  return {
    type: Type.CREATE_ORDERS,
    payload: { orderDetail: data },
  };
};
export const createOrder = (): ThunkAction<
  Promise<void>,
  RootState,
  {},
  OrderActions
> => {
  return async (
    dispatch: ThunkDispatch<Promise<void>, {}, OrderActions>,
    getState: () => RootState
  ) => {
    const state = getState();
    const { user } = state.user;
    const { cartItems, cartTotalAmount } = state.cart;
    try {
      const rs = await API.post("orders", {
        orderstatus: "PENDING",
        note: "I need more spicies",
        deliveries: "60eabf1e266fab394824c1dd",
        users_permissions_user: user?._id,
        ordernumber: generateNumber(),
        address: "phumi ta vean,siem reap",
      });
      const data = rs.data;
      const productId = cartItems.map((item) => item.id);
      const res = await API.post("orderdetails", {
        order: data._id,
        products: productId,
        qty: productId.length,
        total: cartTotalAmount,
        unitprice: cartTotalAmount,
        discount: 0,
      });
      dispatch({
        type: Type.CREATE_ORDERS,
        payload: { orderDetail: res.data, orders: data },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const getOrder = (): ThunkAction<
  Promise<void>,
  RootState,
  {},
  OrderActions
> => {
  return async (
    dispatch: ThunkDispatch<Promise<void>, {}, OrderActions>,
    getState: () => RootState
  ) => {
    try {
      const res = await API.get("orderdetails");
      dispatch({
        type: Type.GET_ORDERS,
        payload: { orderx: res.data },
      });
    } catch (e) {}
  };
};
