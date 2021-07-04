import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  //your styles go here!!

})

interface SearchScreenProps {

}

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen Screen</Text>
    </View>
  );
}
export default SearchScreen