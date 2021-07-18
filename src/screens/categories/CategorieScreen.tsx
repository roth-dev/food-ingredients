import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Category } from '../../models/categories';
import { getRouteParam, INavigationScreenProps } from '../../navigation';
import { useAppSelector } from '../../store';
import { Colors } from '../../styles';
import ListItems from './ListItems';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  }

})

interface CategorieScreenProps extends INavigationScreenProps {

}

const CategorieScreen: React.FC<CategorieScreenProps> = (props) => {
  const getParams = getRouteParam(props)
  const title = getParams("title", null)
  const catId = getParams("catId", null)
  const data = useAppSelector((state) => {
    return state.categories.categories?.filter((item) => item.id === catId)
  })
  useEffect(() => {
    props.navigation.setOptions({
      title: title
    })
  }, [])
  const renderItems = ({ item }: { item: Category }) => {
    return <ListItems {...item} />
  }
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItems}
    />
  );
}
export default CategorieScreen