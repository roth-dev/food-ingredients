import React from "react";
import { View, StyleSheet } from "react-native";
import { CartItems } from "../../../store/type";
import { Colors, Themes } from "../../../styles";
import { PADDING } from "../../../styles/scale";
import { FONT_SIZE_16, FONT_SIZE_18 } from "../../../styles/Typography";
import CartItem from "./CartItems";
import HeaderAddress from "./HeaderAddress";
import FooterCartInfo from "./FooterCartInfo";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: PADDING,
    backgroundColor: "white",
  },
  footer: {
    margin: PADDING,
    borderRadius: 10,
    backgroundColor: Colors.GRAY_LIGHT,
  },

  footer_content: {
    justifyContent: "space-between",
  },
  content: {
    padding: PADDING,
    paddingVertical: PADDING * 2,
  },
  txt_total: {
    fontSize: FONT_SIZE_18,
    lineHeight: 26,
    color: Colors.BASECOLOR,
  },
  txt: {
    lineHeight: 26,
    fontSize: FONT_SIZE_16,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#333",
  },
});

interface Props {
  cartItems: CartItems[];
}

export default (props: Props) => {
  return (
    <View style={styles.container}>
      <HeaderAddress />
      <CartItem />
    </View>
  );
};
