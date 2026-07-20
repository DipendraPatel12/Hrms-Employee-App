import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, PermissionsAndroid, Platform, Modal, SafeAreaView } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import Screen from '../../../components/layout/Screen';
import Container from '../../../components/layout/Container';
import Button from '../../../components/common/Button';
import colors from '../../../theme/colors';
import typography from '../../../theme/typography';
import { rf, rh, rw } from '../../../utils/responsive';

const SecureAttendanceVerification = () => {
  const navigation = useNavigation();
  const [selfieUri, setSelfieUri] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [tempPhotoUri, setTempPhotoUri] = useState(null);
  const { hasPermission, requestPermission } = useCameraPermission();
  const cameraRef = useRef(null);
  const device = useCameraDevice('front');

  const handleStartCamera = async () => {
    let granted = hasPermission;
    if (!granted) {
      granted = await requestPermission();
    }

    if (!granted) {
      Toast.show({ type: 'error', text1: 'Permission Denied', text2: 'Camera permission is required.' });
      return;
    }
    if (device == null) {
      Toast.show({ type: 'error', text1: 'Error', text2: 'No front camera found.' });
      return;
    }
    setTempPhotoUri(null);
    setIsCameraActive(true);
  };

  const handleCapturePhoto = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePhoto({
          qualityPrioritization: 'speed',
          flash: 'off',
          enableShutterSound: false
        });
        setTempPhotoUri(`file://${photo.path}`);
      }
    } catch (error) {
      Toast.show({ type: 'error', text1: 'Capture Failed', text2: error.message });
    }
  };

  const handleConfirmPhoto = () => {
    setSelfieUri(tempPhotoUri);
    setIsCameraActive(false);
    setTempPhotoUri(null);
  };

  const handleConfirm = () => {
    // Logic to submit check-in
  };

  return (
    <Screen>
      <Container>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Live Selfie Required</Text>
          <Text style={styles.subtitle}>
            Please take a live selfie using your camera to complete check-in verification.
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <TouchableOpacity 
            style={[styles.captureCard, selfieUri && { paddingVertical: 0, borderWidth: 0 }]} 
            activeOpacity={0.7}
            onPress={handleStartCamera}
          >
            {selfieUri ? (
              <>
                <Image source={{ uri: selfieUri }} style={styles.previewImage} />
                <TouchableOpacity style={styles.retakeButton} onPress={handleStartCamera}>
                  <Text style={styles.retakeText}>Retake Photo</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={styles.iconCircle}>
                  <Text style={styles.cameraIcon}>📷</Text>
                </View>
                <Text style={styles.captureTitle}>Tap to Capture Selfie</Text>
                <Text style={styles.captureSubtitle}>Live camera capture only</Text>
              </>
            )}
          </TouchableOpacity>

          <View style={styles.warningBox}>
            <Text style={styles.warningIcon}>ⓘ</Text>
            <Text style={styles.warningText}>
              Ensure your face is clearly visible, well-lit, and centered within the frame. photo from gallery are not allowed for security reasons.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoIcon}>ⓘ</Text>
            <Text style={styles.infoText}>
              To mark attendance, you must be within 500 meters of your assigned work location. Please ensure your location is enabled and accurate.
            </Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Button 
            title="Confirm & check - In" 
            onPress={handleConfirm} 
            disabled={!selfieUri} 
          />
        </View>
      </Container>

      <Modal visible={isCameraActive} animationType="slide" transparent={false}>
        <SafeAreaView style={styles.fullScreenCameraContainer}>
          {tempPhotoUri ? (
            <>
              <Image source={{ uri: tempPhotoUri }} style={StyleSheet.absoluteFill} resizeMode="cover" />
              <View style={styles.previewBottomBar}>
                <TouchableOpacity style={styles.previewActionBtn} onPress={() => setTempPhotoUri(null)}>
                  <Text style={styles.previewActionText}>Retake</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.previewActionBtn, styles.confirmActionBtn]} onPress={handleConfirmPhoto}>
                  <Text style={styles.confirmActionText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <Camera
                ref={cameraRef}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isCameraActive}
                photo={true}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.closeCameraButton} onPress={() => setIsCameraActive(false)}>
                <Text style={styles.closeCameraText}>✕</Text>
              </TouchableOpacity>
              <View style={styles.cameraBottomBar}>
                <TouchableOpacity style={styles.captureButtonOuter} onPress={handleCapturePhoto}>
                  <View style={styles.captureButtonInner} />
                </TouchableOpacity>
              </View>
            </>
          )}
        </SafeAreaView>
      </Modal>
    </Screen>
  );
};

