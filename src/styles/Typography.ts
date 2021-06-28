import { Platform, StyleSheet } from 'react-native'
import Scale from './scale'

const ANDROID = Platform.OS === 'ios'

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Hanuman-Regular'
export const FONT_FAMILY_BOLD = 'Hanuman-Bold'

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400'
export const FONT_WEIGHT_BOLD = '700'

// FONT SIZE
export const FONT_SIZE_32 = Scale.FONT(32)
export const FONT_SIZE_24 = Scale.FONT(24)
export const FONT_SIZE_23 = Scale.FONT(23)
export const FONT_SIZE_22 = Scale.FONT(22)
export const FONT_SIZE_21 = Scale.FONT(21)
export const FONT_SIZE_20 = Scale.FONT(20)
export const FONT_SIZE_19 = Scale.FONT(19)
export const FONT_SIZE_18 = Scale.FONT(18)
export const FONT_SIZE_17 = Scale.FONT(17)
export const FONT_SIZE_16 = Scale.FONT(16)
export const FONT_SIZE_15 = Scale.FONT(15)
export const FONT_SIZE_14 = Scale.FONT(14)
export const FONT_SIZE_13 = Scale.FONT(13)
export const FONT_SIZE_12 = Scale.FONT(12)
export const FONT_SIZE_11 = Scale.FONT(11)
export const FONT_SIZE_10 = Scale.FONT(10)
export const FONT_SIZE_9 = Scale.FONT(9)
export const FONT_SIZE_8 = Scale.FONT(8)
export const FONT_SIZE_7 = Scale.FONT(7)
export const FONT_SIZE_6 = Scale.FONT(6)
export const FONT_SIZE_5 = Scale.FONT(5)

export const FONT_SMALL = FONT_SIZE_13 // ANDROID ? FONT_SIZE_14 : FONT_SIZE_16;
export const FONT_MEDIUM = FONT_SIZE_16 // ANDROID ? FONT_SIZE_16 : FONT_SIZE_18;
export const FONT_LARGE = FONT_SIZE_18 // ANDROID ? FONT_SIZE_18 : FONT_SIZE_20;

// LINE HEIGHT
export const LINE_HEIGHT_24 = Scale.FONT(24)
export const LINE_HEIGHT_20 = Scale.FONT(20)
export const LINE_HEIGHT_16 = Scale.FONT(16)

const Typography = StyleSheet.create({
  FONT_REGULAR: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
  },
  FONT_BOLD: {
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
  },
})

export default Typography
