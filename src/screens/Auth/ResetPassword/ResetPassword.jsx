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
import { useNavigation } from '@react-navigation/native';
import { resetPasswordSchema } from '../../../validations/auth/resetPassword.schema';
const ResetPassword = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      new_password: '',
      confirm_password: '',
    },
  });

  const onSubmit = data => {
    console.log('Login Data:', data);
    navigation.navigate('VerifyOtp');

    // Call Login API Here
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
            Create New Password
          </Text>
          <Text style={{ color: colors.textSecondary }}>
            Please enter your new password below to secure your account.
          </Text>
        </View>

        <View style={{ marginHorizontal: rw(5), marginTop: rh(2), gap: rh(2) }}>
          <View style={{ gap: rh(1) }}>
            <Text style={{ fontWeight: '500' }}>NEW PASSWORD</Text>
            <Controller
              control={control}
              name="new_password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Enter New Password"
                  placeholderTextColor="grey"
                  value={value}
                  onChangeText={onChange}
                  autoCapitalize="none"
                  style={{
                    paddingHorizontal: rw(3),
                    paddingVertical: rh(2),
                    borderWidth: 1,
                    borderColor: errors.new_password
                      ? colors.danger
                      : colors.border,
                    borderRadius: 10,
                    backgroundColor: colors.white,
                    color: colors.black,
                  }}
                />
              )}
            />

            {errors.new_password && (
              <Text
                style={{
                  color: colors.danger,
                  fontSize: typography.caption,
                }}
              >
                {errors.new_password.message}
              </Text>
            )}
          </View>

          <View style={{ gap: rh(1) }}>
            <Text style={{ fontWeight: '500' }}>CONFIRM PASSWORD</Text>
            <Controller
              control={control}
              name="confirm_password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Re-Enter Password"
                  placeholderTextColor="grey"
                  value={value}
                  onChangeText={onChange}
                  autoCapitalize="none"
                  style={{
                    paddingHorizontal: rw(3),
                    paddingVertical: rh(2),
                    borderWidth: 1,
                    borderColor: errors.confirm_password
                      ? colors.danger
                      : colors.border,
                    borderRadius: 10,
                    backgroundColor: colors.white,
                    color: colors.black,
                  }}
                />
              )}
            />

            {errors.confirm_password && (
              <Text
                style={{
                  color: colors.danger,
                  fontSize: typography.caption,
                }}
              >
                {errors.confirm_password.message}
              </Text>
            )}
          </View>
        </View>

        <View style={{ marginHorizontal: rw(5), marginVertical: rh(4) }}>
          <Button title="Reset Password" onPress={handleSubmit(onSubmit)} />
        </View>
      </Container>
    </Screen>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
  },
});
