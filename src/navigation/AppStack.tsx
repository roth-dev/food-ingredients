import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import {
  ProductDetailScreen,
  CategorieScreen,
  SearchScreen,
  NotificationScreen
} from "../screens";
import { MainParamList } from "./ParamList";
import MainTabs from './Tabs/MainTabs'
import HeaderLeft from './header/headerLeft'
import { Colors } from '../styles';
import { FONT_SIZE_20 } from '../styles/Typography';
const Stack = createStackNavigator<MainParamList>()
export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.BASECOLOR,
        headerTitleStyle: { fontSize: FONT_SIZE_20 },
        headerLeft: (props => <HeaderLeft {...props} />)
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Home" component={MainTabs} />
      <Stack.Screen
        name="ProductDetail" component={ProductDetailScreen}
        options={{
          // headerShown: false
        }} />
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