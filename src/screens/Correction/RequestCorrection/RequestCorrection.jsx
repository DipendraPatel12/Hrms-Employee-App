import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import Button from '../../../components/common/Button';
import LeaveIcon from '../../../assets/icons/leave.svg';

const RequestCorrection = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Correction Date */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>CORRECTION DATE</Text>
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

        {/* Reason of Correction */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>REASON OF CORRECTION</Text>
          <View style={[styles.inputContainer, styles.textAreaContainer]}>
            <TextInput 
              style={styles.textArea}
              placeholder="Detail the necessity of correction"
              placeholderTextColor={colors.textSecondary}
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>

        {/* Upload Attachment */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>UPLOAD ATTACHMENT (OPTIONAL)</Text>
          <TouchableOpacity style={styles.uploadArea}>
            <Text style={styles.uploadIcon}>☁️</Text>
            <Text style={styles.uploadTitle}>Tap to upload files and photo</Text>
            <Text style={styles.uploadSubtitle}>Supports JPG, PNG, PDF (Max 5MB)</Text>
          </TouchableOpacity>
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

export default RequestCorrection;

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
  uploadArea: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: rw(2.5),
    paddingVertical: rh(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid', 
  },
  uploadIcon: {
    fontSize: rf(3.5),
    marginBottom: rh(1),
  },
  uploadTitle: {
    fontSize: rf(1.4),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: rh(0.5),
  },
  uploadSubtitle: {
    fontSize: rf(1.1),
    color: colors.textSecondary,
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
