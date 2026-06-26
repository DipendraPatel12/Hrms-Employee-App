import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import Button from '../../../components/common/Button';

const documents = [
  { 
    id: '1', 
    title: 'Health Insurance 2024', 
    dateInfo: 'Exp: Dec 12, 2024', 
    status: 'EXPIRING SOON', 
    iconType: 'warning' 
  },
  { 
    id: '2', 
    title: 'National ID Card', 
    dateInfo: 'Exp: Oct 20, 2028', 
    status: 'VALID', 
    iconType: 'shield' 
  },
  { 
    id: '3', 
    title: 'Employment Contract', 
    dateInfo: 'Updated: Jan 05, 2024', 
    status: 'VALID', 
    iconType: 'document' 
  },
];

const DocumentCard = ({ title, dateInfo, status, iconType }) => {
  const getIconConfig = () => {
    switch(iconType) {
      case 'warning': return { icon: '⚠️', bg: '#FEF2F2', color: '#DC2626' };
      case 'shield': return { icon: '🛡️', bg: '#F0F9FF', color: '#0284C7' };
      default: return { icon: '📄', bg: '#F1F5F9', color: '#0F52BA' };
    }
  };
  
  const iconConfig = getIconConfig();

  return (
    <View style={styles.card}>
      <View style={[styles.iconBox, { backgroundColor: iconConfig.bg }]}>
        <Text style={[styles.icon, { color: iconConfig.color }]}>{iconConfig.icon}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.dateInfo}>{dateInfo} • </Text>
          <Text style={[
            styles.statusText, 
            status === 'VALID' ? styles.statusValid : styles.statusWarning
          ]}>
            {status}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuIcon}>⋮</Text>
      </TouchableOpacity>
    </View>
  );
};

const Document = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Recent Document</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>

        {documents.map(doc => (
          <DocumentCard key={doc.id} {...doc} />
        ))}

      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="⊕ Upload Document" 
          onPress={() => navigation.navigate('UploadDocument')} 
          style={styles.uploadButton} 
        />
      </View>
    </View>
  );
};

export default Document;

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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  sectionTitle: {
    fontSize: rf(1.8),
    fontWeight: '800',
    color: '#334155',
  },
  viewAllText: {
    fontSize: rf(1.2),
    fontWeight: '700',
    color: '#0F52BA',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: rw(3.5),
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
  iconBox: {
    width: rw(12),
    height: rw(12),
    borderRadius: rw(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rw(4),
  },
  icon: {
    fontSize: rf(2.5),
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: rf(1.5),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: rh(0.5),
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateInfo: {
    fontSize: rf(1.1),
    color: colors.textSecondary,
  },
  statusText: {
    fontSize: rf(1),
    fontWeight: '800',
  },
  statusValid: {
    color: '#10B981', 
    backgroundColor: '#D1FAE5',
    paddingHorizontal: rw(1.5),
    paddingVertical: rh(0.2),
    borderRadius: rw(1),
    overflow: 'hidden',
  },
  statusWarning: {
    color: '#EF4444', 
  },
  menuButton: {
    padding: rw(2),
  },
  menuIcon: {
    fontSize: rf(2.5),
    color: '#94A3B8',
    fontWeight: 'bold',
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
  uploadButton: {
    width: '100%',
    borderRadius: rw(2),
  },
});
