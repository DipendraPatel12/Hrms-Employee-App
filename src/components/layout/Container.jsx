import React from 'react';
import { View } from 'react-native';
import { rw } from '../../utils/responsive';
import colors from '../../theme/colors';

const Container = ({ children, style }) => {
  return (
    <View
      style={[
        {
          flex: 1,
          paddingHorizontal: rw(2),
          backgroundColor: colors.background,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Container;
