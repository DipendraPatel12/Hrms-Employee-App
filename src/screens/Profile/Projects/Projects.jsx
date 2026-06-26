import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';

const pastProjects = [
  { id: '1', title: 'King Salman Park Expansion', status: 'Completed', period: '2022 - 2023', image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=200&auto=format&fit=crop' },
  { id: '2', title: 'Red Sea Global Phase 1', status: 'Completed', period: '2021 - 2022', image: 'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?q=80&w=200&auto=format&fit=crop' },
];

const FilterButton = ({ title, active, onPress }) => (
  <TouchableOpacity 
    style={[styles.filterButton, active && styles.filterButtonActive]} 
    onPress={onPress}
  >
    <Text style={[styles.filterButtonText, active && styles.filterButtonTextActive]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const PastProjectCard = ({ title, status, period, image, onPress }) => (
  <TouchableOpacity style={styles.pastProjectCard} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.pastProjectImage} />
    <View style={styles.pastProjectInfo}>
      <Text style={styles.pastProjectTitle} numberOfLines={1}>{title}</Text>
      <View style={styles.pastProjectMeta}>
        <Text style={styles.pastProjectStatus}>{status}</Text>
        <Text style={styles.pastProjectPeriod}> • {period}</Text>
      </View>
    </View>
    <Text style={styles.chevron}>›</Text>
  </TouchableOpacity>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search projects..."
          placeholderTextColor={colors.textSecondary}
        />
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        <FilterButton title="All" active={activeFilter === 'All'} onPress={() => setActiveFilter('All')} />
        <FilterButton title="Active" active={activeFilter === 'Active'} onPress={() => setActiveFilter('Active')} />
        <FilterButton title="Completed" active={activeFilter === 'Completed'} onPress={() => setActiveFilter('Completed')} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        {/* Current Project */}
        <Text style={styles.sectionTitle}>Current Project</Text>
        <View style={styles.currentProjectCard}>
          <View style={styles.currentProjectHeader}>
            <Text style={styles.currentProjectTitle}>Al-Naseem Logistics Hub</Text>
            <View style={styles.activeBadge}>
              <View style={styles.activeDot} />
              <Text style={styles.activeBadgeText}>Active</Text>
            </View>
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>Riyadh, KSA</Text>
          </View>

          {/* Shift Timing */}
          <View style={styles.shiftContainer}>
            <View style={styles.clockIconContainer}>
              <Text style={styles.clockIcon}>🕒</Text>
            </View>
            <View>
              <Text style={styles.shiftLabel}>SHIFT TIMING</Text>
              <Text style={styles.shiftTime}>09:00 AM - 06:00 PM</Text>
            </View>
          </View>

          {/* View Details Button */}
          <TouchableOpacity style={styles.viewDetailsButton} onPress={() => navigation.navigate('AssignedProject')}>
            <Text style={styles.viewDetailsText}>View Details ›</Text>
          </TouchableOpacity>
        </View>

        {/* Past Projects */}
        <Text style={styles.sectionTitle}>Past Project</Text>
        {pastProjects.map(proj => (
          <PastProjectCard 
            key={proj.id} 
            {...proj} 
            onPress={() => navigation.navigate('PastProjectDetail')}
          />
        ))}

      </ScrollView>
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: rw(5),
    marginTop: rh(2),
    marginBottom: rh(2),
    paddingHorizontal: rw(4),
    height: rh(6),
    borderRadius: rw(2),
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchIcon: {
    fontSize: rf(2),
    color: colors.textSecondary,
    marginRight: rw(2),
  },
  searchInput: {
    flex: 1,
    fontSize: rf(1.4),
    color: colors.textPrimary,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: rw(5),
    marginBottom: rh(3),
    gap: rw(2),
  },
  filterButton: {
    paddingHorizontal: rw(5),
    paddingVertical: rh(1),
    borderRadius: rw(5),
    backgroundColor: '#F3F4F6',
  },
  filterButtonActive: {
    backgroundColor: '#0F52BA', 
  },
  filterButtonText: {
    fontSize: rf(1.3),
    color: '#64748B',
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: colors.white,
    fontWeight: '600',
  },
  contentContainer: {
    paddingHorizontal: rw(5),
    paddingBottom: rh(15),
  },
  sectionTitle: {
    fontSize: rf(1.8),
    fontWeight: '700',
    color: '#334155', 
    marginBottom: rh(1.5),
  },
  currentProjectCard: {
    backgroundColor: colors.white,
    borderRadius: rw(4),
    padding: rw(4),
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: rh(4),
  },
  currentProjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: rh(0.5),
  },
  currentProjectTitle: {
    fontSize: rf(1.6),
    fontWeight: '700',
    color: colors.textPrimary,
    flex: 1,
    marginRight: rw(2),
  },
  activeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1FAE5', 
    paddingHorizontal: rw(2),
    paddingVertical: rh(0.4),
    borderRadius: rw(3),
  },
  activeDot: {
    width: rw(1.5),
    height: rw(1.5),
    borderRadius: rw(0.75),
    backgroundColor: '#10B981', 
    marginRight: rw(1),
  },
  activeBadgeText: {
    fontSize: rf(1),
    fontWeight: '600',
    color: '#065F46', 
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rh(2.5),
  },
  locationIcon: {
    fontSize: rf(1.4),
    color: colors.textSecondary,
    marginRight: rw(1),
  },
  locationText: {
    fontSize: rf(1.3),
    color: colors.textSecondary,
  },
  shiftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6', 
    padding: rw(3),
    borderRadius: rw(3),
    marginBottom: rh(2),
  },
  clockIconContainer: {
    width: rw(8),
    height: rw(8),
    backgroundColor: '#E0E7FF',
    borderRadius: rw(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(3),
  },
  clockIcon: {
    fontSize: rf(1.5),
    color: '#1E40AF',
  },
  shiftLabel: {
    fontSize: rf(1),
    fontWeight: '700',
    color: '#64748B',
    marginBottom: rh(0.2),
  },
  shiftTime: {
    fontSize: rf(1.4),
    fontWeight: '700',
    color: colors.textPrimary,
  },
  viewDetailsButton: {
    borderWidth: 1,
    borderColor: '#1E40AF',
    borderRadius: rw(2),
    paddingVertical: rh(1.2),
    alignItems: 'center',
  },
  viewDetailsText: {
    color: '#1E40AF',
    fontWeight: '600',
    fontSize: rf(1.4),
  },
  pastProjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: rw(3),
    borderRadius: rw(3),
    marginBottom: rh(1.5),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  pastProjectImage: {
    width: rw(14),
    height: rw(14),
    borderRadius: rw(2),
    marginRight: rw(4),
  },
  pastProjectInfo: {
    flex: 1,
  },
  pastProjectTitle: {
    fontSize: rf(1.4),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.5),
  },
  pastProjectMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pastProjectStatus: {
    fontSize: rf(1.1),
    fontWeight: '600',
    color: '#10B981', 
  },
  pastProjectPeriod: {
    fontSize: rf(1.1),
    color: colors.textSecondary,
  },
  chevron: {
    fontSize: rf(2.5),
    color: '#CBD5E1',
    marginLeft: rw(2),
  },
});
