/**
 * responsive dimension
 */
import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const WTDP = (percent: number = 100, max: number = 0, min: number = 0) => {
    const per = percent / 100
    let w = Math.min(width, height)
    if (min > 0) {
        w = Math.max(w, min)
    }
    if (max > 0) {
        w = Math.min(w, max)
    }
    return PixelRatio.roundToNearestPixel(per * w)
}

const HTDP = (percent: number = 100, max: number = 0, min: number = 0) => {
    const per = percent / 100
    let h = Math.max(width, height)
    if (min > 0) {
        h = Math.max(h, min)
    }
    if (max > 0) {
        h = Math.min(h, max)
    }
    return PixelRatio.roundToNearestPixel(per * h)
}
const FONT = (size: number) => size //* PixelRatio.getFontScale()

const BOTTOM = WTDP(5, 600)
const PADDING = WTDP(2.5, 600)
const HPADDING = WTDP(1.25, 600)
const HEADER = WTDP(10, 600, 450)
const HEADER1 = WTDP(8, 600, 450)
const WIDTH = width
const HEIGHT = height
const PHOTO_SIZE = (WTDP(100) - 4) / 3
const LOGO = WTDP(10, 600)
const ICON = WTDP(6, 600)
const Scale = {
    ICON,
    LOGO,
    WIDTH,
    HEIGHT,
    PHOTO_SIZE,
    BOTTOM,
    HEADER,
    WTDP,
    HTDP,
    FONT,
    PADDING,
    HPADDING,
}

export {
    ICON, LOGO,
    HEADER1, PHOTO_SIZE,
    WIDTH, HEIGHT, BOTTOM,
    HEADER, WTDP, HTDP, FONT,
    PADDING, HPADDING
}

export default Scale
