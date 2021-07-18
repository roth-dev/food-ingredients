import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import {
  CartScreen,
  FavoriteScreen,
  HomeScreen,
  ProfileScreen,
} from '../../screens';
import { MainParamList } from '../ParamList';
import HomeHeader from '../header/HomeHeader';
import { Colors } from '../../styles';
const Tabs = createBottomTabNavigator<MainParamList>();
const Stack = createStackNavigator<MainParamList>()
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // header: (((props: StackHeaderProps) => <HomeHeader {...props} />))
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: Colors.BASECOLOR
    }}>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "MY CART"
        }}
      />
    </Stack.Navigator>
  )
}
const FavoriteStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: Colors.BASECOLOR
    }}>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "MY FAVORITE"
        }}
      />
    </Stack.Navigator>
  )
}
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: Colors.BASECOLOR
    }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "MY ACCOUNT"
        }}
      />
    </Stack.Navigator>
  )
}
const TabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomTabs {...props} />}

    >
      <Tabs.Screen
        name="Home"
        component={HomeStack}
      />
      <Tabs.Screen
        name="Cart"
        component={CartStack}
      />
      <Tabs.Screen
        name="Favorite"
        component={FavoriteStack}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileStack}
      />
    </Tabs.Navigator>
  )
}
export default TabNavigator