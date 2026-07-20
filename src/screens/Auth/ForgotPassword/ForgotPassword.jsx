import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { rf, rh, rw } from '../../../utils/responsive';
import colors from '../../../theme/colors';
import Screen from '../../../components/layout/Screen';
import Container from '../../../components/layout/Container';
import typography from '../../../theme/typography';

import Button from '../../../components/common/Button';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema } from '../../../validations/auth/forgotPassword.schema';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../../redux/slice/auth.slice';
import Toast from 'react-native-toast-message';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = data => {
    dispatch(forgetPassword(data))
      .unwrap()
      .then(() => {
        Toast.show({ type: 'success', text1: 'Success', text2: 'OTP sent to your email.' });
        navigation.navigate('VerifyOtp', { email: data.email });
      })
      .catch(err => {
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
            Forgot Password ?
          </Text>
          <Text style={{ color: colors.textSecondary }}>
            Enter your Email Address to receive a verification code.
          </Text>
        </View>

        <View style={{ marginHorizontal: rw(5), marginTop: rh(2), gap: rh(4) }}>
          <View style={{ gap: rh(1) }}>
            <Text style={{ fontWeight: '500' }}>Email Address</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Enter Email Address"
                  placeholderTextColor="grey"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={{
                    paddingHorizontal: rw(3),
                    paddingVertical: rh(2),
                    borderWidth: 1,
                    borderColor: errors.email ? colors.danger : colors.border,
                    borderRadius: 10,
                    backgroundColor: colors.white,
                    color: colors.black,
                  }}
                />
              )}
            />

            {errors.email && (
              <Text
                style={{
                  color: colors.danger,
                  fontSize: typography.caption,
                }}
              >
                {errors.email.message}
              </Text>
            )}
          </View>
          <View>
            <Button title="Send OTP" loading={loading} onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </Container>
    </Screen>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
  },
});
