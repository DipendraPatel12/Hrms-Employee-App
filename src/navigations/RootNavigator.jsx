import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const RootNavigator = () => {
  const isLoggedIn = false; // Replace with actual authentication logic
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        // Render authenticated screens
        <AppNavigator />
      ) : (
        // Render authentication screens
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
