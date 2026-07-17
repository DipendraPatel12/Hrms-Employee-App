import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigations/RootNavigator';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/utils/toastConfig';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="white" />
        <RootNavigator />
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})