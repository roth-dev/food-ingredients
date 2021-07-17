import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import {
  ProductDetailScreen,
  CategorieScreen,
  SearchScreen,
  FavoriteScreen,
  NotificationScreen
} from "../screens";
import { MainParamList } from "./ParamList";
import MainTabs from './Tabs/MainTabs'
import HeaderLeft from './header/headerLeft'
import { Colors } from '../styles';
const Stack = createStackNavigator<MainParamList>()
export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.BASECOLOR,
        headerLeft: (props => <HeaderLeft {...props} />)
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Home" component={MainTabs} />
      <Stack.Screen
        name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen
        name="Categories"
        component={CategorieScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={SearchScreen} />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen} />
    </Stack.Navigator>
  )
}