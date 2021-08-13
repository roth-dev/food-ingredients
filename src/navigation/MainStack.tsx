import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { navigationRef } from "./navigation";
import ContextProvider from "../context";
import { SafeAreaView } from "react-native-safe-area-context";
import { Themes } from "../styles";
import { useAppSelector } from "../store";
import LoadingScreen from "../screens/auth/LoadingScreen";
import { getLocationPermission } from "../libs/location";
import DevliveryStack from "./DevliveryStack";
const Navigator = () => {
  const {
    user,
    categories: { categories: cat, loading },
  } = useAppSelector((state) => state);
  let content: React.ReactNode;
  if (!user.token) {
    content = <AuthStack />;
  } else if (user.token && loading) {
    content = <LoadingScreen />;
  } else if (user.token && !loading && !cat.length) {
    content = <LoadingScreen />;
  } else if (user.token && user?.user?.role?.name === "devlivery" && !loading) {
    content = <DevliveryStack />;
  } else {
    content = <AppStack />;
  }
  return (
    <NavigationContainer
      onReady={() => {
        getLocationPermission();
      }}
      ref={navigationRef}
    >
      <SafeAreaView style={Themes.SAFEAREA}>{content}</SafeAreaView>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <ContextProvider>
      <Navigator />
    </ContextProvider>
  );
};
