import { SuccessAction, Type } from "../type";

export type OrderState = {
  orders?: object | null;
  orderDetail?: object | null;
  orderx?: Array<any>;
};

export type OrderActions = SuccessAction<OrderState>;
const initailState: OrderState = {
  orders: [] || null,
  orderDetail: null,
  orderx: [],
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
    case Type.GET_ORDERS:
      return {
        orderx: payload?.orderx,
      };
    default:
      return state;
  }
};

export default orders;
