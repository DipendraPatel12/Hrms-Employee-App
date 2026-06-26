import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import Button from '../../../components/common/Button';
import typography from '../../../theme/typography';
import { dependentSchema } from '../../../validations/profile/dependent.schema';

const InputField = ({ label, placeholder, dropdown, icon, value, onChangeText, error }) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <View style={[styles.inputContainer, error && { borderColor: colors.danger }]}>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        editable={!dropdown} 
        value={value}
        onChangeText={onChangeText}
      />
      {icon && <Text style={styles.inputIcon}>{icon}</Text>}
      {dropdown && !icon && <Text style={styles.inputIcon}>⌄</Text>}
    </View>
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

const AddDependent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(dependentSchema),
    defaultValues: {
      fullName: '',
      relationship: '',
      dob: '',
      nationality: '',
      gender: '',
      contactNo: '',
    },
  });

  const onSubmit = data => {
    console.log('Dependent Data:', data);
    // Proceed to save
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Text */}
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Add Dependent</Text>
          <Text style={styles.subtitle}>
            Fill in the information below to register a new dependent for insurance and tax benefits.
          </Text>
        </View>

        {/* Profile Image Uploader */}
        <View style={styles.profileHeader}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' }} 
              style={styles.profileImage}
            />
            <View style={styles.editBadge}>
              <Text style={styles.editIcon}>✏️</Text>
            </View>
          </View>
        </View>

        {/* Form Fields */}
        <Controller
          control={control}
          name="fullName"
          render={({ field: { onChange, value } }) => (
            <InputField 
              label="FULL NAME" 
              placeholder="Sammy Jackson" 
              value={value} 
              onChangeText={onChange} 
              error={errors.fullName?.message} 
            />
          )}
        />
        
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: rw(2) }}>
            <Controller
              control={control}
              name="relationship"
              render={({ field: { onChange, value } }) => (
                <InputField 
                  label="RELATIONSHIP" 
                  placeholder="Select" 
                  dropdown 
                  value={value} 
                  onChangeText={onChange} 
                  error={errors.relationship?.message} 
                />
              )}
            />
          </View>
          <View style={{ flex: 1, marginLeft: rw(2) }}>
            <Controller
              control={control}
              name="dob"
              render={({ field: { onChange, value } }) => (
                <InputField 
                  label="DATE OF BIRTH" 
                  placeholder="-- / -- / --" 
                  icon="🕒" 
                  value={value} 
                  onChangeText={onChange} 
                  error={errors.dob?.message} 
                />
              )}
            />
          </View>
        </View>

        <Controller
          control={control}
          name="nationality"
          render={({ field: { onChange, value } }) => (
            <InputField 
              label="NATIONALITY" 
              placeholder="Enter Country" 
              value={value} 
              onChangeText={onChange} 
              error={errors.nationality?.message} 
            />
          )}
        />
        
        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value } }) => (
            <InputField 
              label="GENDER" 
              placeholder="Select" 
              dropdown 
              value={value} 
              onChangeText={onChange} 
              error={errors.gender?.message} 
            />
          )}
        />

        <Controller
          control={control}
          name="contactNo"
          render={({ field: { onChange, value } }) => (
            <InputField 
              label="CONTACT NO." 
              placeholder="Enter" 
              value={value} 
              onChangeText={onChange} 
              error={errors.contactNo?.message} 
            />
          )}
        />

        {/* Upload Attachment */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>UPLOAD ATTACHMENT</Text>
          <View style={[styles.inputContainer, { marginBottom: rh(1.5) }]}>
            <Text style={[styles.input, { color: colors.textSecondary }]}>Document Type</Text>
            <Text style={styles.inputIcon}>⌄</Text>
          </View>
          
          {/* Drag & Drop Area */}
          <TouchableOpacity style={styles.uploadArea}>
            <Text style={styles.uploadCloudIcon}>☁️</Text>
            <Text style={styles.uploadTitle}>Tap to upload files and photo</Text>
            <Text style={styles.uploadSubtitle}>Supports JPG, PNG, PDF (Max 5MB)</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Footer Save Button */}
      <View style={styles.footer}>
        <Button 
          title="👤+ Save Dependent" 
          onPress={handleSubmit(onSubmit)} 
          style={styles.saveButton} 
        />
      </View>
    </View>
  );
};

export default AddDependent;

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
  headerTextContainer: {
    marginBottom: rh(3),
  },
  title: {
    fontSize: rf(2),
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: rh(0.5),
  },
  subtitle: {
    fontSize: rf(1.3),
    color: colors.textSecondary,
    lineHeight: rf(1.8),
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: rh(4),
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: rw(20),
    height: rw(20),
    borderRadius: rw(10),
    backgroundColor: '#E2E8F0',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0F52BA',
    width: rw(6),
    height: rw(6),
    borderRadius: rw(3),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F9FAFB',
  },
  editIcon: {
    fontSize: rf(1),
    color: colors.white,
  },
  inputGroup: {
    marginBottom: rh(2),
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
  errorText: {
    color: colors.danger,
    fontSize: typography.caption,
    marginTop: rh(0.5),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadArea: {
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    borderRadius: rw(3),
    backgroundColor: colors.white,
    paddingVertical: rh(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadCloudIcon: {
    fontSize: rf(3),
    marginBottom: rh(1),
    color: colors.textSecondary,
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
