import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface CartScreenProps {

}

const CartScreen: React.FC<CartScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>CartScreen Screen</Text>
    </View>
  );
}
export default CartScreen