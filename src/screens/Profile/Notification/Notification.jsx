import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import LeaveIcon from '../../../assets/icons/leave.svg'; 

const notificationsToday = [
  { id: '1', title: 'Leave Approved', message: 'Your annual leave request for Dec 20 - Dec 24 has been approved by Marcus Thorne.', time: '2m ago' },
  { id: '2', title: 'Leave Approved', message: 'Your annual leave request for Dec 20 - Dec 24 has been approved by Marcus Thorne.', time: '2m ago' },
  { id: '3', title: 'Leave Approved', message: 'Your annual leave request for Dec 20 - Dec 24 has been approved by Marcus Thorne.', time: '2m ago' },
];

const notificationsPast = [
  { id: '4', title: 'Leave Approved', message: 'Your annual leave request for Dec 20 - Dec 24 has been approved by Marcus Thorne.', time: '2m ago' },
  { id: '5', title: 'Leave Approved', message: 'Your annual leave request for Dec 20 - Dec 24 has been approved by Marcus Thorne.', time: '2m ago' },
  { id: '6', title: 'Leave Approved', message: 'Your annual leave request for Dec 20 - Dec 24 has been approved by Marcus Thorne.', time: '2m ago' },
];

const NotificationItem = ({ title, message, time }) => (
  <View style={styles.notificationItem}>
    <View style={styles.iconContainer}>
      <LeaveIcon width={rw(5)} height={rw(5)} />
    </View>
    <View style={styles.itemContent}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  </View>
);

const Notification = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Today Section */}
        <Text style={styles.sectionTitle}>Today</Text>
        <View style={styles.sectionContainer}>
          {notificationsToday.map((item, index) => (
            <React.Fragment key={item.id}>
              <NotificationItem 
                title={item.title} 
                message={item.message} 
                time={item.time} 
              />
              {index < notificationsToday.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </View>

        {/* Past Section */}
        <Text style={styles.sectionTitle}>Past</Text>
        <View style={styles.sectionContainer}>
          {notificationsPast.map((item, index) => (
            <React.Fragment key={item.id}>
              <NotificationItem 
                title={item.title} 
                message={item.message} 
                time={item.time} 
              />
              {index < notificationsPast.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </View>

      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    paddingHorizontal: rw(5),
    paddingTop: rh(2),
    paddingBottom: rh(5),
  },
  sectionTitle: {
    fontSize: rf(1.4),
    fontWeight: '700',
    color: '#64748B', 
    marginBottom: rh(1.5),
    marginTop: rh(1),
  },
  sectionContainer: {
    marginBottom: rh(2),
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: rh(1.5),
  },
  iconContainer: {
    width: rw(12),
    height: rw(12),
    borderRadius: rw(2.5),
    backgroundColor: '#E0E7FF', 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(3),
  },
  itemContent: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(0.5),
  },
  title: {
    fontSize: rf(1.6),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  time: {
    fontSize: rf(1.1),
    color: colors.textSecondary,
  },
  message: {
    fontSize: rf(1.3),
    color: colors.textSecondary,
    lineHeight: rf(1.8),
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginLeft: rw(15), 
  },
});
