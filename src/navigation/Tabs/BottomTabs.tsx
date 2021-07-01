import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native'
import {
  BottomTabBarProps,
  BottomTabBarOptions
} from '@react-navigation/bottom-tabs';
import { Colors, Themes } from '../../styles'
import {
  FONT_SIZE_11,
  FONT_SIZE_22,
  FONT_SIZE_24,
  FONT_SIZE_9
} from '../../styles/Typography'
import { HPADDING, WTDP, HEADER, PADDING, BOTTOM } from '../../styles/scale'
import { navigate } from '../navigation';
import { isIphoneX } from '../../utils/platform';
import assets from '../../assets';

const IMAGE = WTDP(5.5, 600)
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: HPADDING,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: "auto",
    fontSize: FONT_SIZE_22
  },
  img: {
    width: IMAGE,
    height: IMAGE,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontSize: FONT_SIZE_11,
    paddingHorizontal: HPADDING
  },
  number: {
    color: '#FFF',
    fontSize: FONT_SIZE_9,
  },
});

interface IButtonIcon {
  title?: string
  icon?: any
  font?: "solid" | "regular" | "light" | "brand"
  onPress?: () => void
  notification?: number
  active: boolean
  source?: ImageSourcePropType
};

const ButtonIcon = (props: IButtonIcon) => {
  const color = props.active ? Colors.BASECOLOR : "#000";
  const marginTop = isIphoneX() ? 0 : PADDING
  const marginBottom = isIphoneX() ? PADDING : 0
  return (
    <TouchableOpacity
      style={[styles.btn, { marginTop, marginBottom }]}
      onPress={props.onPress}>
      {props.source && <Image source={props.source} style={styles.img} />}
      {props.icon && <Ionicons name={props.icon} size={FONT_SIZE_24} color={color} />}
      <Text style={[styles.title, { color }]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default (props: BottomTabBarProps<BottomTabBarOptions>) => {
  const index = props.state.index;
  const iphoneX = isIphoneX()
  const height = iphoneX ? HEADER * 1.6 : HEADER;
  return (
    <View style={[Themes.ROW, { height }, styles.container]}>
      <ButtonIcon
        font="brand"
        active={index === 0}
        source={assets.LAYER}
        onPress={() => navigate("Home")}
      />
      <ButtonIcon
        source={assets.CART}
        active={index === 1}
        onPress={() => navigate("Cart")}
      />
      <ButtonIcon
        source={assets.STAR}
        active={index === 1}
        onPress={() => navigate("Favorite")}
      />
      <ButtonIcon
        source={assets.PROFILE}
        active={index === 1}
        onPress={() => navigate("Profile")}
      />
    </View>
  )
}