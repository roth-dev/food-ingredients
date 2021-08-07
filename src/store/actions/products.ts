import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "..";
import API from "../../api/API";
import { CategoryAction, CategoryState } from "../reducers/categories";

export const SET_PRODUCTS = "SET_PRODUCTS";

export const fetchSuccess = (data: CategoryState): CategoryAction => {
  return {
    type: SET_PRODUCTS,
    payload: { categories: data.categories },
  };
};

export const getCategories = (): ThunkAction<
  Promise<void>,
  RootState,
  {},
  CategoryAction
> => {
  return async (
    dispatch: ThunkDispatch<Promise<void>, {}, CategoryAction>,
    getState: () => RootState
  ) => {
    const rs = await API.get("products");
    // const data = {
    //   categories: rs.data
    // }
    // dispatch(fetchSuccess(data))
  };
};
