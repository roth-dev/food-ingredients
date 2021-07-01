import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { navigationRef } from './navigation'
import { LogcalStorage } from '../storage/LocalStorage';
import ContextProvider, { AppCreateContext } from '../context';
const Navigator = () => {
  const { token, setState } = useContext(AppCreateContext)
  const [loading, setLoading] = useState<boolean>(true)
  const getToken = () => {
    const promise = new Promise((resolve) => {
      LogcalStorage.init().then((res) => {
        resolve({});
        setState({
          token: res.token || null
        })
      })
    })
    return promise
  };

  useEffect(() => {
    Promise.all([
      getToken()
    ]).finally(() => {
      setLoading(false);
    })
  }, [])
  let content: React.ReactNode;
  if (!token && loading) {
    content = null
  } else if (!token && !loading) {
    content = <AuthStack />
  } else {
    content = <AppStack />
  }
  return (
    <NavigationContainer ref={navigationRef}>
      {content}
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