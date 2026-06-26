import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';
import Button from '../../../components/common/Button';
import LeaveIcon from '../../../assets/icons/leave.svg'; // Calendar icon

const Payroll = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

      {/* Main Salary Card */}
      <View style={styles.mainCard}>
        <Text style={styles.cardSubtitle}>NET SALARY - OCTOBER 2023</Text>
        <View style={styles.amountRow}>
          <Text style={styles.mainAmount}>$5,842.00</Text>
          <View style={styles.badgeSuccess}>
            <Text style={styles.badgeSuccessText}>+2.4%</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Gross Pay</Text>
            <Text style={styles.detailValue}>$7,200.00</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Deductions</Text>
            <Text style={styles.detailValue}>$1,358.00</Text>
          </View>
        </View>

        <Button title="View Details" onPress={() => navigation.navigate('Payslip')} style={styles.viewDetailsButton} />
      </View>

      {/* Recent Payslips */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Recent Payslips</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PayrollHistory')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.payslipsList}>
        <PayslipItem 
          month="October 2023"
          processed="Processed on Oct 28"
          amount="$5,842.00"
          onPress={() => navigation.navigate('Payslip')}
        />
        <PayslipItem 
          month="September 2023"
          processed="Processed on Sep 29"
          amount="$5,842.00"
          onPress={() => navigation.navigate('Payslip')}
        />
        <PayslipItem 
          month="August 2023"
          processed="Processed on Aug 30"
          amount="$5,842.00"
          onPress={() => navigation.navigate('Payslip')}
        />
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

export default Payroll;

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
  mainCard: {
    backgroundColor: colors.white,
    borderRadius: rw(4),
    padding: rw(5),
    marginBottom: rh(3),
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardSubtitle: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
    fontWeight: '700',
    marginBottom: rh(1),
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  mainAmount: {
    fontSize: rf(3.5),
    fontWeight: '800',
    color: colors.primary,
    marginRight: rw(3),
  },
  badgeSuccess: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: rw(2),
    paddingVertical: rh(0.4),
    borderRadius: rw(4),
  },
  badgeSuccessText: {
    color: '#166534',
    fontSize: rf(1.2),
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: rh(2),
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: rh(2.5),
  },
  detailItem: {
    marginRight: rw(10),
  },
  detailLabel: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
    marginBottom: rh(0.5),
  },
  detailValue: {
    fontSize: rf(1.6),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  viewDetailsButton: {
    width: '100%',
    borderRadius: rw(2),
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
  viewAllText: {
    fontSize: rf(1.3),
    fontWeight: '700',
    color: colors.primary,
  },
  payslipsList: {
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
