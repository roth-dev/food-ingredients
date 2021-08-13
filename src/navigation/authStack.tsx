import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, WelcomeScreen, SignUpScreen } from "../screens";
import { AuthParamList } from "./ParamList";
const Stack = createStackNavigator<AuthParamList>();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        options={{ headerShown: true, title: "Sign Up" }}
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};
