import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import assets from "../../../assets";
import { Button, Label } from "../../../components/commons";
import { navigate } from "../../../navigation/navigation";
import { Colors, Themes } from "../../../styles";
import { HPADDING, HTDP, PADDING, WTDP } from "../../../styles/scale";
import {
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
} from "../../../styles/Typography";
const IMAGE_WIDTH = WTDP(20, 600);
const IMAGE_HEIGHT = HTDP(30, 600);
const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginHorizontal: PADDING,
    padding: PADDING,
    borderRadius: 10,
    backgroundColor: Colors.GRAY_LIGHT,
  },
  bg: {
    width: "100%",
    height: IMAGE_HEIGHT,
  },
  img_container: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    overflow: "hidden",
  },
  img: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    resizeMode: "contain",
    borderRadius: IMAGE_WIDTH / 2,
  },
  ingredient_text: {
    fontSize: FONT_SIZE_16,
  },
});

interface Props {
  detail: boolean;
}

const NewOrder: React.FC<Props> = (props) => {
  const handlePress = () => {
    if (!props.detail) return navigate("NewOrderDetail", { detail: true });
    navigate("Tracking");
  };
  return (
    <View>
      {!props.detail && (
        <View style={{ flex: 0, marginBottom: PADDING }}>
          <Image source={assets.IMAGE_BACKGROUND} style={styles.bg} />
        </View>
      )}

      <View style={styles.container}>
        <View style={[Themes.ROW]}>
          <Image source={assets.PROFILE} style={styles.img} />
          <View style={{ paddingLeft: PADDING }}>
            <Label style={{ fontSize: FONT_SIZE_18 }}>SAM</Label>
            <Label style={{ fontSize: FONT_SIZE_18 }}>Customer</Label>
          </View>
        </View>
        <View
          style={{
            paddingVertical: PADDING,
            borderBottomColor: Colors.GRAY_DARK,
            borderBottomWidth: 1,
          }}
        />
        <Label style={{ fontSize: FONT_SIZE_20 }}>សម្លស្ងោរជ្រក់ត្រី</Label>
        <View style={[Themes.ROW, { justifyContent: "space-between" }]}>
          <Label style={{ fontSize: FONT_SIZE_18 }}>Ingredient</Label>
          <Label>10 Ingredient</Label>
        </View>
        <View style={{ paddingTop: PADDING }}>
          <Label style={styles.ingredient_text}>- Ingredient 1</Label>
          <Label style={styles.ingredient_text}>- Ingredient 2</Label>
          <Label style={styles.ingredient_text}>- Ingredient 3</Label>
          <Label style={styles.ingredient_text}>- Ingredient 4</Label>
          <Label style={styles.ingredient_text}>- Ingredient 5</Label>
          <Label style={styles.ingredient_text}>- Ingredient 6</Label>
          <Label style={styles.ingredient_text}>- Ingredient 7</Label>
        </View>
        <View
          style={{
            paddingVertical: PADDING,
            borderBottomColor: Colors.GRAY_DARK,
            borderBottomWidth: 1,
          }}
        />
        <View style={[Themes.ROW, { justifyContent: "space-around" }]}>
          <View
            style={{
              flex: 1,
              marginVertical: PADDING,
              padding: PADDING,
              borderColor: Colors.GRAY_DARK,
              borderWidth: 1,
              borderRadius: 30,
            }}
          >
            <Label style={{ fontSize: FONT_SIZE_20 }}>Price</Label>
          </View>
          <Label
            bold
            style={{
              flex: 0.5,
              fontSize: FONT_SIZE_20,
              textAlign: "right",
            }}
          >
            $12.00
          </Label>
        </View>
        <View
          style={[
            Themes.ROW,
            { justifyContent: "space-between", marginVertical: PADDING },
          ]}
        >
          <Button
            textStyle={{
              padding: HPADDING,
              fontSize: FONT_SIZE_18,
            }}
            style={{
              flex: 1,
              marginRight: PADDING,
              backgroundColor: "#333",
              borderRadius: 10,
            }}
            title="Accept"
            onPress={handlePress}
          />
          <Button
            textStyle={{
              padding: HPADDING,
              fontSize: FONT_SIZE_18,
            }}
            style={{
              flex: 1,
              marginLeft: PADDING,
              backgroundColor: "#333",
              borderRadius: 10,
            }}
            title="Decline"
          />
        </View>
      </View>
    </View>
  );
};
export default NewOrder;
