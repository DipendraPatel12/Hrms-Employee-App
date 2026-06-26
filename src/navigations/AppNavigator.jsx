import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../screens/Profile/Profile/Profile';
import Home from '../screens/Home/Home';
import Attendance from '../screens/Attendance/Attendance/Attendance';
import Leave from '../screens/Leave/Leave/Leave';
import Payroll from '../screens/Payroll/Payroll/Payroll';

import HomeIcon from '../assets/icons/home.svg';
import AttendanceIcon from '../assets/icons/attendance.svg';
import PayrollIcon from '../assets/icons/payroll.svg';
import LeaveIcon from '../assets/icons/leave.svg';
import ProfileIcon from '../assets/icons/profile.svg';
import ActiveHomeIcon from '../assets/icons/activeHome.svg';
import ActivePayrollIcon from '../assets/icons/activePayroll.svg';
import ActiveProfile from '../assets/icons/activeProfile.svg';
import ActiveAttendance from '../assets/icons/activeAttendance.svg';
import ActiveLeave from '../assets/icons/activeLeave.svg';

import BellIcon from '../assets/icons/bell.svg';
import { rf, rh, rw } from '../utils/responsive';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  let profileImage;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? (
              <ActiveHomeIcon width={24} height={24} />
            ) : (
              <HomeIcon width={24} height={24} />
            )
          ),
          headerShown: true,
          headerTitle: '',

          headerLeft: () => (
            <View
              style={{ marginLeft: rw(2), flexDirection: 'row', gap: rh(1) }}
            >
              <Image
                source={{
                  uri: profileImage ?? 'https://via.placeholder.com/40',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginLeft: 15,
                  backgroundColor: colors.textSecondary,
                }}
              />
              <View style={{}}>
                <Text style={{ color: colors.textSecondary }}>
                  Welcome Back
                </Text>
                <Text style={{ color: colors.primary, fontWeight: '800' }}>
                  Dipendra Patel
                </Text>
              </View>
            </View>
          ),

          headerRight: () => (
            <View style={{ marginRight: rw(3) }}>
              <View style={{ width: rw(10), height: rh(5), borderRadius: rh(3.5), backgroundColor: "gray", justifyContent: 'center', alignItems: 'center' }}>

                <BellIcon width={rw(5)} height={rw(6)} color={colors.textPrimary} style={styles.bellIcon} />
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            focused ? (
              <ActiveAttendance width={24} height={24} />
            ) : (
              <AttendanceIcon width={24} height={24} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="Leave"
        component={Leave}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            focused ? (
              <ActiveLeave width={24} height={24} />
            ) : (
              <LeaveIcon width={24} height={24} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="Payroll"
        component={Payroll}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            focused ? (
              <ActivePayrollIcon width={24} height={24} />
            ) : (
              <PayrollIcon width={24} height={24} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            focused ? (
              <ActiveProfile width={24} height={24} />
            ) : (
              <ProfileIcon width={24} height={24} />
            )
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;


const styles = StyleSheet.create({
  notificationDot: {
    position: 'absolute',
    top: rh(0.5),
    right: rw(0.5),
    width: rw(2.5),
    height: rw(2.5),
    borderRadius: rw(1.25),
    backgroundColor: colors.primary,
  },
  bellIcon: {
    // Only margin/padding/positioning styles work here.
    // Width, height, and color are passed directly as props to the <BellIcon /> component!
  }
});
