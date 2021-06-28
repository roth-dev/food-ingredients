import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

export const VERSION = Platform.Version
export const IOS = Platform.OS === 'ios'
export const ANDROID = Platform.OS === 'android'

export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height >= 812 || width >= 812)
  );
}

export function ifIphoneX(
  iphoneXStyle: boolean,
  regularStyle: object) {

  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function isIphone7() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height < 812 || width < 812)
  );
}

export function isAndroid() {
  return Platform.OS === 'android';
}

export function ifAndroid(
  androidStyle: boolean,
  regularStyle: object) {
  if (isAndroid()) {
    return androidStyle;
  }
  return regularStyle;
}