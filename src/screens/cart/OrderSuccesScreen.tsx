import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Type } from "../../store/type";
import LottieView from "lottie-react-native";
import assets from "../../assets/lottie";
import { Label } from "../../components/commons";
import { FONT_SIZE_16, FONT_SIZE_22 } from "../../styles/Typography";
import { PADDING } from "../../styles/scale";
import { Colors } from "../../styles";
import moment from "moment";
import { useAppSelector } from "../../store";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
  },
});

// create function generate text string to number

interface OrderSuccesScreenProps {}

const OrderSuccesScreen: React.FC<OrderSuccesScreenProps> = (props) => {
  const dispatch = useDispatch();
  const { orderDetail, orders } = useAppSelector((state) => state.orders);
  useEffect(() => {
    dispatch({
      type: Type.ADD_TO_CART,
      payload: { cartItems: [], cartTotalAmount: 0 },
    });
  }, []);
  return (
    <View style={styles.container}>
      <Label
        bold
        style={{
          textAlign: "center",
          fontSize: FONT_SIZE_22,
        }}
      >
        Thank You!!
      </Label>
      <LottieView
        style={{
          alignSelf: "center",
          width: 200,
          height: 200,
        }}
        autoPlay={true}
        loop={false}
        source={assets.SUCCESS_CHECKED}
      />
      <Label
        style={{
          fontSize: FONT_SIZE_22,
        }}
      >
        Your order status is{" "}
        <Label
          bold
          style={{
            fontSize: FONT_SIZE_22,
            color: Colors.BASECOLOR,
          }}
        >
          {orders?.orderstatus}
        </Label>
      </Label>
      <Label style={{ fontSize: FONT_SIZE_16 }}>
        Order date: {moment(orders?.createdAt).format("YYYY-MM-DD")}
      </Label>
      <Label style={{ fontSize: FONT_SIZE_16, textAlign: "left" }}>
        Order number: {orders?.ordernumber}
      </Label>
      <Label style={{ fontSize: FONT_SIZE_16, textAlign: "left" }}>
        Address: {orders?.address}
      </Label>
    </View>
  );
};
export default OrderSuccesScreen;
