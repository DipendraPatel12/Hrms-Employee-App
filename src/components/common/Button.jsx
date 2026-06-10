import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';
import { rh, rw } from '../../utils/responsive';
import typography from '../../theme/typography';

const Button = ({
  title,
  onPress,
  loading = false,
  disabled = false,

  variant = 'primary',

  style,
  textStyle,
}) => {
  const buttonStyle = [
    styles.button,
    styles[variant],
    disabled && styles.disabled,
    style,
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={buttonStyle}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: rh(6),
    borderRadius: rw(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  primary: {
    backgroundColor: colors.primary,
  },

  secondary: {
    backgroundColor: colors.secondary,
  },

  danger: {
    backgroundColor: colors.error,
  },

  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },

  disabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: colors.white,
    fontSize: typography.body,
    fontWeight: '600',
  },
});

export default Button;
