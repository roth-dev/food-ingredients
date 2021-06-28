import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface HomeScreenProps {

}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen Screen</Text>
    </View>
  );
}
export default HomeScreen