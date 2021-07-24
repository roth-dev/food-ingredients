import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useAppSelector } from '../../store'
import { Colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Colors.WHITE
  }
  //your styles go here!!

})

interface FavoriteScreenProps {

}

const FavoriteScreen: React.FC<FavoriteScreenProps> = (props) => {
  const data = useAppSelector((state) => state.favorite.items)
  const renderEmpty = () => (
    <View>
      <Text>No favorite</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
}
export default FavoriteScreen