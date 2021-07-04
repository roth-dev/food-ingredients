import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import {
  Ionicons,
  SimpleLineIcons,
  Entypo,
  EvilIcons,
  Octicons,
  Zocial,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather
} from '@expo/vector-icons'

export type IconTypes =
  "Ionicons"
  | "Feather"
  | "SimpleLineIcons"
  | "Entypo"
  | "EvilIcons"
  | "Octicons"
  | "Zocial"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "AntDesign"
  | "createIconSet"

interface IconProps {
  name: string
  size?: number
  type?: IconTypes
  color?: string
  style?: StyleProp<TextStyle>
}

const Icons = (props: IconProps) => {
  let icons: any;
  switch (props.type) {
    case "Zocial":
      icons = <Zocial {...props} />
      break;
    case "Octicons":
      icons = <Octicons {...props} />
      break;
    case "Feather":
      icons = <Feather {...props} />
      break;
    case "AntDesign":
      icons = <AntDesign {...props} />
      break;
    case "Entypo":
      icons = <Entypo {...props} />
      break;
    case "EvilIcons":
      icons = <EvilIcons {...props} />
      break;
    case "MaterialCommunityIcons":
      icons = <MaterialCommunityIcons {...props} />
      break;
    case "MaterialIcons":
      icons = <MaterialIcons {...props} />
      break;
    case "SimpleLineIcons":
      icons = <SimpleLineIcons {...props} />
      break;
    default:
      icons = <Ionicons {...props} />
      break
  }
  return icons
}

export default Icons