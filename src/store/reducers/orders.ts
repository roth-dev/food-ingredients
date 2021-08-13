import { SuccessAction, Type } from "../type";

export type OrderState = {
  orders?: object | null;
  orderDetail?: object | null;
};

export type OrderActions = SuccessAction<OrderState>;
const initailState: OrderState = {
  orders: null,
  orderDetail: null,
};

const orders = (
  state: OrderState = initailState,
  action: OrderActions
): OrderState => {
  const { payload } = <SuccessAction<OrderState>>action;
  switch (action.type) {
    case Type.CREATE_ORDERS:
      return {
        orders: payload?.orders,
        orderDetail: payload?.orderDetail,
      };
    default:
      return state;
  }
};

export default orders;
