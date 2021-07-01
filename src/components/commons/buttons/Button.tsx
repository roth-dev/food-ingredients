import React from 'react';
import {
  TouchableOpacity,
  ViewStyle, StyleProp,
  StyleSheet, TextStyle,
  ImageSourcePropType,
  Image, ImageStyle,
} from 'react-native';
import Label from '../labels/Label';
import { FontAwesome } from '../fontawesome';
import { Themes, Colors } from '../../../styles';
import { HPADDING, PADDING } from '../../../styles/scale';
import { FONT_SIZE_16, FONT_SMALL } from '../../../styles/Typography';
import LoadingOverlay from '../loading/OverlayLoading'
const styles = StyleSheet.create({
  btn: {
    borderRadius: 3,
    padding: PADDING,
    paddingVertical: HPADDING,
    flexDirection: 'row',
    backgroundColor: Colors.PRIMARY
  },
  font: {
    color: '#FFF',
    fontSize: FONT_SMALL,
  },
  img: {
    width: FONT_SMALL,
    height: FONT_SMALL,
    resizeMode: 'contain',
  },
  loading: {
    flex: 1,
    padding: HPADDING
  },
  loadingText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: FONT_SIZE_16,
  }
});

export interface IButton {
  title?: string,
  leftIcon?: string,
  rightIcon?: string,
  font?: 'solid' | 'regular' | 'light',
  loadingSize?: number
  style?: StyleProp<ViewStyle>,
  iconStyle?: StyleProp<TextStyle>,
  textStyle?: StyleProp<TextStyle>,
  leftIconStyle?: StyleProp<TextStyle>,
  rightIconStyle?: StyleProp<TextStyle>,

  loading?: boolean,
  loadingStyle?: StyleProp<ViewStyle>
  disabled?: boolean,
  onPress?: () => void,
  bold?: boolean,
  imageStyle?: StyleProp<ImageStyle>
  leftSource?: ImageSourcePropType,
  rightSource?: ImageSourcePropType,
}

export default function Button(props: IButton) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.btn, Themes.CENTER, props.style]}
    >
      {props.leftSource ?
        <Image
          source={props.leftSource}
          style={[styles.img, { marginRight: PADDING }, props.imageStyle]}
        /> : null}
      {props.leftIcon && !props.loading ?
        <FontAwesome
          font={props.font}
          icon={props.leftIcon}
          style={[
            { marginRight: PADDING },
            styles.font,
            props.iconStyle,
            props.leftIconStyle
          ]}
        /> : null}
      {props.title ?
        <Label bold={props.bold} style={[
          styles.font,
          props.textStyle
        ]}>{props.title}</Label> : null}
      {props.rightIcon && !props.loading ?
        <FontAwesome
          font={props.font}
          icon={props.rightIcon}
          style={[
            { marginLeft: PADDING },
            styles.font,
            props.iconStyle,
            props.rightIconStyle
          ]}
        /> : null}
      {props.rightSource ?
        <Image
          source={props.rightSource}
          style={[styles.img, { marginLeft: PADDING }, props.imageStyle]}
        /> : null}
      {props.loading ?
        <LoadingOverlay loading={props.loading} />
        : null}
    </TouchableOpacity>
  );
}