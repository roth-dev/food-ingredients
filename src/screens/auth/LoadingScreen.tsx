import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface LoadingScreenProps {

}

const LoadingScreen: React.FC<LoadingScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>LoadingScreen Screen</Text>
    </View>
  );
}
export default LoadingScreen