import React from "react";
import { StyleSheet } from "react-native";
import { useAppSelector } from "../../store";
import Empty from "./components/Empty";
import CartItems from "./components";

const styles = StyleSheet.create({});

interface CartScreenProps {}

const CartScreen: React.FC<CartScreenProps> = (props) => {
  const { cartItems } = useAppSelector((state) => state.cart);

  if (!cartItems.length) {
    return <Empty />;
  }

  return <CartItems cartItems={cartItems} />;
};
export default CartScreen;
