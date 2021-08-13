import React from "react";
import { View, StyleSheet } from "react-native";
import {
  BottomTabBarProps,
  BottomTabBarOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Colors, Themes } from "../../styles";
import {
  FONT_SIZE_11,
  FONT_SIZE_22,
  FONT_SIZE_9,
} from "../../styles/Typography";
import { HPADDING, WTDP, HEADER, PADDING } from "../../styles/scale";
import { navigate } from "../navigation";
import { ButtonIcon } from "./BottomTabs";
import { createStackNavigator } from "@react-navigation/stack";
import { DeliveryParamList } from "../ParamList";
import { HomeDelivery } from "../../screens/delivery/index";
const IMAGE = WTDP(5.5, 600);
const styles = StyleSheet.create({
  container: {
    height: HEADER,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: HPADDING,
    backgroundColor: Colors.WHITE,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    marginTop: PADDING,
    justifyContent: "space-between",
  },
  icon: {
    width: "auto",
    fontSize: FONT_SIZE_22,
  },
  img: {
    width: IMAGE,
    height: IMAGE,
    resizeMode: "contain",
  },
  title: {
    color: "#000",
    fontSize: FONT_SIZE_11,
    paddingHorizontal: HPADDING,
  },
  number: {
    color: "#FFF",
    fontSize: FONT_SIZE_9,
  },
});
const CustomTabs = (props: BottomTabBarProps<BottomTabBarOptions>) => {
  const index = props.state.index;
  return (
    <View style={[Themes.ROW, Themes.SHADOW, styles.container]}>
      <ButtonIcon
        font="brand"
        title="Dashboard"
        active={index === 0}
        icon="md-grid"
        // source={assets.LAYER}
        onPress={() => navigate("HomeDelivery")}
      />
      <ButtonIcon
        title="History"
        icon="clock"
        type="Feather"
        active={index === 1}
        onPress={() => navigate("Cart")}
      />
      <ButtonIcon
        title="Order"
        icon="list-alt"
        type="FontAwesome5"
        active={index === 2}
        onPress={() => navigate("Favorite")}
      />
      <ButtonIcon
        icon="user"
        title="Profile"
        type="Entypo"
        // source={assets.PROFILE}
        active={index === 3}
        onPress={() => navigate("Profile")}
      />
    </View>
  );
};

const Tabs = createBottomTabNavigator<DeliveryParamList>();
const Stack = createStackNavigator<DeliveryParamList>();

const HomeDeliveryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeDelivery" component={HomeDelivery} />
    </Stack.Navigator>
  );
};
export default function DevliveryTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="HomeDelivery"
      tabBar={(props) => <CustomTabs {...props} />}
    >
      <Tabs.Screen name="HomeDelivery" component={HomeDeliveryStack} />
    </Tabs.Navigator>
  );
}
