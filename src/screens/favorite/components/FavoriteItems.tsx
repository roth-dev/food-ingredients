import React from 'react'
import { View, StyleSheet, Pressable, Alert } from 'react-native'
import { useDispatch } from 'react-redux';
import { Button, ExpoIcons, Icons, ImageLoading, Label } from '../../../components/commons';
import { Products } from '../../../models/products';
import { dispatch, navigate } from '../../../navigation/navigation';
import { Colors, Themes } from '../../../styles';
import { BOTTOM, PADDING } from '../../../styles/scale';
import { FONT_SIZE_16 } from '../../../styles/Typography';
import Validate from '../../../utils/validate';
import { toggleFavorite } from "../../../store/actions/favorite"
const styles = StyleSheet.create({
  container: {
    padding: PADDING,
    marginTop: PADDING,
    borderRadius: 20
  },
  wrap_content: {
    flex: 1,
    paddingLeft: PADDING
  },
  label: {
    fontSize: FONT_SIZE_16
  },
  botton: {
    flex: 0,
    padding: 0,
    bottom: BOTTOM,
    right: BOTTOM,
    width: 30,
    height: 30,
    borderRadius: 100,
    position: "absolute",
  }

})

interface FavoriteItemsProps extends Products {

}

const FavoriteItems: React.FC<FavoriteItemsProps> = (props) => {
  const dispatch = useDispatch()
  const _onToggleFavorite = () => {
    Alert.alert("Are you sure?", "You want to remove this item?", [
      { text: "Cancel", onPress: () => { } },
      { text: "OK", onPress: () => dispatch(toggleFavorite(props.id, props.category)) },
    ])

  }
  return (
    <Pressable
      onPress={() => navigate("ProductDetail",
        {
          title: props.title,
          prodId: props.id,
          catId: props.category
        })}
      style={[Themes.ROW, Themes.SHADOW, styles.container]}>
      <ImageLoading disabled imageStyle={{ width: 100, height: 100, resizeMode: "cover" }} source={{ uri: props.image.url }} />
      <View style={styles.wrap_content}>
        <Label style={styles.label}>{props.title}</Label>
        <Label bold style={[styles.label, { paddingTop: BOTTOM }]}>${Validate.round(Validate.getCurrency(props.price), 3).toFixed(2)}</Label>
      </View>
      <ExpoIcons
        style={{ flex: 0, top: BOTTOM, position: "absolute", right: BOTTOM }}
        size={20}
        type="AntDesign"
        name="heart"
        color={Colors.PRIMARY}
        onPress={_onToggleFavorite}
      />
      <Button
        disabled
        style={[Themes.SHADOW, styles.botton]}
        rightIcon={Icons.chevronRight}
        iconStyle={{
          color: Colors.GRAY_DARK,
          marginLeft: 0,
          textAlign: "center"
        }}
      />
    </Pressable>
  );
}
export default FavoriteItems