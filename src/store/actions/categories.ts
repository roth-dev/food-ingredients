import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "..";
import API from "../../api/API";
import { CategoryAction, CategoryState } from "../reducers/categories";

export const SET_CATEGORIES = "SET_CATEGORIES";

export const fetchSuccess = (data: CategoryState): CategoryAction => {
  return {
    type: SET_CATEGORIES,
    payload: { categories: data.categories, loading: false },
  };
};
const fetchFailure = (): CategoryAction => {
  return {
    type: SET_CATEGORIES,
    payload: { categories: [], loading: false },
  };
}
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
    try {
      const rs = await API.get("categories");
      const data = {
        categories: rs.data,
      };
      dispatch(fetchSuccess(data));
    }
    catch (error) {
      dispatch(fetchFailure());
      throw new Error(error.message);
    }

  };
};
