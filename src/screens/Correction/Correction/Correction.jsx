import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';
import Button from '../../../components/common/Button';
import LeaveIcon from '../../../assets/icons/leave.svg';

const correctionHistory = [
  { id: '1', date: 'Oct 24, 2023', time: '12:31 PM to 08:31 PM', reason: 'forget to check out', status: 'Approved' },
  { id: '2', date: 'Oct 26, 2023', time: '12:31 PM to 08:31 PM', reason: 'forget to check out', status: 'Pending' },
  { id: '3', date: 'Oct 20, 2023', time: '12:31 PM to 08:31 PM', reason: 'forget to check out', status: 'Rejected' },
];

const Correction = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.sectionTitle}>Request History</Text>

        <View style={styles.historyList}>
          {correctionHistory.map((item) => (
            <CorrectionItem 
              key={item.id}
              date={item.date}
              time={item.time}
              reason={item.reason}
              status={item.status}
            />
          ))}
        </View>

      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <Button 
          title="⊕ Request Correction" 
          onPress={() => navigation.navigate('RequestCorrection')} 
          style={styles.requestButton} 
        />
      </View>
    </View>
  );
};

const CorrectionItem = ({ date, time, reason, status }) => {
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
        <Text style={styles.historyTime}>{time}</Text>
        <Text style={styles.historyReason}>Reason: {reason}</Text>
      </View>
      <View style={[styles.badge, badgeStyle]}>
        <Text style={[styles.badgeText, badgeTextStyle]}>{status}</Text>
      </View>
    </View>
  );
};

export default Correction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    paddingHorizontal: rw(5),
    paddingTop: rh(3),
    paddingBottom: rh(15),
  },
  sectionTitle: {
    fontSize: typography.h3 || rf(2),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(2),
  },
  historyList: {
    gap: rh(1.5),
  },
  historyCard: {
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(4),
    flexDirection: 'row',
    alignItems: 'flex-start',
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
    marginTop: rh(0.5),
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
  historyTime: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
    marginBottom: rh(0.2),
  },
  historyReason: {
    fontSize: rf(1.2),
    color: '#9CA3AF',
  },
  badge: {
    paddingHorizontal: rw(2.5),
    paddingVertical: rh(0.5),
    borderRadius: rw(4),
    marginTop: rh(0.5),
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
