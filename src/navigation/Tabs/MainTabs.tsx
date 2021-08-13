import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  StackHeaderProps,
} from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import {
  CartScreen,
  FavoriteScreen,
  HomeScreen,
  OrderSuccess,
} from "../../screens";
import { MainParamList } from "../ParamList";
import { Colors } from "../../styles";
import ProfileNavigator from "./ProfileNavigator";
import HeaderLeft from "../header/headerLeft";
const Tabs = createBottomTabNavigator<MainParamList>();
const Stack = createStackNavigator<MainParamList>();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerShown: false,
        // header: (((props: StackHeaderProps) => <HomeHeader {...props} />))
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.BASECOLOR,
        headerLeft: (props) => <HeaderLeft {...props} />,
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "MY CART",
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccess}
        options={{
          title: "Order Detail",
        }}
      />
    </Stack.Navigator>
  );
};
const FavoriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: Colors.BASECOLOR,
      }}
    >
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "MY FAVORITE",
        }}
      />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomTabs {...props} />}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Cart" component={CartStack} />
      <Tabs.Screen name="Favorite" component={FavoriteStack} />
      <Tabs.Screen name="Profile" component={ProfileNavigator} />
    </Tabs.Navigator>
  );
};
export default TabNavigator;
