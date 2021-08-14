import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getRouteParam, INavigationScreenProps } from "../../navigation";
import NewOrder from "./components/NewOrder";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface NewOrderDetailProps {}

const NewOrderDetail: React.FC<INavigationScreenProps> = (props) => {
  const getParams = getRouteParam(props);
  const detail = getParams("detail", false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <NewOrder detail={detail} />
      </ScrollView>
    </View>
  );
};
export default NewOrderDetail;
