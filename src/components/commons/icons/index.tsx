import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import {
  Zocial,
  Entypo,
  Feather,
  Octicons,
  Ionicons,
  EvilIcons,
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
export type IconTypes = "Ionicons"
  | "Feather"
  | "SimpleLineIcons"
  | "Entypo"
  | "EvilIcons"
  | "Octicons"
  | "Zocial"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "AntDesign"
type ZocialT = keyof typeof Zocial.glyphMap
type EntypoT = keyof typeof Entypo.glyphMap
type OcticonsT = keyof typeof Octicons.glyphMap
type IoniconsT = keyof typeof Ionicons.glyphMap
type AntDesignT = keyof typeof AntDesign.glyphMap
type EvilIconsT = keyof typeof EvilIcons.glyphMap
type MaterialIconsT = keyof typeof MaterialIcons.glyphMap
type MaterialCommunityIconsT = keyof typeof MaterialCommunityIcons.glyphMap

export type TypeExpoIcons = IoniconsT
  | ZocialT
  | EntypoT
  | OcticonsT
  | EvilIconsT
  | AntDesignT
  | MaterialIconsT
  | MaterialCommunityIconsT

interface IconProps {
  name: TypeExpoIcons
  size?: number
  type?: IconTypes
  color?: string
  onPress?: () => void
  disable?: boolean
  style?: StyleProp<TextStyle>
}

const Icons = (props: IconProps) => {
  let icons;
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
    case "MaterialIcons":
      icons = <MaterialIcons {...props} />
      break;
    case "SimpleLineIcons":
      icons = <SimpleLineIcons {...props} />
      break;
    case "MaterialCommunityIcons":
      icons = <MaterialCommunityIcons {...props} />
      break;
    default:
      icons = <Ionicons {...props} />
      break
  }
  return icons
}

export default Icons