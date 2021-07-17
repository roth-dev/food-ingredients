import {
  Route,
  NavigationProp,
  NavigationState
} from '@react-navigation/native';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import Validate from '../utils/validate';

export interface INavigationProps extends NavigationProp<Record<string, object>, string, NavigationState, {}, {}> { }
export interface IButtonHeader {
  icon: string,
  onPress?: () => void,
  position?: 'left' | 'right',
  style?: StyleProp<ViewStyle>,
  iconStyle?: StyleProp<TextStyle>,
  font?: 'solid' | 'regular' | 'light'
}

interface IOptions extends StackHeaderOptions {
  title?: string,
  buttonLefts?: IButtonHeader[]
  buttonRights?: IButtonHeader[]
}

export interface INavigation extends StackNavigationProp<Record<string, object | undefined>> {
  setOptions: (options: IOptions) => void
}

export interface INavigationScreenProps {
  route: Route<string>,
  navigation: INavigation
}

export const getRouteParam = (props: any) => {
  let obj = {};
  if (!Validate.isEmpty(props.route.params)) {
    obj = props.route.params;
  }
  // @ts-ignore
  return (param, value: any = null) => obj[param] !== undefined ? obj[param] : value;
}