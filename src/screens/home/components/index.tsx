import React, { Fragment } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Categories from './Categories'
import Popular from './Popular'
import Recommend from './Recommend'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

interface IProps {
  

}

const index: React.FC<IProps> = (props) => {
  const renderItems = () => {
    return (
      <Fragment>
        <Categories />
        <Popular />
        <Recommend />
      </Fragment>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={[1]}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
      />
    </View>
  );
}
export default index