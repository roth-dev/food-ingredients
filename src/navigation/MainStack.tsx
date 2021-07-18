import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { navigationRef } from './navigation'
import ContextProvider from '../context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Themes } from '../styles';
import { useAppSelector } from '../store';
const Navigator = () => {
  const token = useAppSelector((state) => state.localStorage.token)
  const [loading, setLoading] = useState<boolean>(true)
  let content: React.ReactNode;
  if (!token) {
    content = <AuthStack />
  } else {
    content = <AppStack />
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={Themes.SAFEAREA}>
        {content}
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <ContextProvider>
      <Navigator />
    </ContextProvider>
  )

}