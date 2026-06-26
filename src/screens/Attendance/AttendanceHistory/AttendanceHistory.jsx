import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';

const historyData = [
  { id: '1', day: 'FRI', date: '20', time: '09:05 AM - 06:12 PM', status: 'Completed', hours: '8.07h' },
  { id: '2', day: 'THU', date: '20', time: '09:05 AM - 06:12 PM', status: 'Completed', hours: '8.07h' },
  { id: '3', day: 'WED', date: '20', time: '09:05 AM - 06:12 PM', status: 'Completed', hours: '8.07h' },
  { id: '4', day: 'TUE', date: '20', time: '09:05 AM - 06:12 PM', status: 'Completed', hours: '8.07h' },
  { id: '5', day: 'MON', date: '20', time: '09:05 AM - 06:12 PM', status: 'Completed', hours: '8.07h' },
  { id: '6', day: 'SAT', date: '20', time: '09:05 AM - 06:12 PM', status: 'Completed', hours: '8.07h' },
];

const AttendanceHistory = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Attendance Record</Text>
        <TouchableOpacity>
          <Text style={styles.sortByText}>Sort By</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {historyData.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.dateBox}>
              <Text style={styles.dayText}>{item.day}</Text>
              <Text style={styles.dateNumberText}>{item.date}</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.timeText}>{item.time}</Text>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
            <Text style={styles.hoursText}>{item.hours}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AttendanceHistory;

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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  sectionTitle: {
    fontSize: typography.h3,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  sortByText: {
    fontSize: typography.body,
    color: colors.primary,
    fontWeight: '500',
  },
  listContainer: {
    gap: rh(1.5),
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(3.5),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  dateBox: {
    width: rw(12),
    height: rw(12),
    backgroundColor: '#F3F4F6',
    borderRadius: rw(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(4),
  },
  dayText: {
    fontSize: rf(1),
    color: colors.textSecondary,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  dateNumberText: {
    fontSize: rf(1.8),
    color: colors.textPrimary,
    fontWeight: '700',
    lineHeight: rf(2.2),
  },
  detailsContainer: {
    flex: 1,
  },
  timeText: {
    fontSize: rf(1.5),
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: rh(0.3),
  },
  statusText: {
    fontSize: rf(1.3),
    color: colors.textSecondary,
  },
  hoursText: {
    fontSize: rf(1.8),
    fontWeight: '700',
    color: colors.primary,
  },
});
