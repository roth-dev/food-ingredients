import { StyleSheet } from 'react-native'
import Scale, { PADDING } from './scale'
import { FONT_SMALL, FONT_MEDIUM } from './Typography'

const LOGO_WIDTH = Scale.WTDP(30, 600)

const Themes = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    // backgroundColor: '#FFF',
  },
  DETAIL: {
    flex: 1,
    backgroundColor: '#FFD',
  },
  SAFEAREA: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  FLATLIST: {
    padding: PADDING,
    marginBottom: 0,
  },
  WRAPPER: {
    flex: 1,
    backgroundColor: '#fff',
  },
  CENTER: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ROW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BORDER: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  SHADOW: {
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowColor: '#565D70',
    shadowOffset: { width: 2, height: 2 }
  },
  TEXT: {
    color: '#000',
    fontSize: FONT_SMALL,
  },
  TITLE: {
    color: '#000',
    fontSize: FONT_MEDIUM,
  },
  LOGO: {
    width: LOGO_WIDTH,
    height: 0.44 * LOGO_WIDTH,
    resizeMode: 'contain',
    tintColor: '#FF0202',
    marginBottom: Scale.BOTTOM,
  },
  INPUTBOX: {
    borderRadius: 50,
    marginHorizontal: PADDING,
    paddingHorizontal: PADDING * 2,
  },
  HEADER_SQUARE: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
})

export default Themes
