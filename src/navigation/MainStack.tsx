import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import { navigationRef } from './navigation'
export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStack />
    </NavigationContainer>
  )
}