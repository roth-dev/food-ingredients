import moment from "moment";
import React, { Fragment } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Label } from "../../../components/commons";
import { useAppSelector } from "../../../store";
import { Colors, Themes } from "../../../styles";
import { PADDING } from "../../../styles/scale";
import { FONT_SIZE_16, FONT_SIZE_18 } from "../../../styles/Typography";
import Categories from "./Categories";
import Popular from "./Popular";
import Recommend from "./Recommend";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  order: {
    padding: PADDING,
    borderRadius: 10,
  },
});

interface IProps {}

const index: React.FC<IProps> = (props) => {
  const { orders } = useAppSelector((state) => state.orders);
  const renderItems = () => {
    return (
      <Fragment>
        {orders && (
          <View style={[Themes.SHADOW, styles.order]}>
            <Label style={{ fontSize: FONT_SIZE_16 }}>
              You order status is{" "}
              <Label
                bold
                style={{ color: Colors.BASECOLOR, fontSize: FONT_SIZE_18 }}
              >
                {orders?.orderstatus}...
              </Label>
            </Label>
            <Label style={{ opacity: 0.5 }}>
              {moment(orders?.createdAt).format("YYYY-MM-DD")}
            </Label>
          </View>
        )}

        <Categories />
        <Popular />
        <Recommend />
      </Fragment>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={[1]}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItems}
      />
    </View>
  );
};
export default index;
