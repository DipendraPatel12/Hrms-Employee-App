import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';
import Button from '../../../components/common/Button';
import LeaveIcon from '../../../assets/icons/leave.svg';

const overtimeHistory = [
  { id: '1', date: 'Oct 24, 2023', description: 'Evening Shift • 3.5 hrs', status: 'Approved' },
  { id: '2', date: 'Oct 26, 2023', description: 'Project Deadline • 4.0 hrs', status: 'Pending' },
  { id: '3', date: 'Oct 20, 2023', description: 'Weekend Support • 1.5 hrs', status: 'Rejected' },
  { id: '4', date: 'Oct 18, 2023', description: 'Quarterly Audit • 5.0 hrs', status: 'Approved' },
];

const Overtime = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Main Blue Card */}
        <View style={styles.mainCard}>
          <View style={styles.mainCardContent}>
            <View>
              <Text style={styles.mainCardSubtitle}>MONTHLY OVERTIME</Text>
              <Text style={styles.mainCardTitle}>24.5 <Text style={styles.mainCardTitleSmall}>hours</Text></Text>
              <Text style={styles.mainCardFooter}>Approved for October 2023</Text>
            </View>
            <View style={styles.clockIconContainer}>
              <Text style={styles.clockIcon}>🕒</Text>
            </View>
          </View>
        </View>

        {/* Quick Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconPendingContainer}>
              <Text style={styles.statIconSmall}>📋</Text>
            </View>
            <Text style={styles.statCardLabel}>Pending</Text>
            <Text style={styles.statCardValue}>4.0 hrs</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statIconRejectedContainer}>
              <Text style={styles.statIconSmall}>⊗</Text>
            </View>
            <Text style={styles.statCardLabel}>Rejected</Text>
            <Text style={styles.statCardValue}>1.5 hrs</Text>
          </View>
        </View>

        {/* Request History */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Request History</Text>
          <TouchableOpacity onPress={() => navigation.navigate('OvertimeHistory')}>
            <Text style={styles.viewAllText}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.historyList}>
          {overtimeHistory.map((item) => (
            <HistoryItem 
              key={item.id}
              date={item.date}
              description={item.description}
              status={item.status}
            />
          ))}
        </View>

      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <Button 
          title="⊕ Request Overtime" 
          onPress={() => navigation.navigate('RequestOvertime')} 
          style={styles.requestButton} 
        />
      </View>
    </View>
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

export default Overtime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    paddingHorizontal: rw(5),
    paddingTop: rh(2),
    paddingBottom: rh(15),
  },
  mainCard: {
    backgroundColor: '#0F52BA',
    borderRadius: rw(4),
    padding: rw(5),
    marginBottom: rh(2.5),
  },
  mainCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainCardSubtitle: {
    color: '#E2E8F0',
    fontSize: rf(1.1),
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: rh(1),
  },
  mainCardTitle: {
    color: colors.white,
    fontSize: rf(4),
    fontWeight: '800',
    marginBottom: rh(1),
  },
  mainCardTitleSmall: {
    fontSize: rf(1.8),
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  mainCardFooter: {
    color: '#E2E8F0',
    fontSize: rf(1.3),
  },
  clockIconContainer: {
    width: rw(16),
    height: rw(16),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: rw(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockIcon: {
    fontSize: rf(4),
    color: 'rgba(255, 255, 255, 0.5)',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rh(3),
    gap: rw(4),
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: rw(4),
    padding: rw(4),
    borderWidth: 1,
    borderColor: colors.border,
  },
  statIconPendingContainer: {
    width: rw(8),
    height: rw(8),
    backgroundColor: '#EFF6FF',
    borderRadius: rw(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rh(1),
  },
  statIconRejectedContainer: {
    width: rw(8),
    height: rw(8),
    backgroundColor: '#FEF2F2',
    borderRadius: rw(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rh(1),
  },
  statIconSmall: {
    fontSize: rf(1.8),
  },
  statCardLabel: {
    fontSize: rf(1.4),
    color: colors.textSecondary,
    marginBottom: rh(0.5),
  },
  statCardValue: {
    fontSize: rf(1.6),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  sectionTitle: {
    fontSize: rf(1.8),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  viewAllText: {
    fontSize: rf(1.2),
    fontWeight: '700',
    color: '#1E3A8A', 
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
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: rw(5),
    paddingVertical: rh(2),
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  requestButton: {
    width: '100%',
    borderRadius: rw(2),
  },
});
