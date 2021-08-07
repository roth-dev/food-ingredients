import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
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

  const renderItems = () => {
    return;
  };
  return <CartItems cartItems={cartItems} />;
};
export default CartScreen;
