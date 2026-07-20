import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/slice/auth.slice';
import Toast from 'react-native-toast-message';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';

const MenuItem = ({ title, onPress, icon }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <Text style={styles.menuIcon}>{icon}</Text>
      <Text style={styles.menuTitle}>{title}</Text>
    </View>
    <Text style={styles.menuChevron}>›</Text>
  </TouchableOpacity>
);

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    Toast.show({
      type: 'success',
      text1: 'Logged Out',
      text2: 'You have been successfully logged out.',
      position: 'top',
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Top Profile Info */}
        <View style={styles.profileHeader}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' }} 
              style={styles.profileImage}
            />
            <View style={styles.editBadge}>
              <Text style={styles.editIcon}>✏️</Text>
            </View>
          </View>
          <Text style={styles.userName}>Marcus Chen</Text>
          <Text style={styles.empId}>EMP ID: 789456123</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Active Employee</Text>
          </View>
        </View>

        {/* Main Menu List */}
        <View style={styles.menuContainer}>
          <MenuItem icon="👤" title="Personal Information" onPress={() => navigation.navigate('PersonalInformation')} />
          <MenuItem icon="👥" title="Dependent" onPress={() => navigation.navigate('Dependent')} />
          <MenuItem icon="🔔" title="Notifications" onPress={() => navigation.navigate('Notification')} />
          <MenuItem icon="📝" title="Apply Leave" onPress={() => navigation.navigate('ApplyLeave')} />
          <MenuItem icon="📅" title="Attendance Correction" onPress={() => navigation.navigate('Correction')} />
          <MenuItem icon="📄" title="View Payslip" onPress={() => navigation.navigate('Payslip')} />
          <MenuItem icon="⏱️" title="Overtime" onPress={() => navigation.navigate('Overtime')} />
          <MenuItem icon="📋" title="Document" onPress={() => navigation.navigate('Document')} />
          <MenuItem icon="💼" title="Projects" onPress={() => navigation.navigate('Projects')} />
          <MenuItem icon="🎧" title="Support Center" onPress={() => navigation.navigate('SupportCenter')} />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutIcon}>🚪</Text>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    paddingHorizontal: rw(5),
    paddingTop: rh(3),
    paddingBottom: rh(15),
    alignItems: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: rh(3),
  },
  imageContainer: {
    position: 'relative',
    marginBottom: rh(1.5),
  },
  profileImage: {
    width: rw(24),
    height: rw(24),
    borderRadius: rw(12),
    backgroundColor: '#E2E8F0',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0F52BA',
    width: rw(7),
    height: rw(7),
    borderRadius: rw(3.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F9FAFB',
  },
  editIcon: {
    fontSize: rf(1.2),
    color: colors.white,
  },
  userName: {
    fontSize: rf(2.2),
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: rh(0.5),
  },
  empId: {
    fontSize: rf(1.4),
    color: colors.textSecondary,
    marginBottom: rh(1),
  },
  statusBadge: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: rw(3),
    paddingVertical: rh(0.5),
    borderRadius: rw(3),
  },
  statusText: {
    color: '#1E3A8A',
    fontSize: rf(1.2),
    fontWeight: '700',
  },
  menuContainer: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: rw(4),
    paddingVertical: rh(1),
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: rh(4),
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rh(2),
    paddingHorizontal: rw(4),
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: rf(1.8),
    marginRight: rw(3),
  },
  menuTitle: {
    fontSize: rf(1.4),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  menuChevron: {
    fontSize: rf(2),
    color: '#CBD5E1',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: rh(2),
  },
  logoutIcon: {
    fontSize: rf(1.8),
    marginRight: rw(2),
    color: '#EF4444',
  },
  logoutText: {
    fontSize: rf(1.6),
    fontWeight: '700',
    color: '#EF4444',
    letterSpacing: 0.5,
  },
});