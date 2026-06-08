import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AuthNavigator';
import AuthNavigator from './AuthNavigator';

const RootNavigator = () => {
  const isLoggedIn = false; // Replace with actual authentication logic
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        // Render authenticated screens
        <AuthNavigator />
      ) : (
        // Render authentication screens
        <AppNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
