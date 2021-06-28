import React from 'react';
import { DotIndicator, BallIndicator } from 'react-native-indicators';
import { View, StyleProp, ViewStyle } from 'react-native';

import { FONT_LARGE } from '../../../styles/Typography';
import { WTDP } from '../../../styles/scale';
const SIZE = WTDP(6, 600)
interface IProps {
  color?: string,
  size?: number,
  style?: StyleProp<ViewStyle>
}

export default function Spinner({
  color = "#fff",
  style,
  size
}: IProps) {
  return (
    <View style={[{ height: FONT_LARGE }, style]}>
      <BallIndicator
        color={color}
        size={size || SIZE}
      />
    </View>
  );
}
