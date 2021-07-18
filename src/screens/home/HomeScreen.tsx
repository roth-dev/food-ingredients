import { useDispatch } from 'react-redux';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import HomeHeader from '../../navigation/header/HomeHeader';
import { Colors } from '../../styles';
import { BOTTOM, PADDING } from '../../styles/scale';
import Items from './components'
import { getCategories } from '../../store/actions/categories';
import { Label } from '../../components/commons';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

interface HomeScreenProps extends StackHeaderProps {

}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const dispatch = useDispatch()
  const onRefresh = () => {
    setRefreshing(true)
  }

  useEffect(() => {
    Promise.all([
      dispatch(getCategories())
    ]).then(() => {
      setLoading(false)
      setRefreshing(false)
    }).catch(() => {
      setLoading(false)
      setRefreshing(false)
    })
  }, [refreshing])
  const renderItems = () => {
    return <Items />
  }
  return (
    <View style={styles.container}>
      <HomeHeader {...props} />
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator
            size="large"
            color={Colors.BASECOLOR}
          />
          <Label >Fetching data...</Label>
        </View>
      ) : <FlatList
        data={[1]}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{
          padding: PADDING,
          paddingTop: BOTTOM
        }}
      />}

    </ View>
  );
}
export default HomeScreen