import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DeliveryParamList } from "./ParamList";
import DevliveryTabs from "./Tabs/DeliveryTabs";
const Stack = createStackNavigator<DeliveryParamList>();
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeDelivery"
        component={DevliveryTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
