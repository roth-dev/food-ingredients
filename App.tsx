import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { fetchFonts } from './src/libs/fonts';
import MainStack from './src/navigation/MainStack'
export default () => {
  const [isReady, setIsReady] = useState<boolean>(false)
  const onFinish = () => {
    setIsReady(true);
  }

  if (!isReady) {
    return (
      <AppLoading
        autoHideSplash={true}
        startAsync={fetchFonts}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }
  return <MainStack />
}