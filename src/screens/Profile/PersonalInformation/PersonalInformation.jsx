import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import Button from '../../../components/common/Button';

const InputField = ({ label, value }) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        value={value}
        editable={false}
      />
    </View>
  </View>
);

const PersonalInformation = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Profile Image */}
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

        {/* Personal Information Section */}
        <Text style={styles.sectionHeader}>PERSONAL INFORMATION</Text>
        <View style={styles.card}>
          <InputField label="FULL NAME" value="Marcus Chen" />
          <InputField label="EMAIL ADDRESS" value="alex.curates@flashora.com" />
          <InputField label="PHONE NUMBER" value="+971 50 123 4567" />
          <InputField label="DATE OF BIRTH" value="Oct 14, 1988" />
        </View>

        {/* Work Information Section */}
        <Text style={styles.sectionHeader}>WORK INFORMATION</Text>
        <View style={styles.card}>
          <InputField label="EMPLOYEE ID" value="789456123" />
          <InputField label="DEPARTMENT" value="Operations & Logistics" />
          <InputField label="REPORTING MANAGER" value="SARAH J." />
        </View>

      </ScrollView>

      {/* Footer Save Button */}
      <View style={styles.footer}>
        <Button 
          title="Save" 
          onPress={() => {}} 
          style={styles.saveButton} 
        />
      </View>
    </View>
  );
};

export default PersonalInformation;

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
  profileHeader: {
    alignItems: 'center',
    marginBottom: rh(3),
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: rw(24),
    height: rw(24),
    borderRadius: rw(12),
    backgroundColor: '#E2E8F0',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0F52BA',
    width: rw(7),
    height: rw(7),
    borderRadius: rw(3.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F9FAFB',
  },
  editIcon: {
    fontSize: rf(1.2),
    color: colors.white,
  },
  sectionHeader: {
    fontSize: rf(1.2),
    fontWeight: '700',
    color: colors.textSecondary,
    marginBottom: rh(1.5),
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: rw(4),
    padding: rw(4),
    paddingBottom: rw(2), 
    marginBottom: rh(3),
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputGroup: {
    marginBottom: rh(2),
  },
  label: {
    fontSize: rf(1.1),
    color: '#475569', 
    fontWeight: '700',
    marginBottom: rh(0.5),
    textTransform: 'uppercase',
  },
  inputContainer: {
    backgroundColor: '#F3F4F6', 
    borderRadius: rw(2.5),
    paddingHorizontal: rw(3),
    height: rh(5.5),
    justifyContent: 'center',
  },
  input: {
    fontSize: rf(1.5),
    color: colors.textPrimary,
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
