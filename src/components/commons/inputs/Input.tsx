import React from 'react';
import {
  TextInputProps,
  View, TextInput,
  StyleProp, StyleSheet,
  ViewStyle, TextStyle,
  ImageSourcePropType,
  Image, ImageStyle, TouchableOpacity
} from 'react-native';
import { Colors } from '../../../styles';
import { FontAwesome } from '../fontawesome';
import { PADDING, HPADDING } from '../../../styles/scale';
import { FONT_SMALL, FONT_MEDIUM } from '../../../styles/Typography';
import { IOS } from '../../../utils/platform';

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    padding: PADDING,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: IOS ? PADDING : HPADDING
  },
  icon: {
    width: FONT_MEDIUM,
    color: Colors.BORDER,
    fontSize: FONT_SMALL,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    color: '#000',
    fontSize: FONT_SMALL
  },
  img: {
    width: FONT_MEDIUM,
    height: FONT_SMALL,
    resizeMode: 'contain',
  }
});

export interface IInputProps extends TextInputProps {
  reference?: React.RefObject<TextInput>,
  leftIcon?: string,
  rightIcon?: string,
  font?: 'solid' | 'regular' | 'light',

  style?: StyleProp<ViewStyle>,
  iconStyle?: StyleProp<TextStyle>,
  textStyle?: StyleProp<TextStyle>,
  leftIconStyle?: StyleProp<TextStyle>,
  rightIconStyle?: StyleProp<TextStyle>,
  imageStyle?: StyleProp<ImageStyle>
  source?: ImageSourcePropType
  onPress?: () => void
}

export default (props: IInputProps) => {
  return (
    <View
      pointerEvents={props.pointerEvents}
      style={[styles.container, props.style]}
    >
      {props.leftIcon ?
        <FontAwesome
          font={props.font}
          icon={props.leftIcon}
          style={[
            { marginRight: PADDING },
            styles.icon,
            props.iconStyle,
            props.leftIconStyle
          ]}
        /> : null}
      <TextInput
        {...props}
        ref={props.reference}
        autoCapitalize='none'
        style={[styles.input, props.textStyle]}
        placeholderTextColor={props.placeholderTextColor || '#8c9bb1'}
      />
      {props.rightIcon ?
        <TouchableOpacity onPress={props.onPress}>
          <FontAwesome
            font={props.font}
            icon={props.rightIcon}
            style={[
              { marginLeft: PADDING },
              styles.icon,
              props.iconStyle,
              props.rightIconStyle
            ]}
          />
        </TouchableOpacity>
        : null}
      {props.source ?
        <Image
          source={props.source}
          style={[styles.img, props.imageStyle]}
        /> : null}
    </View>
  );
}