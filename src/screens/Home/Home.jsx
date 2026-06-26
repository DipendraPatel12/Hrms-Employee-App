import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/colors';
import { rh, rw, rf } from '../../utils/responsive';
import typography from '../../theme/typography';
import Button from '../../components/common/Button';
import BellIcon from '../../assets/icons/bell.svg';
import ActiveLeaveIcon from '../../assets/icons/activeLeave.svg';
import ActivePayrollIcon from '../../assets/icons/activePayroll.svg';
import CorrectionIcon from '../../assets/icons/correctionIcon.svg';
import OvertimeIcon from '../../assets/icons/overtimeIcon.svg';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

      {/* Today Attendance */}
      <View style={styles.card}>
        <View style={styles.attendanceHeader}>
          <View>
            <Text style={styles.cardTitle}>Today Attendance</Text>
            <Text style={styles.dateText}>Monday, Oct 23</Text>
          </View>
          <View style={styles.badgeDanger}>
            <Text style={styles.badgeDangerText}>! Not Checked In</Text>
          </View>
        </View>

        <View style={styles.timeCardsContainer}>
          <View style={styles.timeCard}>
            <Text style={styles.timeCardLabel}>CHECK-IN</Text>
            <Text style={styles.timeCardValue}>--:--</Text>
          </View>
          <View style={styles.timeCard}>
            <Text style={styles.timeCardLabel}>WORKING HOURS</Text>
            <Text style={styles.timeCardValue}>--:--</Text>
          </View>
        </View>

        <Button title="Check-In Now" onPress={() => { }} style={styles.checkInButton} />
      </View>

      {/* Current Project */}
      <View style={styles.card}>
        <View style={styles.projectHeader}>
          <Text style={styles.projectSubtitle}>CURRENT PROJECT</Text>
          <View style={styles.badgeSuccess}>
            <View style={styles.activeDot} />
            <Text style={styles.badgeSuccessText}>Active</Text>
          </View>
        </View>
        <Text style={styles.cardTitle}>Al-Naseem Logistics Hub</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>Riyadh, KSA</Text>
        </View>

        <View style={styles.shiftCard}>
          <View style={styles.clockIconContainer}>
            <Text style={styles.clockIcon}>🕒</Text>
          </View>
          <View>
            <Text style={styles.shiftLabel}>SHIFT TIMING</Text>
            <Text style={styles.shiftValue}>09:00 AM - 06:00 PM</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.outlineButtonText}>View Details ›</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActionsContainer}>
        <ActionItem Icon={ActiveLeaveIcon} label="Apply Leave" onPress={() => navigation.navigate('ApplyLeave')} />
        <ActionItem Icon={ActivePayrollIcon} label="View Payslip" onPress={() => navigation.navigate('Payslip')} />
        <ActionItem Icon={CorrectionIcon} label="Correction" onPress={() => navigation.navigate('Correction')} />
        <ActionItem Icon={OvertimeIcon} label="Overtime" onPress={() => navigation.navigate('Overtime')} />
      </View>

      {/* Leave Balance */}
      <View style={[styles.card, styles.leaveBalanceCard]}>
        <View style={styles.leaveBalanceHeader}>
          <Text style={styles.leaveBalanceTitle}>Leave Balance</Text>
          <Text style={styles.infoIcon}>ⓘ</Text>
        </View>
        <View style={styles.leaveBalanceContent}>
          <View style={styles.leaveBalanceLeft}>
            <Text style={styles.leaveAvailableText}>Available</Text>
            <Text style={styles.leaveDaysNumber}>14</Text>
            <Text style={styles.leaveDaysLabel}>DAYS REMAINING</Text>
          </View>
          <View style={styles.leaveBalanceRight}>
            <View style={styles.leaveTypeRow}>
              <Text style={styles.leaveTypeText}>Annual Leave</Text>
              <Text style={styles.leaveTypeValue}>8.0 Days</Text>
            </View>
            <View style={styles.leaveTypeRow}>
              <Text style={styles.leaveTypeText}>Sick Leave</Text>
              <Text style={styles.leaveTypeValue}>6 Days</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Recent Updates */}
      <View style={styles.recentUpdatesHeader}>
        <Text style={styles.sectionTitle}>Recent Updates</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.updateItem}>
        <View style={styles.updateIconContainer}>
          <Text style={styles.updateIconSuccess}>✓</Text>
        </View>
        <View style={styles.updateContent}>
          <View style={styles.updateTitleRow}>
            <Text style={styles.updateTitleSuccess}>Leave Approved</Text>
            <Text style={styles.updateTime}>2 hours ago</Text>
          </View>
          <Text style={styles.updateDescription}>Your request for Nov 12-14 was approved by HR.</Text>
        </View>
      </View>

      <View style={styles.updateItem}>
        <View style={styles.updateIconContainer}>
          <Text style={styles.updateIconNormal}>📄</Text>
        </View>
        <View style={styles.updateContent}>
          <View style={styles.updateTitleRow}>
            <Text style={styles.updateTitlePrimary}>New Policy Update</Text>
            <Text style={styles.updateTime}>Yesterday</Text>
          </View>
          <Text style={styles.updateDescription}>Please review the updated remote work guidelines.</Text>
        </View>
      </View>
      <View style={{ height: rh(10) }} />
    </ScrollView>
  );
};

