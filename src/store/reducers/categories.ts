import { Category } from "../../models/categories"
import { SET_CATEGORIES } from "../actions/categories"


export interface CategoryState {
  categories?: Category[]
}

interface Action<T> {
  type: string
  payload?: T
}

export type CategoryAction = Action<CategoryState>

const initState: CategoryState = {
  categories: []
}

const CategoryReducer = (state: CategoryState = initState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case SET_CATEGORIES:
      const { payload } = <Action<CategoryState>>action
      return {
        ...state,
        categories: payload?.categories
      }
    default:
      return state
  }

}

export default CategoryReducer