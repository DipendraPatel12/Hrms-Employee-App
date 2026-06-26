import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import Button from '../../../components/common/Button';
import LeaveIcon from '../../../assets/icons/leave.svg'; // Reuse calendar icon for date picker

const RequestOvertime = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Work Date */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>WORK DATE</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder="mm/dd/yyyy"
              placeholderTextColor={colors.textSecondary}
              editable={false}
            />
            <LeaveIcon width={rw(5)} height={rw(5)} />
          </View>
        </View>

        {/* Start / End Time */}
        <View style={styles.rowInputs}>
          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.label}>START TIME</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input}
                placeholder="--:-- --"
                placeholderTextColor={colors.textSecondary}
                editable={false}
              />
              <Text style={styles.iconPlaceholder}>🕒</Text>
            </View>
          </View>

          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.label}>END TIME</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input}
                placeholder="--:-- --"
                placeholderTextColor={colors.textSecondary}
                editable={false}
              />
              <Text style={styles.iconPlaceholder}>🕒</Text>
            </View>
          </View>
        </View>

        {/* Project Selection */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>PROJECT SELECTION</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder="Select active project"
              placeholderTextColor={colors.textSecondary}
              editable={false}
            />
            <Text style={styles.iconPlaceholder}>⌄</Text>
          </View>
        </View>

        {/* Reason for Overtime */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>REASON FOR OVERTIME</Text>
          <View style={[styles.inputContainer, styles.textAreaContainer]}>
            <TextInput 
              style={styles.textArea}
              placeholder="Detail the necessity of overtime work..."
              placeholderTextColor={colors.textSecondary}
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>ⓘ</Text>
          <Text style={styles.infoText}>
            Overtime requests require approval from your immediate supervisor before being processed by payroll.
          </Text>
        </View>

      </ScrollView>

      {/* Footer Submit Button */}
      <View style={styles.footer}>
        <Button 
          title="Submit Request ➢" 
          onPress={() => {}} 
          style={styles.submitButton} 
        />
      </View>
    </View>
  );
};

export default RequestOvertime;

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
  inputGroup: {
    marginBottom: rh(2.5),
  },
  label: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
    fontWeight: '700',
    marginBottom: rh(1),
    letterSpacing: 0.5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: rw(2.5),
    paddingHorizontal: rw(3),
    height: rh(6),
  },
  input: {
    flex: 1,
    fontSize: rf(1.6),
    color: colors.textPrimary,
  },
  iconPlaceholder: {
    fontSize: rf(1.8),
    color: colors.textSecondary,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: rw(4),
  },
  halfWidth: {
    flex: 1,
  },
  textAreaContainer: {
    height: rh(15),
    alignItems: 'flex-start',
    paddingVertical: rh(1.5),
  },
  textArea: {
    flex: 1,
    fontSize: rf(1.6),
    color: colors.textPrimary,
    width: '100%',
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9', // light slate/blue-gray
    borderRadius: rw(2.5),
    padding: rw(4),
    marginTop: rh(1),
  },
  infoIcon: {
    fontSize: rf(1.8),
    color: '#3B82F6', // Blue icon
    marginRight: rw(2),
  },
  infoText: {
    flex: 1,
    fontSize: rf(1.4),
    color: colors.textSecondary,
    lineHeight: rf(2),
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
  submitButton: {
    width: '100%',
    borderRadius: rw(2),
  },
});