const ActionItem = ({ Icon, label, onPress }) => (
  <TouchableOpacity style={styles.actionItem} onPress={onPress}>
    <View style={styles.actionIconContainer}>
      <Icon width={rw(6)} height={rw(6)} />
    </View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

export default Home;

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
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: rh(2),
  },
  headerIconContainer: {
    position: 'relative',
  },
  bellIcon: {
    width: rw(6),
    height: rw(6),
    resizeMode: 'contain',
    tintColor: colors.textPrimary,
  },
  notificationDot: {
    position: 'absolute',
    top: -2,
    right: 0,
    width: rw(2.5),
    height: rw(2.5),
    backgroundColor: colors.danger,
    borderRadius: rw(1.25),
    borderWidth: 1,
    borderColor: colors.white,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: rw(4),
    padding: rw(4),
    marginBottom: rh(2),
    borderWidth: 1,
    borderColor: colors.border,
  },
  attendanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: rh(2),
  },
  cardTitle: {
    fontSize: typography.h3,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.5),
  },
  dateText: {
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
  badgeDanger: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: rw(2.5),
    paddingVertical: rh(0.5),
    borderRadius: rw(4),
  },
  badgeDangerText: {
    color: colors.danger,
    fontSize: rf(1.5),
    fontWeight: '600',
  },
  timeCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rh(2),
  },
  timeCard: {
    backgroundColor: '#F3F4F6',
    flex: 1,
    borderRadius: rw(2),
    padding: rw(3),
    marginRight: rw(2),
  },
  timeCardLabel: {
    fontSize: rf(1.3),
    color: colors.textSecondary,
    fontWeight: '600',
    marginBottom: rh(0.5),
  },
  timeCardValue: {
    fontSize: typography.body,
    color: colors.textPrimary,
    fontWeight: '700',
  },
  checkInButton: {
    width: '100%',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(1),
  },
  projectSubtitle: {
    fontSize: rf(1.4),
    color: colors.textSecondary,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  badgeSuccess: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: rw(2.5),
    paddingVertical: rh(0.5),
    borderRadius: rw(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeDot: {
    width: rw(1.5),
    height: rw(1.5),
    backgroundColor: colors.success,
    borderRadius: rw(0.75),
    marginRight: rw(1),
  },
  badgeSuccessText: {
    color: '#166534',
    fontSize: rf(1.5),
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  locationIcon: {
    fontSize: rf(1.6),
    marginRight: rw(1),
  },
  locationText: {
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
  shiftCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: rw(2),
    padding: rw(3),
    marginBottom: rh(2),
  },
  clockIconContainer: {
    width: rw(8),
    height: rw(8),
    backgroundColor: '#E0E7FF',
    borderRadius: rw(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(3),
  },
  clockIcon: {
    fontSize: rf(1.8),
  },
  shiftLabel: {
    fontSize: rf(1.3),
    color: colors.textSecondary,
    fontWeight: '600',
    marginBottom: rh(0.2),
  },
  shiftValue: {
    fontSize: rf(1.6),
    color: colors.textPrimary,
    fontWeight: '700',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: rw(2.5),
    paddingVertical: rh(1.5),
    alignItems: 'center',
  },
  outlineButtonText: {
    color: colors.primary,
    fontSize: typography.body,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: typography.h3,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: rh(1),
    marginBottom: rh(2),
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rh(3),
  },
  actionItem: {
    alignItems: 'center',
    width: rw(20),
  },
  actionIconContainer: {
    width: rw(12),
    height: rw(12),
    backgroundColor: colors.white,
    borderRadius: rw(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rh(1),
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionIcon: {
    fontSize: rf(2.2),
    color: colors.primary,
  },
  actionLabel: {
    fontSize: rf(1.4),
    color: colors.textPrimary,
    textAlign: 'center',
    fontWeight: '500',
  },
  leaveBalanceCard: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    overflow: 'hidden',
  },
  leaveBalanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  leaveBalanceTitle: {
    fontSize: typography.h3,
    color: colors.white,
    fontWeight: '600',
  },
  infoIcon: {
    fontSize: rf(2),
    color: colors.white,
  },
  leaveBalanceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leaveBalanceLeft: {
    flex: 1,
  },
  leaveAvailableText: {
    fontSize: rf(1.6),
    color: 'rgba(255,255,255,0.8)',
    marginBottom: rh(0.5),
  },
  leaveDaysNumber: {
    fontSize: rf(6),
    color: colors.white,
    fontWeight: '700',
    lineHeight: rf(6.5),
  },
  leaveDaysLabel: {
    fontSize: rf(1.2),
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
    letterSpacing: 1,
  },
  leaveBalanceRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leaveTypeRow: {
    alignItems: 'flex-end',
    marginBottom: rh(1),
  },
  leaveTypeText: {
    fontSize: rf(1.5),
    color: 'rgba(255,255,255,0.8)',
    marginBottom: rh(0.2),
  },
  leaveTypeValue: {
    fontSize: rf(1.6),
    color: colors.white,
    fontWeight: '700',
  },
  recentUpdatesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: rh(1),
    marginBottom: rh(2),
  },
  viewAllText: {
    fontSize: typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
  updateItem: {
    flexDirection: 'row',
    marginBottom: rh(2),
    alignItems: 'flex-start',
  },
  updateIconContainer: {
    width: rw(10),
    height: rw(10),
    borderRadius: rw(5),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(3),
  },
  updateIconSuccess: {
    fontSize: rf(1.8),
    color: colors.primary,
  },
  updateIconNormal: {
    fontSize: rf(1.8),
  },
  updateContent: {
    flex: 1,
  },
  updateTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(0.5),
  },
  updateTitleSuccess: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.success,
  },
  updateTitlePrimary: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.primary,
  },
  updateTime: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
  },
  updateDescription: {
    fontSize: rf(1.6),
    color: colors.textSecondary,
    lineHeight: rf(2.2),
  },
});
