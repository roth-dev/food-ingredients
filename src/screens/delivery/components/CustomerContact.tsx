import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  //your styles go here!!
});

interface CustomerContactProps {}

const CustomerContact: React.FC<CustomerContactProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>CustomerContact Screen</Text>
    </View>
  );
};
export default CustomerContact;
