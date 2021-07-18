import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface OrderListScreenProps {

}

const OrderListScreen: React.FC<OrderListScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>OrderListScreen Screen</Text>
    </View>
  );
}
export default OrderListScreen