import { StackHeaderProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import HomeHeader from '../../navigation/header/HomeHeader';
import { Colors } from '../../styles';
import { BOTTOM, PADDING } from '../../styles/scale';
import Items from './components'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  }
})

interface HomeScreenProps extends StackHeaderProps {

}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const timer = () => setRefreshing(false)
  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(timer, 5000)
  }
  const renderHeader = () => <HomeHeader {...props} />

  const renderItems = () => {
    return <Items />
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={[1]}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{
          padding: PADDING,
          paddingTop: BOTTOM
        }}
      />
    </ View>
  );
}
export default HomeScreen