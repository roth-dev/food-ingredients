import React from 'react';
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
import { ExpoIcons } from '../../components/commons';
import { IconTypes } from '../../components/commons/icons';

const IMAGE = WTDP(5.5, 600)
const styles = StyleSheet.create({
  container: {
    height: HEADER,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: HPADDING,
    backgroundColor: Colors.WHITE
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    marginTop: PADDING,
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
    paddingHorizontal: HPADDING,
    paddingBottom:PADDING
  },
  number: {
    color: '#FFF',
    fontSize: FONT_SIZE_9,
  },
});

interface IButtonIcon {
  type?: IconTypes
  title?: string
  icon?: any
  font?: "solid" | "regular" | "light" | "brand"
  onPress?: () => void
  notification?: number
  active: boolean
  source?: ImageSourcePropType
};

const ButtonIcon = (props: IButtonIcon) => {
  const color = props.active ? Colors.BASECOLOR : Colors.GRAY_DARK;
  return (
    <TouchableOpacity
      style={[styles.btn]}
      onPress={props.onPress}>
      {props.source && <Image source={props.source} style={styles.img} />}
      {props.icon && <ExpoIcons
        type={props.type}
        name={props.icon}
        size={FONT_SIZE_24}
        color={color} />}
      <Text style={[styles.title, { color }]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default (props: BottomTabBarProps<BottomTabBarOptions>) => {
  const index = props.state.index;
  const iphoneX = isIphoneX()
  const height = iphoneX ? HEADER * 1.6 : HEADER;
  return (
    <View style={[Themes.ROW, Themes.SHADOW, styles.container]}>
      <ButtonIcon
        font="brand"
        title="Home"
        active={index === 0}
        icon="md-grid"
        // source={assets.LAYER}
        onPress={() => navigate("Home")}
      />
      <ButtonIcon
        title="Cart"
        icon="shopping-cart"
        type="Feather"
        active={index === 1}
        onPress={() => navigate("Cart")}
      />
      <ButtonIcon
        title="Favorite"
        icon="star"
        type="AntDesign"
        active={index === 2}
        onPress={() => navigate("Favorite")}
      />
      <ButtonIcon
        icon="user"
        title="Profile"
        type="Entypo"
        // source={assets.PROFILE}
        active={index === 3}
        onPress={() => navigate("Profile")}
      />
    </View>
  )
}