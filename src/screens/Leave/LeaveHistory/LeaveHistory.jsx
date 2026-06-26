import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';

const historyData = [
  { id: '1', title: 'Sick Leave', date: 'Nov 02 • 1 Day', reason: 'Reason: Medical Leave', status: 'Pending', icon: '🏥' },
  { id: '2', title: 'Annual Leave', date: 'Oct 12 - Oct 15 • 3 Days', reason: 'Reason: Personal Trip', status: 'Approved', icon: '📅' },
  { id: '3', title: 'Casual Leave', date: 'Sep 20 • 1 Day', reason: 'Reason: Personal Work', status: 'Approved', icon: '🏖️' },
  { id: '4', title: 'Sick Leave', date: 'Aug 10 • 1 Day', reason: 'Reason: Fever', status: 'Approved', icon: '🏥' },
  { id: '5', title: 'Annual Leave', date: 'Jul 01 - Jul 05 • 5 Days', reason: 'Reason: Family Vacation', status: 'Approved', icon: '📅' },
];

const LeaveHistory = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>All Leave Requests</Text>
      </View>

      <View style={styles.listContainer}>
        {historyData.map((item) => (
          <RequestItem
            key={item.id}
            title={item.title}
            date={item.date}
            reason={item.reason}
            status={item.status}
            icon={item.icon}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const RequestItem = ({ title, date, reason, status, icon }) => {
  const isApproved = status === 'Approved';
  return (
    <View style={styles.requestCard}>
      <View style={styles.requestIconContainer}>
        <Text style={styles.requestIconText}>{icon}</Text>
      </View>
      <View style={styles.requestContent}>
        <Text style={styles.requestTitle}>{title}</Text>
        <Text style={styles.requestDate}>{date}</Text>
        <Text style={styles.requestReason}>{reason}</Text>
      </View>
      <View style={[styles.statusBadge, isApproved ? styles.statusApproved : styles.statusPending]}>
        <Text style={[styles.statusText, isApproved ? styles.statusTextApproved : styles.statusTextPending]}>
          {isApproved ? '✓ Approved' : '⏱ Pending'}
        </Text>
      </View>
    </View>
  );
};

export default LeaveHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    fontSize: typography.h3 || rf(2),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  listContainer: {
    gap: rh(1.5),
  },
  requestCard: {
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(4),
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: colors.border,
  },
  requestIconContainer: {
    width: rw(12),
    height: rw(12),
    backgroundColor: '#F3F4F6',
    borderRadius: rw(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(3),
  },
  requestIconText: {
    fontSize: rf(2.5),
  },
  requestContent: {
    flex: 1,
  },
  requestTitle: {
    fontSize: rf(1.6),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.3),
  },
  requestDate: {
    fontSize: rf(1.3),
    color: colors.textSecondary,
    marginBottom: rh(0.3),
  },
  requestReason: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
  },
  statusBadge: {
    paddingHorizontal: rw(2.5),
    paddingVertical: rh(0.5),
    borderRadius: rw(4),
  },
  statusPending: {
    backgroundColor: '#E5E7EB',
  },
  statusApproved: {
    backgroundColor: '#DCFCE7',
  },
  statusText: {
    fontSize: rf(1.2),
    fontWeight: '600',
  },
  statusTextPending: {
    color: '#4B5563',
  },
  statusTextApproved: {
    color: '#166534',
  },
});
