import React, { useState } from 'react';
import {
  ImageProps,
  View, StyleSheet,
  StyleProp, ViewStyle,
  Image, ActivityIndicator,
  ImageStyle,
  ImageSourcePropType,
  TouchableOpacity
} from 'react-native';
import { Themes, Colors } from '../../../styles';
const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
  },
  loading: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
    backgroundColor: '#f3f4f4'
  }
});

interface IProps {
  disabled?: boolean,
  cached?: boolean
  imageProps?: ImageProps,
  source: ImageSourcePropType,
  style?: StyleProp<ViewStyle>,
  imageStyle?: StyleProp<ImageStyle>,
  loadingStyle?: StyleProp<ViewStyle>
  onPress?: () => void
  loadingSize?: "large" | "small"
}

export default (props: IProps) => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => setLoading(false);
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <View style={props.style} pointerEvents={'none'}>
        <Image
          onLoad={onLoad}
          {...props.imageProps}
          source={props.source}
          style={[styles.img, props.imageStyle]}
        />
        {loading ?
          <View style={[Themes.CENTER, styles.loading, props.loadingStyle]}>
            <ActivityIndicator color={Colors.BLUE} size={props.loadingSize || "small"} />
          </View> : null}
      </View>
    </TouchableOpacity>
  )
}