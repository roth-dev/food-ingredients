import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {
  Button,
  Icons,
  ImageLoading,
  Label,
} from "../../../components/commons";
import { Products } from "../../../models/products";
import { navigate } from "../../../navigation/navigation";
import { useAppSelector } from "../../../store";
import { Colors, Themes } from "../../../styles";
import { PADDING, WTDP } from "../../../styles/scale";
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_18,
  FONT_SIZE_20,
  FONT_SIZE_22,
} from "../../../styles/Typography";
const ITEM_WIDTH = WTDP(50, 600);
const IMAGE_WIDTH = WTDP(30, 600);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: FONT_SIZE_22,
    paddingVertical: PADDING,
  },
  item: {
    flex: 1,
    margin: PADDING,
    width: ITEM_WIDTH,
    padding: PADDING,
    borderRadius: 20,
    backgroundColor: "white",
  },
  img: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: IMAGE_WIDTH / 2,
    overflow: "hidden",
    alignSelf: "center",
  },
  wrapPrice: {
    justifyContent: "space-between",
  },
  price: {
    fontSize: FONT_SIZE_20,
  },
  smallBtn: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});

interface PopularProps {}
const Items = (props: Products) => {
  const onPressNavigate = () => {
    navigate("ProductDetail", {
      title: props.title,
      prodId: props.id,
      catId: props.category,
    });
  };
  return (
    <TouchableOpacity onPress={onPressNavigate}>
      <View style={[Themes.SHADOW, styles.item]}>
        <ImageLoading
          disabled
          style={[styles.img]}
          imageStyle={{
            flex: 1,
            width: undefined,
            height: undefined,
            resizeMode: "cover",
          }}
          source={props.image}
        />
        <Label
          numberOfLines={1}
          style={{
            paddingTop: PADDING,
            fontSize: FONT_SIZE_18,
          }}
        >
          {props.title}
        </Label>
        <Label
          numberOfLines={1}
          style={{
            color: Colors.GRAY_DARK,
            fontSize: FONT_SIZE_14,
            lineHeight: 25,
          }}
        >
          {props.descriptions}
        </Label>
        <View style={[Themes.ROW, styles.wrapPrice]}>
          <Label bold style={styles.price}>
            ${props.price.toFixed(2)}
          </Label>
          <Button
            style={[Themes.SHADOW, styles.smallBtn]}
            iconStyle={{
              color: "#000",
              marginLeft: 0,
            }}
            rightIcon={Icons.chevronRight}
            onPress={onPressNavigate}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Popular: React.FC<PopularProps> = (props) => {
  const items = useAppSelector(
    (state) => state.categories?.categories[0]?.products
  );
  const renderItems = ({ item }: { item: Products }) => {
    return <Items {...item} />;
  };
  return (
    <View style={styles.container}>
      <Label bold style={styles.label}>
        Popular Foods
      </Label>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
      />
    </View>
  );
};
export default Popular;
