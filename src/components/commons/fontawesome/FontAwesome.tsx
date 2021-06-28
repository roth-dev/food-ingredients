import React, { Component, createRef } from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

interface IProps {
  icon?: string,
  color?: string,
  style?: StyleProp<TextStyle>,
  font?: 'solid' | 'regular' | 'light' | 'brand',
}
export default function FontAwesome({
  icon,
  style,
  font = 'regular',
  color = "#EEE"
}: IProps) {
  const ref = createRef<Text>()
  let fontFamily = "regular";
  if (font === 'regular') fontFamily = 'regular';
  else if (font === 'light') fontFamily = 'light';
  else if (font === 'brand') fontFamily = 'brand';
  return (
    <Text
      style={[
        {
          color,
          fontFamily,
          fontSize: 15,
          backgroundColor: 'transparent'
        },
        style
      ]}
      ref={ref}
    >
      {icon}
    </Text>
  );
}