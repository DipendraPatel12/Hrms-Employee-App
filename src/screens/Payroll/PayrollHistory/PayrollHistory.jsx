import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';
import LeaveIcon from '../../../assets/icons/leave.svg';

const historyData = [
  { id: '1', month: 'October 2023', processed: 'Processed on Oct 28', amount: '$5,842.00' },
  { id: '2', month: 'September 2023', processed: 'Processed on Sep 29', amount: '$5,842.00' },
  { id: '3', month: 'August 2023', processed: 'Processed on Aug 30', amount: '$5,842.00' },
  { id: '4', month: 'July 2023', processed: 'Processed on Jul 29', amount: '$5,842.00' },
  { id: '5', month: 'June 2023', processed: 'Processed on Jun 28', amount: '$5,842.00' },
  { id: '6', month: 'May 2023', processed: 'Processed on May 29', amount: '$5,842.00' },
];

const PayrollHistory = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>All Payslips</Text>
      </View>

      <View style={styles.listContainer}>
        {historyData.map((item) => (
          <PayslipItem
            key={item.id}
            month={item.month}
            processed={item.processed}
            amount={item.amount}
            onPress={() => navigation.navigate('Payslip')}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const PayslipItem = ({ month, processed, amount, onPress }) => (
  <TouchableOpacity style={styles.payslipCard} onPress={onPress}>
    <View style={styles.iconContainer}>
      <LeaveIcon width={rw(5)} height={rw(5)} />
    </View>
    <View style={styles.payslipContent}>
      <Text style={styles.payslipMonth}>{month}</Text>
      <Text style={styles.payslipProcessed}>{processed}</Text>
    </View>
    <Text style={styles.payslipAmount}>{amount}</Text>
  </TouchableOpacity>
);

export default PayrollHistory;

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
  payslipCard: {
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(4),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconContainer: {
    width: rw(12),
    height: rw(12),
    backgroundColor: '#F3F4F6',
    borderRadius: rw(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(4),
  },
  payslipContent: {
    flex: 1,
  },
  payslipMonth: {
    fontSize: rf(1.6),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.3),
  },
  payslipProcessed: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
  },
  payslipAmount: {
    fontSize: rf(1.6),
    fontWeight: '800',
    color: colors.primary,
  },
});
