import * as React from 'react';
import {
  StackActions,
  NavigationContainerRef, NavigationAction
} from '@react-navigation/native';
import { MainParamList, AuthParamList, DeliveryParamList } from './ParamList';
type SuperParamList = MainParamList & AuthParamList & DeliveryParamList
export const navigationRef:
  React.RefObject<NavigationContainerRef<SuperParamList>> = React.createRef();

export function navigate(name: keyof SuperParamList, params?: object): void {
  navigationRef.current?.navigate(name, params);
}

export function dispatch(action: NavigationAction): void {
  navigationRef.current?.dispatch(action);
}

export function replace(name: keyof SuperParamList, params?: object): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function push(name: keyof SuperParamList, params?: object): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function goBack(): void {
  navigationRef.current?.canGoBack() && navigationRef.current?.goBack();
}