export default SecureAttendanceVerification;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: rh(4),
    marginHorizontal: rw(5),
  },
  title: {
    color: colors.primary,
    fontSize: typography.h1,
    fontWeight: '800',
    marginBottom: rh(1),
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: rh(2.5),
  },
  contentContainer: {
    marginHorizontal: rw(5),
    marginTop: rh(3),
    flex: 1,
  },
  captureCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: rw(3),
    paddingVertical: rh(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: rh(3),
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: rh(25),
  },
  iconCircle: {
    width: rw(12),
    height: rw(12),
    borderRadius: rw(6),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  cameraIcon: {
    fontSize: rf(2.5),
  },
  captureTitle: {
    color: colors.textPrimary,
    fontSize: typography.h3,
    fontWeight: '700',
    marginBottom: rh(0.5),
  },
  captureSubtitle: {
    color: colors.textSecondary,
    fontSize: typography.caption,
  },
  warningBox: {
    flexDirection: 'row',
    backgroundColor: '#FEE2E2',
    borderRadius: rw(2),
    padding: rw(3),
    marginBottom: rh(2),
  },
  warningIcon: {
    color: colors.danger,
    fontSize: rf(1.8),
    marginRight: rw(2),
    marginTop: rh(0.2),
  },
  warningText: {
    color: colors.danger,
    fontSize: typography.caption,
    flex: 1,
    lineHeight: rh(2.2),
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#DCFCE7',
    borderRadius: rw(2),
    padding: rw(3),
    marginBottom: rh(3),
  },
  infoIcon: {
    color: '#166534',
    fontSize: rf(1.8),
    marginRight: rw(2),
    marginTop: rh(0.2),
  },
  infoText: {
    color: '#166534',
    fontSize: typography.caption,
    flex: 1,
    lineHeight: rh(2.2),
  },
  footerContainer: {
    marginHorizontal: rw(5),
    marginVertical: rh(4),
  },
  fullScreenCameraContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  cameraBottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: rh(15),
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonOuter: {
    width: rw(20),
    height: rw(20),
    borderRadius: rw(10),
    borderWidth: 4,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: rw(16),
    height: rw(16),
    borderRadius: rw(8),
    backgroundColor: 'white',
  },
  closeCameraButton: {
    position: 'absolute',
    top: rh(2),
    left: rw(5),
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: rw(10),
    height: rw(10),
    borderRadius: rw(5),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  closeCameraText: {
    color: 'white',
    fontSize: rf(2.5),
    fontWeight: 'bold',
  },
  retakeButton: {
    position: 'absolute',
    bottom: rh(1.5),
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: rw(4),
    paddingVertical: rh(1),
    borderRadius: rw(2),
  },
  retakeText: {
    color: 'white',
    fontSize: typography.body,
    fontWeight: '600',
  },
  previewBottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: rh(12),
    backgroundColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: rw(5),
  },
  previewActionBtn: {
    paddingVertical: rh(1.5),
    paddingHorizontal: rw(8),
    borderRadius: rw(8),
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  confirmActionBtn: {
    backgroundColor: colors.primary,
  },
  previewActionText: {
    color: 'white',
    fontSize: typography.h4,
    fontWeight: '600',
  },
  confirmActionText: {
    color: 'white',
    fontSize: typography.h4,
    fontWeight: '700',
  }
});
