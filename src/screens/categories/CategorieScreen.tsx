import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getRouteParam, INavigationScreenProps } from '../../navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})

interface CategorieScreenProps extends INavigationScreenProps {

}

const CategorieScreen: React.FC<CategorieScreenProps> = (props) => {
  const getParams = getRouteParam(props)
  const title = getParams("title", null)

  useEffect(() => {
    props.navigation.setOptions({
      title: title
    })
  }, [])
  return (
    <View style={styles.container}>
      <Text>CategorieScreen Screen</Text>
    </View>
  );
}
export default CategorieScreen