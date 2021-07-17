import React from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Button, Icons, ImageLoading, Label } from '../../../components/commons';
import { PopularItem, popularItems } from '../../../data/dummy';
import { navigate } from '../../../navigation/navigation';
import { Colors, Themes } from '../../../styles';
import { PADDING, WTDP } from '../../../styles/scale';
import { FONT_SIZE_12, FONT_SIZE_18, FONT_SIZE_20, FONT_SIZE_22 } from '../../../styles/Typography';
const ITEM_WIDTH = WTDP(50, 600)
const ITEM_HIGHT = WTDP(60, 600)
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontSize: FONT_SIZE_22,
    paddingVertical: PADDING
  },
  item: {
    flex: 1,
    margin: PADDING,
    width: ITEM_WIDTH,
    height: ITEM_HIGHT,
    padding: PADDING,
    borderRadius: 20,
    // alignItems: "center",
    // justifyContent: "center",
    shadowColor: 'black',
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white'
  },
  img: {
    width: "100%",
    height: 140,
    alignSelf: "center"
  },
  wrapPrice: {
    justifyContent: "space-between"
  },
  price: {
    fontSize: FONT_SIZE_20
  },
  smallBtn: {
    height: 40,
    width: 40,
    borderRadius: 100
  }
})

interface PopularProps {

}
const Items = (props: PopularItem) => {
  return (
    <TouchableOpacity onPress={() => navigate("ProductDetail", { title: props.title })}>
      <View style={[styles.item]}>
        <ImageLoading
          disabled
          style={styles.img}
          imageStyle={{
            flex: 1,
            width: undefined,
            height: undefined,
            resizeMode: "contain"

          }}
          source={props.image} />
        <Label style={{
          color: Colors.GRAY_DARK,
          fontSize: FONT_SIZE_18
        }}>{props.title}</Label>
        <Label style={{
          color: Colors.GRAY_DARK,
          fontSize: FONT_SIZE_12,
          lineHeight: 25
        }}>{props.description}</Label>
        <View style={[Themes.ROW, styles.wrapPrice]}>
          <Label bold
            style={styles.price}>${props.price}</Label>
          <Button
            style={[Themes.SHADOW, styles.smallBtn]}
            iconStyle={{
              color: "#000",
              marginLeft: 0
            }}
            rightIcon={Icons.chevronRight}
          />
        </View>
      </View>
    </TouchableOpacity>

  )
}
const Popular: React.FC<PopularProps> = (props) => {
  const renderItems = ({ item }: { item: PopularItem }) => {
    return <Items {...item} />
  }
  return (
    <View style={styles.container}>
      <Label bold style={styles.label}>Popular Foods</Label>
      <FlatList
        data={popularItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
      />
    </View>
  );
}
export default Popular