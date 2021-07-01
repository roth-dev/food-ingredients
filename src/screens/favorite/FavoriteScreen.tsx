import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface FavoriteScreenProps {

}

const FavoriteScreen: React.FC<FavoriteScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>FavoriteScreen Screen</Text>
    </View>
  );
}
export default FavoriteScreen