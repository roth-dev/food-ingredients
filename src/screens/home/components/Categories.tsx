import React from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Button, Label } from '../../../components/commons'
import { categories, Category } from '../../../data/dummy'
import { navigate } from '../../../navigation/navigation'
import { Themes } from '../../../styles'
import { PADDING, WTDP } from '../../../styles/scale'
import { FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_22 } from '../../../styles/Typography';
const ITEM_WIDTH = WTDP(20, 600)
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontSize: FONT_SIZE_22
  },
  btn: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    borderRadius: 20,
    flexDirection: "column",

  },
  seeMore: {
    opacity: .7,
    fontSize: FONT_SIZE_14
  },
  img: {
    width: ITEM_WIDTH / 1.5,
    height: ITEM_WIDTH / 1.5,
    marginRight: 0,
    resizeMode: "contain"
  }

})

interface CategoriesProps {

}
const CategoryItems = (props: Category) => {
  return (
    <View style={{ alignItems: "center", margin: PADDING }}>
      <Button
        leftSource={props.image}
        imageStyle={styles.img}
        style={[styles.btn, {
          backgroundColor: props.bgColor
        }]}
        onPress={() => navigate("Categories", { title: props.title })}
      />
      <Label style={{
        padding: PADDING,
        fontSize: FONT_SIZE_16
      }}>{props.title}</Label>
    </View>

  )
}
const Categories: React.FC<CategoriesProps> = (props) => {
  const renderItem = ({ item }: { item: Category }) => {
    return <CategoryItems {...item} />
  }
  return (
    <View style={styles.container}>
      <View style={[Themes.ROW,
      {
        paddingTop: PADDING,
        justifyContent: "space-between",
      }
      ]}>
        <Label bold style={styles.label}>Categories Foods</Label>
        <TouchableOpacity>
          <Label style={styles.seeMore}>See More</Label>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{ paddingTop: PADDING }}
      />
    </View>
  );
}
export default Categories