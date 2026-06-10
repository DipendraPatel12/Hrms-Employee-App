import React from 'react';
import { View } from 'react-native';
import { rw } from '../../utils/responsive';

const Container = ({ children, style }) => {
  return (
    <View
      style={[
        {
          flex: 1,
          paddingHorizontal: rw(2),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Container;
