import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Button, Icons, ImageLoading, Label } from '../../../components/commons';
import { HPADDING, PADDING, WTDP } from '../../../styles/scale';
import { FONT_SIZE_12, FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_22 } from '../../../styles/Typography';
import { Recommended, recommended } from '../../../data/dummy'
import { Colors, Themes } from '../../../styles';
const ITEM_WIDTH = WTDP(70, 600)
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontSize: FONT_SIZE_22,
    paddingVertical: PADDING
  },
  item: {
    margin: PADDING,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH / 2,
    borderRadius: 20
  },
  smallBtn: {
    height: 40,
    width: 40,
    borderRadius: 100
  }

})

interface RecommendProps {

}

const RecommenItem = (props: Recommended) => {
  return (
    <View style={[Themes.SHADOW, Themes.ROW, styles.item]}>
      <ImageLoading
        source={props.image}
      />
      <View style={{
        paddingLeft: HPADDING
      }}>
        <Label style={{
          fontSize: FONT_SIZE_16,
          lineHeight: 20
        }}>{props.slug}</Label>
        <Label style={{
          fontSize: FONT_SIZE_14,
          lineHeight: 20,
          color: Colors.GRAY_DARK
        }}>{props.title}</Label>
        <Label style={{
          lineHeight: 20,
          color: Colors.GRAY_DARK,
          fontSize: FONT_SIZE_12,
        }}>{props.description}</Label>
        <View style={[Themes.ROW, {
          flex: 1,
          justifyContent: "space-between"
        }]}>
          <Label bold>${props.price}</Label>
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
    </View>
  )
}

const Recommend: React.FC<RecommendProps> = (props) => {
  const renderItems = ({ item }: { item: Recommended }) => {
    return <RecommenItem {...item} />
  }
  return (
    <View style={styles.container}>
      <Label bold style={styles.label}>Recommended</Label>
      <FlatList
        data={recommended}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
      />
    </View>
  );
}
export default Recommend