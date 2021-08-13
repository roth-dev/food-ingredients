import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Button, Label } from "../../../components/commons";
import { navigate } from "../../../navigation/navigation";
import { useAppSelector } from "../../../store";
import { createOrder } from "../../../store/actions/orders";
import { Colors, Themes } from "../../../styles";
import { HPADDING, PADDING } from "../../../styles/scale";
import {
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
} from "../../../styles/Typography";
const styles = StyleSheet.create({
  footer: {
    marginHorizontal: PADDING * 2,
    marginBottom: PADDING,
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

interface Props {}

export default (props: Props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { cartTotalAmount } = useAppSelector((state) => state.cart);

  const handleCreateOrder = async () => {
    setLoading(true);
    try {
      await dispatch(createOrder());
      setLoading(false);
      navigate("OrderSuccess");
    } catch (e) {
      setLoading(false);
    }
  };
  return (
    <View style={styles.footer}>
      <View style={[Themes.ROW, styles.footer_content]}>
        <View style={styles.content}>
          <Label style={styles.txt}>SubTotal:</Label>
          <Label style={styles.txt}>Discount:</Label>
          <Label style={styles.txt_total}>Total:</Label>
        </View>
        <View style={styles.content}>
          <Label style={styles.txt}>${cartTotalAmount?.toFixed(2)}</Label>
          <Label style={styles.txt}>0%</Label>
          <Label style={styles.txt_total}>${cartTotalAmount?.toFixed(2)}</Label>
        </View>
      </View>
      <Button
        bold
        style={styles.button}
        title="Order Now"
        loading={loading}
        onPress={handleCreateOrder}
        textStyle={{
          fontSize: FONT_SIZE_20,
          padding: HPADDING,
        }}
      />
    </View>
  );
};
