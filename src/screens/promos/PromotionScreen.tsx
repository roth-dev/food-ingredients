import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface PromotionScreenProps {

}

const PromotionScreen: React.FC<PromotionScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>PromotionScreen Screen</Text>
    </View>
  );
}
export default PromotionScreen