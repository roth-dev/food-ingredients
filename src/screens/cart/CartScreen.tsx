import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Label } from '../../components/commons';
import { FONT_SIZE_18 } from '../../styles/Typography';
import LottieView from 'lottie-react-native';
import assets from '../../assets/lottie';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  }
  //your styles go here!!

})

interface CartScreenProps {

}

const CartScreen: React.FC<CartScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <LottieView
        style={{
          width: 200,
          height: 200,
        }}
        autoPlay={true}
        loop={true}
        source={assets.EMPTY_CART}
      />
      <Label style={{
        fontSize: FONT_SIZE_18
      }}>Your cart is empty!</Label>
    </View>
  );
}
export default CartScreen