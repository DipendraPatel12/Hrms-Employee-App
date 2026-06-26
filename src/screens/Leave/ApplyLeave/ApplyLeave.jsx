import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import typography from '../../../theme/typography';
import Button from '../../../components/common/Button';

const ApplyLeave = () => {
  const [leaveType, setLeaveType] = useState('Annual Leave');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Top Summary Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.summaryScroll} style={styles.summaryContainer}>
          <SummaryCard title="ANNUAL LEAVE" days="12" icon="📅" />
          <SummaryCard title="SICK LEAVE" days="08" icon="🏥" />
          <SummaryCard title="CASUAL LEAVE" days="04" icon="🏖️" />
        </ScrollView>

        {/* Form Container */}
        <View style={styles.formContainer}>
          
          {/* Leave Type */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Leave Type</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>{leaveType}</Text>
              <Text style={styles.chevron}>v</Text>
            </TouchableOpacity>
          </View>

          {/* Dates Row */}
          <View style={styles.datesRow}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: rw(2) }]}>
              <Text style={styles.label}>Start Date</Text>
              <View style={styles.dateInputWrapper}>
                <TextInput 
                  style={styles.input} 
                  placeholder="mm/dd/yyyy"
                  placeholderTextColor="#9CA3AF"
                  value={startDate}
                  onChangeText={setStartDate}
                />
              </View>
            </View>
            <View style={[styles.inputGroup, { flex: 1, marginLeft: rw(2) }]}>
              <Text style={styles.label}>End Date</Text>
              <View style={styles.dateInputWrapper}>
                <TextInput 
                  style={styles.input} 
                  placeholder="mm/dd/yyyy"
                  placeholderTextColor="#9CA3AF"
                  value={endDate}
                  onChangeText={setEndDate}
                />
              </View>
            </View>
          </View>

          {/* Reason */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Reason for Leave</Text>
            <TextInput 
              style={[styles.input, styles.textArea]} 
              placeholder="Please describe your reason..."
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              value={reason}
              onChangeText={setReason}
            />
          </View>

          {/* File Upload Box */}
          <TouchableOpacity style={styles.uploadBox}>
            <View style={styles.uploadIconContainer}>
              <Text style={styles.uploadIconText}>📄</Text>
            </View>
            <View style={styles.uploadContent}>
              <Text style={styles.uploadTitle}>Attach Document (Optional)</Text>
              <Text style={styles.uploadSubtitle}>PDF, JPG up to 5MB</Text>
            </View>
            <Text style={styles.browseText}>Browse</Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <Button 
            title="Submit" 
            onPress={() => console.log('Submit pressed')} 
            style={styles.submitButton}
          />

        </View>

      </ScrollView>
    </View>
  );
};

const SummaryCard = ({ title, days, icon }) => (
  <View style={styles.summaryCard}>
    <View style={styles.summaryCardHeader}>
      <Text style={styles.summaryIcon}>{icon}</Text>
      <Text style={styles.summaryTitle}>{title}</Text>
    </View>
    <View style={styles.summaryBody}>
      <Text style={styles.summaryDays}>{days}</Text>
      <Text style={styles.summarySuffix}>days left</Text>
    </View>
  </View>
);

export default ApplyLeave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', 
  },
  contentContainer: {
    paddingTop: rh(2),
    paddingBottom: rh(5),
  },
  summaryContainer: {
    marginBottom: rh(3),
  },
  summaryScroll: {
    paddingHorizontal: rw(5),
    gap: rw(3),
  },
  summaryCard: {
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(4),
    minWidth: rw(35),
    borderWidth: 1,
    borderColor: colors.border,
  },
  summaryCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rh(1),
  },
  summaryIcon: {
    fontSize: rf(1.4),
    marginRight: rw(1.5),
  },
  summaryTitle: {
    fontSize: rf(1.1),
    color: colors.textSecondary,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  summaryBody: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  summaryDays: {
    fontSize: rf(2.6),
    fontWeight: '700',
    color: colors.textPrimary,
    marginRight: rw(1),
  },
  summarySuffix: {
    fontSize: rf(1.3),
    color: colors.textSecondary,
  },
  formContainer: {
    backgroundColor: colors.white,
    borderRadius: rw(4),
    marginHorizontal: rw(5),
    padding: rw(4),
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputGroup: {
    marginBottom: rh(2.5),
  },
  label: {
    fontSize: rf(1.4),
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: rh(1),
  },
  dropdown: {
    backgroundColor: '#F3F4F6',
    borderRadius: rw(2),
    paddingHorizontal: rw(4),
    paddingVertical: rh(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: typography.body,
    color: colors.textPrimary,
  },
  chevron: {
    color: colors.textSecondary,
    fontSize: rf(2),
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInputWrapper: {
    backgroundColor: '#F3F4F6',
    borderRadius: rw(2),
  },
  input: {
    paddingHorizontal: rw(4),
    paddingVertical: rh(1.5),
    fontSize: typography.body,
    color: colors.textPrimary,
  },
  textArea: {
    backgroundColor: '#F3F4F6',
    borderRadius: rw(2),
    height: rh(12),
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    borderRadius: rw(3),
    padding: rw(4),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rh(3),
  },
  uploadIconContainer: {
    width: rw(8),
    height: rw(8),
    backgroundColor: '#F3F4F6',
    borderRadius: rw(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(3),
  },
  uploadIconText: {
    fontSize: rf(1.8),
  },
  uploadContent: {
    flex: 1,
  },
  uploadTitle: {
    fontSize: rf(1.4),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: rh(0.2),
  },
  uploadSubtitle: {
    fontSize: rf(1.1),
    color: colors.textSecondary,
  },
  browseText: {
    fontSize: rf(1.4),
    fontWeight: '600',
    color: colors.primary,
  },
  submitButton: {
    width: '100%',
    borderRadius: rw(2),
  },
});
