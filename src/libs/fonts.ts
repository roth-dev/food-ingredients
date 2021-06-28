import * as Font from 'expo-font';
/**
 * load custom font
 */

export const fetchFonts = () => new Promise<void>((resolve, reject) => {
  Font.loadAsync({
    "Khmer OS": require('../../assets/fonts/Khmer-OS.ttf'),
    "HanumanBold": require('../../assets/fonts/Hanuman-Bold.ttf'),
    "solid": require('../../assets/fonts/FontAwesome5Pro-Solid.ttf'),
    "light": require("../../assets/fonts/FontAwesome5Pro-Light.ttf"),
    "regular": require('../../assets/fonts/FontAwesome5Pro-Regular.ttf'),
    "brand": require('../../assets/fonts/FontAwesome5Brands-Regular.ttf'),
  }).then((res) => {
    resolve()
  }).catch((e) => {
    reject(e)
  })
})