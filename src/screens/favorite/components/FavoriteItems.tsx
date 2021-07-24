import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Products } from '../../../models/products';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})

interface FavoriteItemsProps extends Products {

}

const FavoriteItems: React.FC<FavoriteItemsProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>FavoriteItems Screen</Text>
    </View>
  );
}
export default FavoriteItems