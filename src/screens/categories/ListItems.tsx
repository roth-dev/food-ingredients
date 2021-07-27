import React from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { ImageLoading, Label } from '../../components/commons'
import { Category } from '../../models/categories'
import { Products } from '../../models/products'
import { navigate } from '../../navigation/navigation'
import { Colors, Themes } from '../../styles'
import { BOTTOM, PADDING, WTDP } from '../../styles/scale'
import { FONT_SIZE_16 } from '../../styles/Typography'
import Validate from '../../utils/validate'
const IMAGE_WDTH = WTDP(25, 600)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: PADDING,
    justifyContent: "space-between",
    backgroundColor: Colors.WHITE,
    borderBottomWidth: .5,
    borderBottomColor: "#ddd"
  },
  img: {
    width: IMAGE_WDTH,
    height: IMAGE_WDTH,
    resizeMode: "cover"
  }
})

interface ListItemsProps extends Category {
}

interface ItemProps extends Products {
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
        <Label bold style={{
          paddingTop: BOTTOM,
          fontSize: FONT_SIZE_16
        }}>$ {Validate.round(Validate.getCurrency(props.price), 3).toFixed(2)}</Label>
      </View>
      <ImageLoading
        disabled
        style={{
          flex: 0
        }}
        imageStyle={styles.img}
        source={{ uri: props.image.url }} />
    </TouchableOpacity>
  )
}

const ListItems: React.FC<ListItemsProps> = (props) => {

  const renderitems = ({ item }: { item: Products }) => {
    return <Items {...item} catId={props.id} />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={props.products}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderitems}
      />
    </View>
  );
}
export default ListItems