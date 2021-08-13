import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {
  Button,
  Icons,
  ImageLoading,
  Label,
} from "../../../components/commons";
import { HPADDING, PADDING, WTDP } from "../../../styles/scale";
import {
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_22,
} from "../../../styles/Typography";
import { Colors, Themes } from "../../../styles";
import { useAppSelector } from "../../../store";
import { Products } from "../../../models/products";
import { navigate } from "../../../navigation/navigation";
const ITEM_WIDTH = WTDP(70, 600);
const IMAGE_WIDTH = WTDP(25, 600);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: FONT_SIZE_22,
    paddingVertical: PADDING,
  },
  item: {
    padding: PADDING,
    margin: PADDING,
    width: ITEM_WIDTH,
    // height: ITEM_WIDTH / 2,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  smallBtn: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  image_container: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
  },
});

interface RecommendProps {}

const RecommenItem = (props: Products) => {
  const onPressNavigate = () => {
    navigate("ProductDetail", {
      prodId: props.id,
      catId: props.category,
      title: props.title,
    });
  };
  return (
    <TouchableOpacity
      onPress={onPressNavigate}
      style={[Themes.SHADOW, styles.item]}
    >
      <View style={[Themes.ROW]}>
        <ImageLoading
          style={styles.image_container}
          disabled
          imageStyle={styles.image}
          source={props.image}
        />
        <View
          style={{
            flex: 1,
            paddingLeft: PADDING,
          }}
        >
          <Label
            style={{
              fontSize: FONT_SIZE_16,
            }}
          >
            {props.title}
          </Label>
          <Label
            numberOfLines={2}
            style={{
              fontSize: FONT_SIZE_14,
              lineHeight: 20,
              color: Colors.GRAY_DARK,
            }}
          >
            {props.descriptions}
          </Label>
          <View
            style={[
              Themes.ROW,
              {
                flex: 1,
                justifyContent: "space-between",
              },
            ]}
          >
            <Label bold>${props.price.toFixed(2)}</Label>
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
      </View>
    </TouchableOpacity>
  );
};

const Recommend: React.FC<RecommendProps> = (props) => {
  const items = useAppSelector(
    (state) => state.categories.categories[1].products
  );
  const renderItems = ({ item }: { item: Products }) => {
    return <RecommenItem {...item} />;
  };
  return (
    <View style={styles.container}>
      <Label bold style={styles.label}>
        Recommended
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
export default Recommend;
