import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface SettingScreenProps {

}

const SettingScreen: React.FC<SettingScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>SettingScreen Screen</Text>
    </View>
  );
}
export default SettingScreen