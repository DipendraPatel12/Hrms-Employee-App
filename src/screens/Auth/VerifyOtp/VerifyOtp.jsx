import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { rf, rh, rw } from '../../../utils/responsive';
import colors from '../../../theme/colors';
import Screen from '../../../components/layout/Screen';
import Container from '../../../components/layout/Container';
import typography from '../../../theme/typography';

import Button from '../../../components/common/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp as verifyOtpAction } from '../../../redux/slice/auth.slice';
import Toast from 'react-native-toast-message';

const VerifyOtp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [seconds, setSeconds] = useState(59);
  const { loading } = useSelector((state) => state.auth);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { email } = route.params || {};

  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 6) {
      Alert.alert('Error', 'Please enter complete OTP');
      return;
    }

    dispatch(verifyOtpAction({ email, otp: enteredOtp }))
      .unwrap()
      .then((res) => {
        Toast.show({ type: 'success', text1: 'Success', text2: 'OTP Verified successfully.' });
        navigation.navigate('ResetPassword', { reset_token: res.data.reset_token });
      })
      .catch((err) => {
        Toast.show({ type: 'error', text1: 'Error', text2: err });
      });
  };

  return (
    <Screen>
      <Container>
        <View
          style={{
            marginTop: rh(4),
            marginHorizontal: rw(5),
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontSize: typography.h1,
              fontWeight: '800',
            }}
          >
            Verify OTP
          </Text>
          <Text style={{ color: colors.textSecondary }}>
            We've sent a 6-digit verification code to {email || 'your email'}
          </Text>
        </View>

        <View style={{ marginHorizontal: rw(5), marginTop: rh(2), gap: rh(4) }}>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputRefs.current[index] = ref)}
                value={digit}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={text => handleChange(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                style={styles.otpInput}
              />
            ))}
          </View>
          <View>
            <Button
              title="Verify OTP"
              loading={loading}
              onPress={verifyOtp}
            />
          </View>
        </View>

        <View
          style={{
            marginVertical: rh(3),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: colors.textSecondary }}>
            Haven't received the code?
          </Text>
          <Text style={{ color: colors.primary }}>
            {seconds > 0
              ? `Resend code in 00:${seconds.toString().padStart(2, '0')}`
              : 'Resend Code'}
          </Text>
        </View>
      </Container>
    </Screen>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: rw(2),
  },
  otpInput: {
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
    width: rw(12),
    height: rh(6),
    textAlign: 'center',
  },
});
