import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';

const dependentData = [
  { id: '1', name: 'Sarah Johnson', relation: 'Spouse', status: 'Verified', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: '2', name: 'Leo Johnson', relation: 'Child', status: 'Pending', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: '3', name: 'Robert Johnson', relation: 'Parent', status: 'Pending', image: 'https://randomuser.me/api/portraits/men/78.jpg' },
];

const DependentItem = ({ name, relation, status, image }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.profileImage} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.relation}>{relation}</Text>
    </View>
    <View style={[styles.badge, status === 'Verified' ? styles.verifiedBadge : styles.pendingBadge]}>
      <Text style={[styles.badgeText, status === 'Verified' ? styles.verifiedText : styles.pendingText]}>
        {status === 'Verified' ? '✓ Verified' : '⊖ Pending'}
      </Text>
    </View>
  </View>
);

const Dependent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search family members..."
          placeholderTextColor={colors.textSecondary}
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Dependent List</Text>

        {dependentData.map(dep => (
          <DependentItem key={dep.id} {...dep} />
        ))}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('AddDependent')}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dependent;

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
    marginBottom: rh(3),
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
  contentContainer: {
    paddingHorizontal: rw(5),
    paddingBottom: rh(15),
  },
  sectionTitle: {
    fontSize: rf(1.8),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(2),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: rw(4),
    borderRadius: rw(3),
    marginBottom: rh(1.5),
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  profileImage: {
    width: rw(12),
    height: rw(12),
    borderRadius: rw(6),
    marginRight: rw(4),
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: rf(1.5),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.2),
  },
  relation: {
    fontSize: rf(1.2),
    color: colors.textSecondary,
  },
  badge: {
    paddingHorizontal: rw(2.5),
    paddingVertical: rh(0.6),
    borderRadius: rw(4),
  },
  badgeText: {
    fontSize: rf(1.1),
    fontWeight: '700',
  },
  verifiedBadge: {
    backgroundColor: '#D1FAE5', 
  },
  verifiedText: {
    color: '#065F46', 
  },
  pendingBadge: {
    backgroundColor: '#FEF3C7', 
  },
  pendingText: {
    color: '#92400E', 
  },
  fab: {
    position: 'absolute',
    bottom: rh(5),
    right: rw(5),
    width: rw(14),
    height: rw(14),
    borderRadius: rw(4), 
    backgroundColor: '#0F52BA',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#0F52BA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  fabIcon: {
    color: colors.white,
    fontSize: rf(3.5),
    fontWeight: '300',
    marginTop: -rh(0.5), 
  },
});
