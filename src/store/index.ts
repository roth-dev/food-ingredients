import { combineReducers, createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import TodoReducer, { TodoState } from './reducers/todo'
import UserReducer, { UserState } from './reducers/user';
import localStorageReducer, { LocalState } from './reducers/localStorage';
import CategoryReducer, { CategoryState } from './reducers/categories'
import FavoriteReducer, { FavoriteState } from './reducers/favorite'
export type AppState = {
  todo: TodoState,
  user: UserState,
  localStorage: LocalState,
  categories: CategoryState,
  favorite: FavoriteState,
}
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['localStorage'],
};

const rootReducer = combineReducers<AppState>({
  todo: TodoReducer,
  user: UserReducer,
  categories: CategoryReducer,
  localStorage: localStorageReducer,
  favorite: FavoriteReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<ReturnType<
  typeof rootReducer
>> = useReduxSelector;
export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector