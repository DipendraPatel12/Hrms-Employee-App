import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import AttendanceHistory from '../screens/Attendance/AttendanceHistory/AttendanceHistory';
import LeaveHistory from '../screens/Leave/LeaveHistory/LeaveHistory';
import ApplyLeave from '../screens/Leave/ApplyLeave/ApplyLeave';
import PayrollHistory from '../screens/Payroll/PayrollHistory/PayrollHistory';
import Payslip from '../screens/Payroll/Payslip/Payslip';
import Overtime from '../screens/Overtime/Overtime/Overtime';
import OvertimeHistory from '../screens/Overtime/OvertimeHistory/OvertimeHistory';
import RequestOvertime from '../screens/Overtime/RequestOvertime/RequestOvertime';
import Correction from '../screens/Correction/Correction/Correction';
import RequestCorrection from '../screens/Correction/RequestCorrection/RequestCorrection';
import PersonalInformation from '../screens/Profile/PersonalInformation/PersonalInformation';
import Notification from '../screens/Profile/Notification/Notification';
import SupportCenter from '../screens/Profile/SupportCenter/SupportCenter';
import Dependent from '../screens/Profile/Dependent/Dependent';
import AddDependent from '../screens/Profile/AddDependent/AddDependent';
import Projects from '../screens/Profile/Projects/Projects';
import AssignedProject from '../screens/Profile/AssignedProject/AssignedProject';
import PastProjectDetail from '../screens/Profile/PastProjectDetail/PastProjectDetail';
import Document from '../screens/Profile/Document/Document';
import UploadDocument from '../screens/Profile/UploadDocument/UploadDocument';
import colors from '../theme/colors';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={AppNavigator} />
    <Stack.Screen 
      name="AttendanceHistory" 
      component={AttendanceHistory} 
      options={{ 
        headerShown: true, 
        title: 'Attendance History',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: colors.primary,
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="LeaveHistory" 
      component={LeaveHistory} 
      options={{ 
        headerShown: true, 
        title: 'Leave History',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: colors.primary,
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="ApplyLeave" 
      component={ApplyLeave} 
      options={{ 
        headerShown: true, 
        title: 'Apply Leave',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="PayrollHistory" 
      component={PayrollHistory} 
      options={{ 
        headerShown: true, 
        title: 'Payroll History',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="Payslip" 
      component={Payslip} 
      options={{ 
        headerShown: true, 
        title: 'Payslip',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="Overtime" 
      component={Overtime} 
      options={{ 
        headerShown: true, 
        title: 'Overtime',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="OvertimeHistory" 
      component={OvertimeHistory} 
      options={{ 
        headerShown: true, 
        title: 'Overtime History',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="RequestOvertime" 
      component={RequestOvertime} 
      options={{ 
        headerShown: true, 
        title: 'Request Overtime',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="Correction" 
      component={Correction} 
      options={{ 
        headerShown: true, 
        title: 'Correction',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="RequestCorrection" 
      component={RequestCorrection} 
      options={{ 
        headerShown: true, 
        title: 'Request Correction',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="PersonalInformation" 
      component={PersonalInformation} 
      options={{ 
        headerShown: true, 
        title: 'Personal information',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="Notification" 
      component={Notification} 
      options={{ 
        headerShown: true, 
        title: 'Notification',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="SupportCenter" 
      component={SupportCenter} 
      options={{ 
        headerShown: true, 
        title: 'Support Center',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="Dependent" 
      component={Dependent} 
      options={{ 
        headerShown: true, 
        title: 'Dependent',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="AddDependent" 
      component={AddDependent} 
      options={{ 
        headerShown: true, 
        title: 'Add Dependent',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="Projects" 
      component={Projects} 
      options={{ 
        headerShown: true, 
        title: 'Projects',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="AssignedProject" 
      component={AssignedProject} 
      options={{ 
        headerShown: true, 
        title: 'Assigned Project',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="PastProjectDetail" 
      component={PastProjectDetail} 
      options={{ 
        headerShown: true, 
        title: 'Past Project Detail',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="Document" 
      component={Document} 
      options={{ 
        headerShown: true, 
        title: 'Document',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
    <Stack.Screen 
      name="UploadDocument" 
      component={UploadDocument} 
      options={{ 
        headerShown: true, 
        title: 'Upload Document',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontWeight: '700',
        }
      }} 
    />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const isLoggedIn = true; // Replace with actual authentication logic
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        // Render authenticated screens
        <MainStack />
      ) : (
        // Render authentication screens
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
