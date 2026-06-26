import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';
import Button from '../../../components/common/Button';
import LeaveIcon from '../../../assets/icons/leave.svg';
import ActiveLeaveIcon from '../../../assets/icons/activeLeave.svg';

const Payslip = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Top Blue Card */}
        <View style={styles.topCard}>
          <View style={styles.topCardContent}>
            <View>
              <Text style={styles.topCardSubtitle}>MONTH OF OCTOBER 2023</Text>
              <Text style={styles.topCardTitle}>$4,850.00</Text>
              <Text style={styles.topCardFooterText}>Total Net Pay</Text>
            </View>
            <View style={styles.receiptIconContainer}>
              <Text style={styles.receiptIcon}>🧾</Text>
            </View>
          </View>
        </View>

        {/* Earnings Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Earnings</Text>
          <View style={styles.badgeGrey}>
            <Text style={styles.badgeGreyText}>+ $5,400.00</Text>
          </View>
        </View>
        
        <View style={styles.breakdownCard}>
          <BreakdownItem 
            title="Basic Salary" 
            subtitle="Fixed monthly amount" 
            amount="$3,500.00" 
          />
          <View style={styles.divider} />
          <BreakdownItem 
            title="HRA" 
            subtitle="House Rent Allowance" 
            amount="$1,200.00" 
          />
          <View style={styles.divider} />
          <BreakdownItem 
            title="Special Allowance" 
            subtitle="Performance & Utilities" 
            amount="$700.00" 
          />
        </View>

        {/* Deductions Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Deductions</Text>
          <View style={styles.badgeRed}>
            <Text style={styles.badgeRedText}>- $550.00</Text>
          </View>
        </View>
        
        <View style={styles.breakdownCard}>
          <BreakdownItem 
            title="Income Tax (TDS)" 
            subtitle="Statutory deduction" 
            amount="($350.00)" 
            isDeduction
          />
          <View style={styles.divider} />
          <BreakdownItem 
            title="Provident Fund" 
            subtitle="Social security savings" 
            amount="($200.00)" 
            isDeduction
          />
        </View>

        {/* Stats Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Stats</Text>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.statsScrollContainer}>
          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <LeaveIcon width={rw(3.5)} height={rw(3.5)} />
              <Text style={styles.statTitle}>WORKED HOURS</Text>
            </View>
            <Text style={styles.statValueMain}>
              210 h <Text style={styles.statValueSub}>/210h</Text>
            </Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <ActiveLeaveIcon width={rw(3.5)} height={rw(3.5)} />
              <Text style={styles.statTitle}>OVERTIME</Text>
            </View>
            <Text style={styles.statValueMain}>
              4h <Text style={styles.statValueSub}>Pending</Text>
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <Text style={{ fontSize: rf(1.2) }}>🏥</Text>
              <Text style={styles.statTitle}>LEAVES</Text>
            </View>
            <Text style={styles.statValueMain}>03</Text>
          </View>
        </ScrollView>

      </ScrollView>

      {/* Download Button */}
      <View style={styles.footer}>
        <Button 
          title="📥 Download PDF" 
          onPress={() => {}} 
          style={styles.downloadButton} 
        />
      </View>
    </View>
  );
};

const BreakdownItem = ({ title, subtitle, amount, isDeduction }) => (
  <View style={styles.breakdownItem}>
    <View style={styles.breakdownLeft}>
      <Text style={styles.breakdownTitle}>{title}</Text>
      <Text style={styles.breakdownSubtitle}>{subtitle}</Text>
    </View>
    <Text style={[styles.breakdownAmount, isDeduction && styles.deductionAmount]}>
      {amount}
    </Text>
  </View>
);

export default Payslip;

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
  topCard: {
    backgroundColor: '#0F52BA',
    borderRadius: rw(4),
    padding: rw(5),
    marginBottom: rh(3),
  },
  topCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topCardSubtitle: {
    color: '#E2E8F0',
    fontSize: rf(1.1),
    fontWeight: '600',
    marginBottom: rh(0.5),
    letterSpacing: 0.5,
  },
  topCardTitle: {
    color: colors.white,
    fontSize: rf(3.5),
    fontWeight: '800',
    marginBottom: rh(0.5),
  },
  topCardFooterText: {
    color: '#E2E8F0',
    fontSize: rf(1.3),
  },
  receiptIconContainer: {
    width: rw(10),
    height: rw(10),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: rw(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  receiptIcon: {
    fontSize: rf(2),
    color: colors.white,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(1.5),
    marginTop: rh(1),
  },
  sectionTitle: {
    fontSize: rf(1.8),
    fontWeight: '700',
    color: '#1E3A8A', 
  },
  badgeGrey: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: rw(2.5),
    paddingVertical: rh(0.5),
    borderRadius: rw(4),
  },
  badgeGreyText: {
    color: colors.textSecondary,
    fontSize: rf(1.2),
    fontWeight: '600',
  },
  badgeRed: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: rw(2.5),
    paddingVertical: rh(0.5),
    borderRadius: rw(4),
  },
  badgeRedText: {
    color: colors.danger,
    fontSize: rf(1.2),
    fontWeight: '600',
  },
  breakdownCard: {
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(4),
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: rh(2),
  },
  breakdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rh(0.5),
  },
  breakdownLeft: {
    flex: 1,
  },
  breakdownTitle: {
    fontSize: rf(1.4),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.2),
  },
  breakdownSubtitle: {
    fontSize: rf(1.1),
    color: colors.textSecondary,
  },
  breakdownAmount: {
    fontSize: rf(1.6),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  deductionAmount: {
    color: colors.danger,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: rh(1.5),
  },
  statsScrollContainer: {
    gap: rw(3),
    paddingBottom: rh(1),
  },
  statCard: {
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(3.5),
    borderWidth: 1,
    borderColor: colors.border,
    minWidth: rw(35),
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rh(1),
  },
  statTitle: {
    fontSize: rf(1.1),
    fontWeight: '700',
    color: colors.textSecondary,
    marginLeft: rw(1.5),
  },
  statValueMain: {
    fontSize: rf(1.8),
    fontWeight: '800',
    color: colors.textPrimary,
  },
  statValueSub: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
    fontWeight: '500',
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
  downloadButton: {
    width: '100%',
    borderRadius: rw(2),
  },
});
