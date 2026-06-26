import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';
import Button from '../../../components/common/Button';
import AttendanceIcon from '../../../assets/icons/attendance.svg';

const Attendance = () => {
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
            <Text style={styles.timeCardValue}>09:00 AM</Text>
          </View>
          <View style={styles.timeCard}>
            <Text style={styles.timeCardLabel}>WORKING HOURS</Text>
            <Text style={styles.timeCardValue}>--:--</Text>
          </View>
        </View>

        <Button title="Check-Out Now" onPress={() => { }} style={styles.checkOutButton} />
      </View>

      {/* Daily Record */}
      <View style={styles.dailyRecordHeader}>
        <Text style={styles.sectionTitle}>Daily Record</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AttendanceHistory')}>
          <Text style={styles.historyText}>Attendance History</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recordList}>
        <RecordItem 
          time="09:05 AM - 01:12 PM"
          status="Completed"
          hours="4.07h"
        />
        <RecordItem 
          time="01:58 PM - 05:45 PM"
          status="Completed"
          hours="3.47h"
        />
        <RecordItem 
          time="06:15 PM - 07:30 PM"
          status="Late Entry"
          hours="1.15h"
        />
      </View>
    </ScrollView>
  );
};

const RecordItem = ({ time, status, hours }) => (
  <View style={styles.recordCard}>
    <View style={styles.recordIconContainer}>
      <AttendanceIcon width={rw(6)} height={rw(6)} />
    </View>
    <View style={styles.recordContent}>
      <Text style={styles.recordTime}>{time}</Text>
      <Text style={styles.recordStatus}>{status}</Text>
    </View>
    <Text style={styles.recordHours}>{hours}</Text>
  </View>
);

export default Attendance;

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
  card: {
    backgroundColor: colors.card,
    borderRadius: rw(4),
    padding: rw(4),
    marginBottom: rh(3),
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
  checkOutButton: {
    width: '100%',
  },
  dailyRecordHeader: {
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
  historyText: {
    fontSize: typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
  recordList: {
    gap: rh(1.5),
  },
  recordCard: {
    backgroundColor: colors.card,
    borderRadius: rw(3),
    padding: rw(4),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: rh(1.5),
  },
  recordIconContainer: {
    width: rw(12),
    height: rw(12),
    backgroundColor: '#F3F4F6',
    borderRadius: rw(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(4),
  },
  recordContent: {
    flex: 1,
  },
  recordTime: {
    fontSize: rf(1.6),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: rh(0.5),
  },
  recordStatus: {
    fontSize: rf(1.4),
    color: colors.textSecondary,
  },
  recordHours: {
    fontSize: rf(1.8),
    fontWeight: '700',
    color: colors.primary,
  },
});
