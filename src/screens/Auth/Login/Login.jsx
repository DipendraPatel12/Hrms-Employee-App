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
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/slice/auth.slice';
import Toast from 'react-native-toast-message';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema } from '../../../validations/auth/login.schema';
const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async data => {
    try {
      await dispatch(loginUser(data)).unwrap();
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: 'Welcome back!',
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: err || 'Please check your credentials',
      });
    }
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
            Welcome
          </Text>
          <Text style={{ color: colors.textSecondary }}>
            Please sign in to your employee portal.
          </Text>
        </View>

        <View style={{ marginHorizontal: rw(5), marginTop: rh(2), gap: rh(2) }}>
          <View style={{ gap: rh(1) }}>
            <Text style={{ fontWeight: '500' }}>Email</Text>
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

          <View style={{ gap: rh(1) }}>
            <Text style={{ fontWeight: '500' }}>Password</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Enter Password"
                  placeholderTextColor="grey"
                  value={value}
                  onChangeText={onChange}
                  style={{
                    paddingHorizontal: rw(3),
                    paddingVertical: rh(2),
                    borderWidth: 1,
                    borderColor: errors.password
                      ? colors.danger
                      : colors.border,
                    borderRadius: 10,
                    backgroundColor: colors.white,
                    color: colors.black,
                  }}
                />
              )}
            />

            {errors.password && (
              <Text
                style={{
                  color: colors.danger,
                  fontSize: typography.caption,
                }}
              >
                {errors.password.message}
              </Text>
            )}
          </View>
        </View>

        <View style={{ marginVertical: rh(3), marginHorizontal: rw(5) }}>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'right',
                color: colors.primary,
                fontWeight: '500',
              }}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>



        <View style={{ marginHorizontal: rw(5) }}>
          <Button title="log in" loading={loading} onPress={handleSubmit(onSubmit)} />
        </View>
      </Container>
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
  },
});
