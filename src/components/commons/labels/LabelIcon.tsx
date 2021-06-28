import React from 'react';
import {
  View, TextProps,
  ViewStyle, StyleProp,
  StyleSheet, TextStyle,
} from 'react-native';
import Label from '../labels/Label';
import { FontAwesome } from '../fontawesome';
import { PADDING } from '../../../styles/scale';
import { Themes, Colors } from '../../../styles';
import { FONT_SIZE_13, FONT_SIZE_15 } from '../../../styles/Typography';

const styles = StyleSheet.create({
  font: {
    color: Colors.TEXT,
    fontSize: FONT_SIZE_13,
    // lineHeight: FONT_SIZE_17,
  },
  icon: {
    width: FONT_SIZE_15,
    textAlign: 'center',
  }
});

export interface ILabelIconProps {
  value?: any,
  title?: string,
  leftIcon?: string,
  rightIcon?: string,
  font?: 'solid' | 'regular' | 'light',

  style?: StyleProp<ViewStyle>,
  iconStyle?: StyleProp<TextStyle>,
  titleStyle?: StyleProp<TextStyle>,
  valueStyle?: StyleProp<TextStyle>,
  leftIconStyle?: StyleProp<TextStyle>,
  rightIconStyle?: StyleProp<TextStyle>,
  textProps?: TextProps,
  titleBold?: boolean,
  valueBold?: boolean,
}

export default (props: ILabelIconProps) => {
  return (
    <View style={[Themes.ROW, props.style]}>
      {props.leftIcon ?
        <FontAwesome
          font={props.font}
          icon={props.leftIcon}
          style={[
            { marginRight: PADDING },
            styles.icon,
            styles.font,
            props.iconStyle,
            props.leftIconStyle
          ]}
        /> : null}
      {props.title ?
        <Label bold={props.titleBold} style={[
          styles.font,
          props.titleStyle
        ]}>{props.title}<Label {...props.textProps} bold={props.valueBold} style={[styles.font, props.valueStyle]}>{props.value}</Label></Label> : null}
      {props.rightIcon ?
        <FontAwesome
          font={props.font}
          icon={props.rightIcon}
          style={[
            { marginLeft: PADDING },
            styles.icon,
            styles.font,
            props.iconStyle,
            props.rightIconStyle
          ]}
        /> : null}
    </View>
  );
}