import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';
import LeaveIcon from '../../../assets/icons/leave.svg';
import ActiveLeaveIcon from '../../../assets/icons/activeLeave.svg';

const Leave = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

        {/* Leave Balances Header */}
        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Leave Balances</Text>
          <Text style={styles.yearText}>Year 2024</Text>
        </View>

        {/* Annual Leave Card */}
        <View style={styles.mainCard}>
          <View style={styles.mainCardHeader}>
            <View>
              <Text style={styles.cardSubtitle}>ANNUAL LEAVE</Text>
              <Text style={styles.mainCardTitle}>14 Days</Text>
            </View>
            <View style={styles.iconContainerBlue}>
              <LeaveIcon width={rw(5)} height={rw(5)} />
            </View>
          </View>
          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarTrack}>
              <View style={[styles.progressBarFill, { width: '40%' }]} />
            </View>
            <Text style={styles.progressText}>10 days used out of 24</Text>
          </View>
        </View>

        {/* Other Leaves Row */}
        <View style={styles.otherLeavesContainer}>
          <View style={styles.smallCard}>
            <Text style={styles.sickIconText}>🏥</Text>
            <Text style={styles.cardSubtitle}>SICK LEAVE</Text>
            <Text style={styles.smallCardTitle}>06 Days</Text>
          </View>
          <View style={styles.smallCard}>
            <View style={{ marginBottom: rh(1) }}>
              <ActiveLeaveIcon width={rw(5)} height={rw(5)} />
            </View>
            <Text style={styles.cardSubtitle}>CASUAL LEAVE</Text>
            <Text style={styles.smallCardTitle}>04 Days</Text>
          </View>
        </View>

        {/* Recent Requests Header */}
        <View style={[styles.headerRow, { marginTop: rh(2) }]}>
          <Text style={styles.sectionTitle}>Recent Requests</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LeaveHistory')}>
            <Text style={styles.viewHistoryText}>View History</Text>
          </TouchableOpacity>
        </View>

        {/* Requests List */}
        <View style={styles.requestsList}>
          <RequestItem
            title="Sick Leave"
            date="Nov 02 • 1 Day"
            reason="Reason: Medical Leave"
            status="Pending"
            icon="🏥"
          />
          <RequestItem
            title="Annual Leave"
            date="Oct 12 - Oct 15 • 3 Days"
            reason="Reason: Personal Trip"
            status="Approved"
            icon="📅"
          />
          <RequestItem
            title="Casual Leave"
            date="Sep 20 • 1 Day"
            reason="Reason: Personal Work"
            status="Approved"
            icon="🏖️"
          />
        </View>

      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('ApplyLeave')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
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

export default Leave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingHorizontal: rw(5),
    paddingTop: rh(2),
    paddingBottom: rh(15),
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
  yearText: {
    fontSize: rf(1.4),
    color: colors.textSecondary,
    fontWeight: '600',
  },
  viewHistoryText: {
    fontSize: rf(1.4),
    color: colors.primary,
    fontWeight: '600',
  },
  mainCard: {
    backgroundColor: colors.white,
    borderRadius: rw(4),
    padding: rw(4),
    marginBottom: rh(2),
    borderWidth: 1,
    borderColor: colors.border,
  },
  mainCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: rh(2),
  },
  iconContainerBlue: {
    width: rw(10),
    height: rw(10),
    backgroundColor: '#F0F5FF',
    borderRadius: rw(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSubtitle: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
    fontWeight: '600',
    marginBottom: rh(0.5),
    textTransform: 'uppercase',
  },
  mainCardTitle: {
    fontSize: rf(2.6),
    fontWeight: '700',
    color: colors.primary,
  },
  progressBarContainer: {
    marginTop: rh(1),
  },
  progressBarTrack: {
    height: rh(1),
    backgroundColor: '#E5E7EB',
    borderRadius: rh(0.5),
    marginBottom: rh(1),
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: rh(0.5),
  },
  progressText: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
  },
  otherLeavesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rh(3),
    gap: rw(3),
  },
  smallCard: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: rw(4),
    padding: rw(4),
    borderWidth: 1,
    borderColor: colors.border,
  },
  sickIconText: {
    fontSize: rf(2),
    color: colors.danger,
    marginBottom: rh(1),
  },
  smallCardTitle: {
    fontSize: rf(2),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  requestsList: {
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
  fab: {
    position: 'absolute',
    bottom: rh(3),
    right: rw(5),
    width: rw(14),
    height: rw(14),
    backgroundColor: colors.primary,
    borderRadius: rw(4),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fabText: {
    fontSize: rf(4),
    color: colors.white,
    fontWeight: '300',
    marginTop: -rh(0.5),
  },
});
