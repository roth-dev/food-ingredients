import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, StyleSheet, FlatList, Pressable, Alert } from "react-native";
import { useDispatch } from "react-redux";
import {
  Button,
  Icons,
  ImageLoading,
  Label,
} from "../../../components/commons";
import { useAppSelector } from "../../../store";
import { removeCartItem } from "../../../store/actions/cart";
import { CartItems } from "../../../store/type";
import { Colors, Themes } from "../../../styles";
import { HTDP, PADDING, WTDP } from "../../../styles/scale";
import { FONT_SIZE_16, FONT_SIZE_20 } from "../../../styles/Typography";
import Validate from "../../../utils/validate";
import FooterCartInfo from "./FooterCartInfo";
const IMG_WIDTH = WTDP(35, 600);
const BUTTON_WIDTH = WTDP(8, 600);
const FLOATING_WIDTH = WTDP(10, 600);
const styles = StyleSheet.create({
  container: { flex: 1 },
  item: {
    margin: PADDING,
    padding: PADDING,
    borderRadius: 20,
  },
  image_container: {
    marginTop: PADDING,
    alignSelf: "center",
    overflow: "hidden",
    width: IMG_WIDTH,
    height: IMG_WIDTH,
    backgroundColor: "red",
    borderRadius: IMG_WIDTH / 2,
  },
  floating_button: {
    zIndex: 100,
    top: -PADDING,
    right: 0,
    position: "absolute",
    width: FLOATING_WIDTH,
    height: FLOATING_WIDTH,
    borderRadius: FLOATING_WIDTH / 2,
    backgroundColor: Colors.PRIMARY,
    marginTop: PADDING,
  },
  floating_icon: {
    width: "auto",
    fontSize: FONT_SIZE_20,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
  img: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
  },
  title: {
    textAlign: "center",
    paddingTop: PADDING * 2,
    fontSize: FONT_SIZE_20,
    color: Colors.BASECOLOR,
  },
  cat: {
    textAlign: "center",
    fontSize: FONT_SIZE_16,
  },
  btn: {
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    borderRadius: 5,
  },
  icon: {
    marginLeft: 0,
    width: "auto",
    fontSize: FONT_SIZE_16,
  },
  price: {
    marginLeft: PADDING * 2,
    color: Colors.BASECOLOR,
    fontSize: FONT_SIZE_20,
  },
  content: {
    marginVertical: PADDING,
    marginHorizontal: PADDING * 2,
    justifyContent: "space-between",
  },
  qty: { fontSize: FONT_SIZE_16, paddingHorizontal: PADDING },
});

interface CartItemsProps {}

const Items = (props: CartItems) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [qty, setQty] = useState(props.qty);
  const category = useAppSelector((state) => {
    const cat = state.categories.categories?.filter(
      (d) => d.id === props.category
    );
    return cat[0].title;
  });
  const onIncrement = () => {
    setQty((prevQty) => (prevQty < 10 ? prevQty + 1 : prevQty));
  };
  const onDecrement = () => {
    setQty((prevQty) => {
      if (prevQty == 1) {
        onRemoveCart();
      }
      return prevQty > 1 ? prevQty - 1 : prevQty;
    });
  };
  const onPressNavigate = () => {
    navigation.navigate("ProductDetail", {
      prodId: props.id,
      title: props.title,
      catId: props.category,
    });
  };
  const onRemoveCart = () => {
    Alert.alert(
      "Are you sure?",
      "You want to remove this item from your cart?",
      [
        {
          text: "Cancel",
          onPress: () => {},
        },
        {
          text: "Remove",
          onPress: () => {
            dispatch(removeCartItem(props.id));
          },
        },
      ]
    );
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={onPressNavigate}>
      <Button
        onPress={onRemoveCart}
        iconStyle={styles.floating_icon}
        style={[Themes.SHADOW, styles.floating_button]}
        rightIcon={Icons.trash}
      />
      <View style={[Themes.SHADOW, styles.item]}>
        <ImageLoading
          disabled
          imageStyle={styles.img}
          style={styles.image_container}
          source={{ uri: props.image.url }}
        />
        <Label style={styles.title}>{props.title}</Label>
        <Label style={styles.cat}>ប្រភេទ {category}</Label>
        <View style={[Themes.ROW, styles.content]}>
          <View style={[Themes.ROW]}>
            <Button
              onPress={onDecrement}
              iconStyle={[styles.icon, { color: Colors.BLACK }]}
              style={[styles.btn, { backgroundColor: "#ddd" }]}
              rightIcon={Icons.minus}
            />
            <Label bold style={styles.qty}>
              {qty}
            </Label>
            <Button
              iconStyle={styles.icon}
              style={[styles.btn, { backgroundColor: Colors.BLACK }]}
              onPress={onIncrement}
              rightIcon={Icons.plus}
            />
          </View>
          <Label bold style={styles.price}>
            ${Validate.getCurrency(Validate.round(props.price, 3).toFixed(2))}
          </Label>
        </View>
      </View>
    </Pressable>
  );
};
const CartItem: React.FC<CartItemsProps> = (props) => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const renderItems = ({ item }: { item: CartItems }) => {
    return <Items {...item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cartItems}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: PADDING,
        }}
      />
      <FooterCartInfo />
    </View>
  );
};
export default CartItem;
