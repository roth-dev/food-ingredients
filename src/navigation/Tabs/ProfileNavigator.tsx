import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainParamList } from '../ParamList';
import {
  EditProfileScreen,
  OrderListScreen,
  ProfileScreen,
  PromotionScreen,
  SettingScreen
} from '../../screens';
import { Colors } from '../../styles';
import HeaderLeft from './../header/headerLeft'
const Stack = createStackNavigator<MainParamList>()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTintColor: Colors.BASECOLOR,
        headerLeft: (props => <HeaderLeft {...props} />)
      }}

    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Order" component={OrderListScreen} />
      <Stack.Screen name="Promotion" component={PromotionScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  )
}