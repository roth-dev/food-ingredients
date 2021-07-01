import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens";
import { MainParamList } from "./ParamList";
import MainTabs from './Tabs/MainTabs'
const Stack = createStackNavigator<MainParamList>()
export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Home" component={MainTabs} />
    </Stack.Navigator>
  )
}