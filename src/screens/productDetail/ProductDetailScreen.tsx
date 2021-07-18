import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Button, Label } from '../../components/commons';
import { Produts } from '../../models/products';
import { getRouteParam, INavigationScreenProps } from '../../navigation';
import { useAppSelector } from '../../store';
import { Themes } from '../../styles';
import { HPADDING, PADDING } from '../../styles/scale';
import { FONT_SIZE_16, FONT_SIZE_22 } from '../../styles/Typography';
import Items from './component/Items'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    padding: PADDING,
    justifyContent: "space-between"
  },
  btn: {
    flex: 1,
    backgroundColor: "#36323B"
  },
  btnTitle: {
    padding: HPADDING,
    fontSize: FONT_SIZE_16
  },
  price: {
    flex: 1,
    textAlign: "center",
    fontSize: FONT_SIZE_22
  }

})

interface ProductDetailScreenProps extends INavigationScreenProps {

}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = (props) => {
  const getParams = getRouteParam(props)
  const title = getParams("title", null)
  const prodId = getParams("prodId", null)
  const catId = getParams("catId", null)
  const data = useAppSelector((state) => {
    const category = state.categories.categories?.filter((cat) => cat.id === catId)[0]
    return category?.products?.filter((item) => item.id === prodId)
  })
  useEffect(() => {
    props.navigation.setOptions({
      title: title
    })
  }, [])

  const renderItem = ({ item }: { item: Produts }) => {
    return <Items {...item} />
  }
  const renderButton = () => {
    return (
      <View style={[Themes.ROW, Themes.SHADOW, styles.footer]}>
        <Button
          style={styles.btn}
          title="Add to cart"
          textStyle={styles.btnTitle}
        />
        <Label bold style={styles.price}>$12.58</Label>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
      {renderButton()}
    </View>
  );
}
export default ProductDetailScreen