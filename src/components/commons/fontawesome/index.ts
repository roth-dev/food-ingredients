import { StyleProp, TextStyle } from 'react-native';
export interface IFontAwesome {
    icon: string,
    color?: string,
    style?: StyleProp<TextStyle>,
    font?: 'solid' | 'regular' | 'light' | 'brand',
}

export { default as Icons } from './Icons';
export { default as FontAwesome } from './FontAwesome';