import React, { useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Icons, ImageLoading, Label } from '../../../components/commons';
import { Products } from '../../../models/products';
import { Colors, Themes } from '../../../styles';
import { PADDING, WTDP } from '../../../styles/scale';
import { FONT_SIZE_16, FONT_SIZE_18 } from '../../../styles/Typography';
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../../../store/actions/favorite';
import { useAppSelector } from '../../../store';
const IMAGE_WIDTH = WTDP(100, 600)
const BTN_HEART_WIDTH = WTDP(10, 600)
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH / 1.5,
    resizeMode: "cover"
  },
  label: { fontSize: FONT_SIZE_16 },
  wrapp_content: {
    padding: PADDING
  },
  wrapp_discription: {
    justifyContent: "space-between"
  },
  description: {
    fontSize: FONT_SIZE_16
  },
  btn_heart: {
    width: BTN_HEART_WIDTH,
    height: BTN_HEART_WIDTH,
    borderRadius: BTN_HEART_WIDTH / 2,
    backgroundColor: Colors.PRIMARY
  }

})

interface ItemsProps extends Products {

}

const Items: React.FC<ItemsProps> = (props) => {
  const disptach = useDispatch();
  const items = useAppSelector(state => state.favorite.items)
  const index = items.findIndex(item => item.id === props.id)
  return (
    <View style={styles.container}>
      <ImageLoading
        disabled
        loadingSize="large"
        imageStyle={styles.bgImage}
        source={{ uri: props.image.url }}
      />
      <View style={styles.wrapp_content}>
        <View style={[Themes.ROW, styles.wrapp_discription]}>
          <Label bold style={styles.label}>Description</Label>
          <Button
            style={styles.btn_heart}
            leftIcon={index < -1 ? Icons.heartBeat : Icons.heart}
            iconStyle={{
              marginRight: 0,
              width: "auto",
              fontSize: FONT_SIZE_18
            }}
            onPress={() => disptach(toggleFavorite(props.id, props.category))}
          />
        </View>
        <Label style={styles.description}>
          {props.descriptions}
        </Label>
        <Label bold style={[styles.label, { paddingVertical: PADDING }]}>Ingredient</Label>
        <Label style={[styles.description, { lineHeight: 25 }]}>{props.ingredients}</Label>
      </View>
    </View>
  );
}
export default Items