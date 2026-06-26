import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import Button from '../../../components/common/Button';

const InputField = ({ label, placeholder, dropdown }) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        editable={!dropdown} 
      />
      {dropdown && <Text style={styles.inputIcon}>⌄</Text>}
    </View>
  </View>
);

const UploadDocument = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Document Type */}
        <InputField label="DOCUMENT TYPE" placeholder="Select document type" dropdown />

        {/* Dates Row */}
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: rw(2) }}>
            <InputField label="ISSUE DATE" placeholder="mm/dd/yyyy" />
          </View>
          <View style={{ flex: 1, marginLeft: rw(2) }}>
            <InputField label="EXPIRY DATE" placeholder="mm/dd/yyyy" />
          </View>
        </View>

        {/* File Attachment */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>FILE ATTACHMENT</Text>
          
          {/* Drag & Drop Area */}
          <TouchableOpacity style={styles.uploadArea}>
            <Text style={styles.uploadCloudIcon}>☁️</Text>
            <Text style={styles.uploadTitle}>Tap to upload files and photo</Text>
            <Text style={styles.uploadSubtitle}>Supports JPG, PNG, PDF (Max 5MB)</Text>
          </TouchableOpacity>
        </View>

        {/* Preview Card */}
        <View style={styles.previewCard}>
          <View style={styles.previewIconBox}>
            <Text style={styles.previewDocIcon}>📄</Text>
          </View>
          <View style={styles.previewTextContainer}>
            <Text style={styles.previewTitle}>Preview available after upload</Text>
            <Text style={styles.previewSubtitle}>No file selected</Text>
          </View>
          <Text style={styles.fileIcon}>📎</Text>
        </View>

      </ScrollView>

      {/* Footer Upload Button */}
      <View style={styles.footer}>
        <Button 
          title="📄 Upload Document" 
          onPress={() => {}} 
          style={styles.saveButton} 
        />
      </View>
    </View>
  );
};

export default UploadDocument;

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
    fontSize: rf(1.1),
    color: '#64748B', 
    fontWeight: '700',
    marginBottom: rh(0.8),
    textTransform: 'uppercase',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white, 
    borderRadius: rw(2),
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: rw(3),
    height: rh(6),
  },
  input: {
    flex: 1,
    fontSize: rf(1.4),
    color: colors.textPrimary,
  },
  inputIcon: {
    fontSize: rf(1.8),
    color: colors.textSecondary,
    marginLeft: rw(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadArea: {
    borderWidth: 1,
    borderColor: colors.border, 
    borderRadius: rw(3),
    backgroundColor: colors.white,
    paddingVertical: rh(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadCloudIcon: {
    fontSize: rf(3.5),
    marginBottom: rh(1.5),
    color: '#64748B',
  },
  uploadTitle: {
    fontSize: rf(1.3),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.5),
  },
  uploadSubtitle: {
    fontSize: rf(1.1),
    color: colors.textSecondary,
  },
  previewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E2E8F0', 
    borderRadius: rw(3),
    padding: rw(3),
    marginTop: rh(1),
  },
  previewIconBox: {
    width: rw(12),
    height: rw(12),
    backgroundColor: '#CBD5E1', 
    borderRadius: rw(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(3),
  },
  previewDocIcon: {
    fontSize: rf(2.5),
  },
  previewTextContainer: {
    flex: 1,
  },
  previewTitle: {
    fontSize: rf(1.3),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.2),
  },
  previewSubtitle: {
    fontSize: rf(1.1),
    color: '#64748B',
  },
  fileIcon: {
    fontSize: rf(2),
    color: '#64748B',
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
  saveButton: {
    width: '100%',
    borderRadius: rw(2),
  },
});
