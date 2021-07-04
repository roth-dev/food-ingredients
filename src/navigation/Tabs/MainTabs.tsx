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
  SearchScreen
} from '../../screens';
import { MainParamList } from '../ParamList';
import HomeHeader from '../header/HomeHeader';
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
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  )
}
const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
}
const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
    </Stack.Navigator>
  )
}
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
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