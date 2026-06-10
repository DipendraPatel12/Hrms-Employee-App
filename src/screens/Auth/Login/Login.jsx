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
const Login = () => {
  const navigation = useNavigation();
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
          <Text style={{ color: 'black' }}>
            Please sign in to your employee portal.
          </Text>
        </View>

        <View style={{ marginHorizontal: rw(5), marginTop: rh(2), gap: rh(2) }}>
          <View style={{ gap: rh(1) }}>
            <Text>Email</Text>
            <TextInput
              placeholder="Enter Email Address"
              placeholderTextColor="grey"
              style={{
                paddingHorizontal: rw(3),
                paddingVertical: rh(2),
                borderColor: 'black',
                borderRadius: 10,
                backgroundColor: 'white',
                color: 'black',
              }}
            ></TextInput>
          </View>

          <View style={{ gap: rh(1) }}>
            <Text>Password</Text>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="grey"
              style={{
                paddingHorizontal: rw(3),
                paddingVertical: rh(2),
                borderColor: 'black',
                borderRadius: 10,
                backgroundColor: 'white',
                color: 'black',
              }}
            ></TextInput>
          </View>
        </View>

        <View style={{ marginVertical: rh(3), marginHorizontal: rw(5) }}>
          <TouchableOpacity>
            <Text
              style={{ textAlign: 'right', color: 'blue' }}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: rw(5) }}>
          <Button title="log in" />
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
