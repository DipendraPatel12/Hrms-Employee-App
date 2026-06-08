import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './src/navigations/RootNavigator'
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <RootNavigator />
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})