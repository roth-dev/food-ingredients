import { combineReducers, createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import ReduxThunk from "redux-thunk";
import UserReducer, { UserState } from "./reducers/user";
import localStorageReducer, { LocalState } from "./reducers/localStorage";
import CategoryReducer, { CategoryState } from "./reducers/categories";
import FavoriteReducer, { FavoriteState } from "./reducers/favorite";
import cartReducer, { CartState } from "./reducers/cart";
import orderReducer, { OrderState } from "./reducers/orders";
export type AppState = {
  user: UserState;
  localStorage: LocalState;
  categories: CategoryState;
  favorite: FavoriteState;
  cart: CartState;
  orders: OrderState;
};
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["localStorage", "favorite", "cart", "user"],
};

const rootReducer = combineReducers<AppState>({
  user: UserReducer,
  categories: CategoryReducer,
  localStorage: localStorageReducer,
  favorite: FavoriteReducer,
  cart: cartReducer,
  orders: orderReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> =
  useReduxSelector;
export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
