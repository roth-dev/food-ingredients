import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { ImageLoading, Label } from '../../components/commons'
import { Category } from '../../models/categories'
import { Produts } from '../../models/products'
import { navigate } from '../../navigation/navigation'
import { Colors, Themes } from '../../styles'
import { HPADDING, PADDING } from '../../styles/scale'
import { FONT_SIZE_16, FONT_SIZE_22 } from '../../styles/Typography'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: PADDING,
    justifyContent: "space-between",
    backgroundColor: Colors.WHITE,
    borderBottomWidth: .5,
    borderBottomColor: Colors.GRAY_DARK
  }
})

interface ListItemsProps extends Category {
}

interface ItemProps extends Produts {
  catId?: string
}
const Items = (props: ItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigate("ProductDetail",
        {
          prodId: props.id,
          title: props.title,
          catId: props.catId
        })}
      style={[Themes.ROW, styles.item]}>
      <View>
        <Label style={{
          fontSize: FONT_SIZE_16
        }}>{props.title}</Label>
        <Label style={{
          fontSize: FONT_SIZE_16
        }}>${props.price}</Label>
      </View>
      <ImageLoading
        disabled
        style={{
          flex: 0
        }}
        source={{ uri: props.image.url }} />
    </TouchableOpacity>
  )
}

const ListItems: React.FC<ListItemsProps> = (props) => {

  const renderitems = ({ item }: { item: Produts }) => {
    return <Items {...item} catId={props.id} />
  }
  return (
    <View style={styles.container}>
      <Label bold style={{
        padding: PADDING,
        fontSize: FONT_SIZE_22
      }}>ប្រភេទ {props.title}</Label>
      <FlatList
        data={props.products}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderitems}
      />
    </View>
  );
}
export default ListItems