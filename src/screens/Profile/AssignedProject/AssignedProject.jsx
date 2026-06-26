import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';

const AssignedProject = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Top Banner */}
        <View style={styles.topBanner}>
          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>ACTIVE</Text>
          </View>
          <Text style={styles.bannerTitle}>Al-Naseem Logistics Hub</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>Riyadh, KSA</Text>
          </View>
          <Text style={styles.watermarkIcon}>🏗️</Text>
        </View>

        {/* PROJECT INFORMATION */}
        <Text style={styles.sectionHeader}>PROJECT INFORMATION</Text>
        
        <View style={styles.infoCard}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>🏢</Text>
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Department/Team</Text>
            <Text style={styles.infoValue}>Operations & Logistics</Text>
          </View>
        </View>

        <View style={[styles.infoCard, { backgroundColor: '#F8FAFC', marginBottom: rh(3) }]}>
          <Text style={styles.iconText}>📞</Text>
          <Text style={[styles.infoValue, { marginLeft: rw(3), flex: 1 }]}>Site Office Details</Text>
          <Text style={styles.infoLabel}>+966 11 234 5670</Text>
        </View>

        {/* WORK DETAILS */}
        <Text style={styles.sectionHeader}>WORK DETAILS</Text>
        <View style={styles.workDetailsCard}>
          {/* Row 1 */}
          <View style={styles.workDetailsRow}>
            <View style={styles.iconBoxSmall}>
              <Text style={styles.iconTextSmall}>🕒</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Shift Timing</Text>
              <Text style={styles.infoValue}>09:00 AM - 06:00 PM</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>
          <View style={styles.divider} />

          {/* Row 2 */}
          <View style={styles.workDetailsRow}>
            <View style={styles.iconBoxSmall}>
              <Text style={styles.iconTextSmall}>📅</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Working Days</Text>
              <Text style={styles.infoValue}>Sun - Thu</Text>
            </View>
            <Text style={styles.dotsIcon}>•••••</Text>
          </View>
          <View style={styles.divider} />

          {/* Row 3 */}
          <View style={styles.workDetailsRow}>
            <View style={styles.iconBoxSmall}>
              <Text style={styles.iconTextSmall}>👥</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Reporting Manager</Text>
              <Text style={styles.infoValue}>Sarah J. Williams</Text>
            </View>
            <View style={styles.avatarBox}>
              <Text style={styles.avatarText}>SW</Text>
            </View>
          </View>
        </View>

        {/* ASSIGNMENT DETAILS */}
        <Text style={styles.sectionHeader}>ASSIGNMENT DETAILS</Text>
        <View style={styles.twoColContainer}>
          <View style={styles.colCard}>
            <Text style={styles.infoLabel}>Start Date</Text>
            <Text style={styles.infoValue}>Jan 12, 2024</Text>
          </View>
          <View style={styles.colCard}>
            <Text style={styles.infoLabel}>Employee Type</Text>
            <Text style={styles.infoValue}>Full-time</Text>
          </View>
        </View>

        <View style={styles.roleBanner}>
          <View>
            <Text style={styles.roleLabel}>Employee Role</Text>
            <Text style={styles.roleValue}>Senior Project Manager</Text>
          </View>
          <Text style={styles.roleIcon}>💼</Text>
        </View>

        {/* Map / Protocols Card */}
        <View style={styles.mapCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop' }} 
            style={styles.mapImage} 
          />
          <TouchableOpacity style={styles.protocolsRow}>
            <Text style={styles.protocolsText}>View site entry protocols</Text>
            <Text style={styles.externalLinkIcon}>🔗</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default AssignedProject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    paddingHorizontal: rw(5),
    paddingTop: rh(2),
    paddingBottom: rh(10),
  },
  topBanner: {
    backgroundColor: '#0F52BA', 
    borderRadius: rw(4),
    padding: rw(5),
    marginBottom: rh(3),
    position: 'relative',
    overflow: 'hidden',
  },
  activeBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: rw(3),
    paddingVertical: rh(0.5),
    borderRadius: rw(4),
    alignSelf: 'flex-start',
    marginBottom: rh(1.5),
  },
  activeBadgeText: {
    color: colors.white,
    fontSize: rf(1),
    fontWeight: '700',
    letterSpacing: 1,
  },
  bannerTitle: {
    color: colors.white,
    fontSize: rf(2.2),
    fontWeight: '800',
    marginBottom: rh(0.5),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: rf(1.4),
    color: '#CBD5E1',
    marginRight: rw(1),
  },
  locationText: {
    color: '#E2E8F0',
    fontSize: rf(1.3),
  },
  watermarkIcon: {
    position: 'absolute',
    right: -rw(2),
    top: rh(1),
    fontSize: rf(10),
    opacity: 0.1,
  },
  sectionHeader: {
    fontSize: rf(1.1),
    fontWeight: '700',
    color: '#94A3B8',
    marginBottom: rh(1.5),
    letterSpacing: 0.5,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(3),
    marginBottom: rh(1.5),
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconBox: {
    width: rw(12),
    height: rw(12),
    borderRadius: rw(2),
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(3),
  },
  iconText: {
    fontSize: rf(2),
  },
  infoTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  infoLabel: {
    fontSize: rf(1.1),
    color: '#64748B',
    marginBottom: rh(0.2),
  },
  infoValue: {
    fontSize: rf(1.5),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  workDetailsCard: {
    backgroundColor: colors.white,
    borderRadius: rw(4),
    paddingHorizontal: rw(4),
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: rh(3),
  },
  workDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rh(2),
  },
  iconBoxSmall: {
    width: rw(10),
    height: rw(10),
    borderRadius: rw(2),
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(3),
  },
  iconTextSmall: {
    fontSize: rf(1.5),
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  chevron: {
    fontSize: rf(2.5),
    color: '#CBD5E1',
  },
  dotsIcon: {
    fontSize: rf(2),
    color: '#0F52BA',
    letterSpacing: 2,
  },
  avatarBox: {
    width: rw(8),
    height: rw(8),
    borderRadius: rw(4),
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#1E40AF',
    fontSize: rf(1.2),
    fontWeight: '700',
  },
  twoColContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rh(1.5),
  },
  colCard: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: rw(3),
    padding: rw(4),
    borderWidth: 1,
    borderColor: colors.border,
  },
  roleBanner: {
    backgroundColor: '#0F52BA',
    borderRadius: rw(3),
    padding: rw(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(3),
  },
  roleLabel: {
    color: '#93C5FD', 
    fontSize: rf(1.1),
    marginBottom: rh(0.2),
  },
  roleValue: {
    color: colors.white,
    fontSize: rf(1.6),
    fontWeight: '700',
  },
  roleIcon: {
    fontSize: rf(2.5),
  },
  mapCard: {
    backgroundColor: colors.white,
    borderRadius: rw(4),
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: rh(15),
  },
  protocolsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: rw(4),
  },
  protocolsText: {
    fontSize: rf(1.3),
    fontWeight: '600',
    color: colors.textPrimary,
  },
  externalLinkIcon: {
    fontSize: rf(1.8),
    color: '#0F52BA',
  },
});
