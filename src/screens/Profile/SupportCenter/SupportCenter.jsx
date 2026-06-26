import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../../theme/colors';
import { rh, rw, rf } from '../../../utils/responsive';
import Button from '../../../components/common/Button';

const SupportCenter = () => {
  return (
    <View style={styles.container}>
      
      {/* Illustration Area */}
      <View style={styles.illustrationContainer}>
        {/* Placeholder for the illustration. A real implementation would use a local SVG or Image */}
        <View style={styles.circleBackground}>
          <Image 
            source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-4993632-4161741.png' }} 
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Text Content */}
      <View style={styles.textContent}>
        <Text style={styles.title}>Need Help ?</Text>
        <Text style={styles.subtitle}>
          Our Support team is here for you. Send us an email and we will get back to you.
        </Text>
        
        <Text style={styles.emailText}>Support@Company.com</Text>
      </View>

      {/* Action Button */}
      <View style={styles.buttonContainer}>
        <Button 
          title="Support" 
          onPress={() => {}} 
          style={styles.supportButton} 
        />
      </View>

    </View>
  );
};

export default SupportCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    paddingHorizontal: rw(5),
  },
  illustrationContainer: {
    marginTop: rh(8),
    marginBottom: rh(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBackground: {
    width: rw(70),
    height: rw(70),
    backgroundColor: colors.white,
    borderRadius: rw(35),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  illustrationImage: {
    width: rw(50),
    height: rw(50),
  },
  textContent: {
    alignItems: 'center',
    marginBottom: rh(5),
    width: '90%',
  },
  title: {
    fontSize: rf(2.4),
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: rh(1.5),
  },
  subtitle: {
    fontSize: rf(1.4),
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: rf(2),
    marginBottom: rh(2.5),
  },
  emailText: {
    fontSize: rf(1.4),
    fontWeight: '700',
    color: '#1E3A8A', 
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: rw(5),
  },
  supportButton: {
    width: '100%',
    borderRadius: rw(3),
    paddingVertical: rh(1.8),
  },
});
