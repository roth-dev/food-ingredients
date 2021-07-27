import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Label } from '../../components/commons'
import { Products } from '../../models/products'
import { useAppSelector } from '../../store'
import { Colors } from '../../styles'
import { BOTTOM, PADDING } from '../../styles/scale'
import { FONT_SIZE_18, FONT_SIZE_20 } from '../../styles/Typography'
import FavoriteItems from './components/FavoriteItems'
import LottieView from 'lottie-react-native';
import assets from '../../assets/lottie'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    paddingBottom: BOTTOM * 4,
  }
  //your styles go here!!

})

interface FavoriteScreenProps {

}

const FavoriteScreen: React.FC<FavoriteScreenProps> = (props) => {
  const data = useAppSelector((state) => state.favorite.items)

  const renderItems = ({ item }: { item: Products }) => {
    return <FavoriteItems {...item} />
  }
  if (!data.length) {
    return (
      <View style={styles.empty}>
        <LottieView style={{
          width: 400,
          height: 400,
        }}
          autoPlay={true}
          loop={true}
          source={assets.NO_DATASET} />
        <Label style={{
          fontSize: FONT_SIZE_18
        }}>No favorite</Label>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
        contentContainerStyle={{ margin: PADDING, paddingBottom: BOTTOM }}
      />
    </View>
  );
}
export default FavoriteScreen