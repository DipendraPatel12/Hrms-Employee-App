import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';
import LeaveIcon from '../../../assets/icons/leave.svg';

const fullHistory = [
  { id: '1', date: 'Oct 24, 2023', description: 'Evening Shift • 3.5 hrs', status: 'Approved' },
  { id: '2', date: 'Oct 26, 2023', description: 'Project Deadline • 4.0 hrs', status: 'Pending' },
  { id: '3', date: 'Oct 20, 2023', description: 'Weekend Support • 1.5 hrs', status: 'Rejected' },
  { id: '4', date: 'Oct 18, 2023', description: 'Quarterly Audit • 5.0 hrs', status: 'Approved' },
  { id: '5', date: 'Oct 15, 2023', description: 'Inventory Check • 2.5 hrs', status: 'Approved' },
  { id: '6', date: 'Oct 10, 2023', description: 'Server Maintenance • 4.0 hrs', status: 'Approved' },
];

const OvertimeHistory = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>All Requests</Text>
      </View>

      <View style={styles.historyList}>
        {fullHistory.map((item) => (
          <HistoryItem 
            key={item.id}
            date={item.date}
            description={item.description}
            status={item.status}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const HistoryItem = ({ date, description, status }) => {
  let badgeStyle = styles.badgeApproved;
  let badgeTextStyle = styles.badgeApprovedText;

  if (status === 'Pending') {
    badgeStyle = styles.badgePending;
    badgeTextStyle = styles.badgePendingText;
  } else if (status === 'Rejected') {
    badgeStyle = styles.badgeRejected;
    badgeTextStyle = styles.badgeRejectedText;
  }

  return (
    <View style={styles.historyCard}>
      <View style={styles.historyIconContainer}>
        <LeaveIcon width={rw(5)} height={rw(5)} />
      </View>
      <View style={styles.historyContent}>
        <Text style={styles.historyDate}>{date}</Text>
        <Text style={styles.historyDescription}>{description}</Text>
      </View>
      <View style={[styles.badge, badgeStyle]}>
        <Text style={[styles.badgeText, badgeTextStyle]}>{status}</Text>
      </View>
    </View>
  );
};

export default OvertimeHistory;

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
    fontSize: typography.h3 || rf(2),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  historyList: {
    gap: rh(1.5),
  },
  historyCard: {
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(4),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  historyIconContainer: {
    width: rw(12),
    height: rw(12),
    backgroundColor: '#F3F4F6',
    borderRadius: rw(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(4),
  },
  historyContent: {
    flex: 1,
  },
  historyDate: {
    fontSize: rf(1.5),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.3),
  },
  historyDescription: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
  },
  badge: {
    paddingHorizontal: rw(2.5),
    paddingVertical: rh(0.5),
    borderRadius: rw(4),
  },
  badgeText: {
    fontSize: rf(1.1),
    fontWeight: '600',
  },
  badgeApproved: {
    backgroundColor: '#DCFCE7',
  },
  badgeApprovedText: {
    color: '#166534',
  },
  badgePending: {
    backgroundColor: '#FEF3C7',
  },
  badgePendingText: {
    color: '#D97706',
  },
  badgeRejected: {
    backgroundColor: '#FEE2E2',
  },
  badgeRejectedText: {
    color: '#DC2626',
  },
});
