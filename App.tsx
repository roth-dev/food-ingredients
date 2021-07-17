import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { fetchFonts } from './src/libs/fonts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/index'
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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStack />
      </PersistGate>
    </Provider>
  )

}