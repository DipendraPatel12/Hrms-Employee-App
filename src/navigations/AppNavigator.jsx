import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile/Profile';
import Home from '../screens/Home/Home';
import Attendance from '../screens/Attendance/Attendance/Attendance';
import Leave from '../screens/Leave/Leave/Leave';
import Payroll from '../screens/Payroll/Payroll/Payroll';
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Attendance" component={Attendance} />
      <Tab.Screen name="Leave" component={Leave} />
      <Tab.Screen name="Payroll" component={Payroll} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
