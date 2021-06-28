import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import assets from '../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface LoginScreenProps {

}

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const renderImage = () => {
    return (
      <Image
        source={assets.WELCOME}
        style={{ width: 100, height: 50 }} />
    )
  }
  return (
    <View >
      <Text>LoginScreen Screen</Text>
      <Image
        source={require("../../../assets/icon.png")}
        style={{ width: 100, height: 50 }} />
    </View>
  );
}
export default LoginScreen