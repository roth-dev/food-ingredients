import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Icons, ImageLoading, Label } from '../../../components/commons';
import { Produts } from '../../../models/products';
import { Colors, Themes } from '../../../styles';
import { PADDING, WTDP } from '../../../styles/scale';
import { FONT_SIZE_16, FONT_SIZE_18 } from '../../../styles/Typography';
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

interface ItemsProps extends Produts {

}

const Items: React.FC<ItemsProps> = (props) => {
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
            leftIcon={Icons.heart}
            iconStyle={{
              marginRight: 0,
              width: "auto",
              fontSize: FONT_SIZE_18
            }}
          />
        </View>
        <Label style={styles.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
        </Label>
        <Label bold style={[styles.label, { paddingVertical: PADDING }]}>Ingredient</Label>
        <Label style={[styles.description, { lineHeight: 25 }]}>{props.ingredients}</Label>

      </View>
    </View>
  );
}
export default Items