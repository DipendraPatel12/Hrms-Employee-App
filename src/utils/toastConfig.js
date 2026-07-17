import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import colors from '../theme/colors';
import { rh, rw, rf } from './responsive';
import typography from '../theme/typography';

/*
  1. BaseToast and ErrorToast give us a lot of built-in styling. 
     You can modify text1Style (title), text2Style (subtitle), contentContainerStyle (padding), 
     and style (overall height/border/background).
  2. You can also create entirely custom functional components here if you want completely unique designs.
*/

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: colors.primary,
        height: rh(9), // adjust overall height here
        width: '90%',
        borderRadius: rw(2.5),
        borderLeftWidth: 6,
      }}
      contentContainerStyle={{ paddingHorizontal: rw(4) }}
      text1Style={{
        fontSize: typography.h5,
        fontWeight: 'bold',
        color: colors.black,
      }}
      text2Style={{
        fontSize: typography.body,
        color: colors.textSecondary,
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: colors.danger,
        height: rh(9), // adjust overall height here
        width: '90%',
        borderRadius: rw(2.5),
        borderLeftWidth: 6,
      }}
      text1Style={{
        fontSize: typography.h5,
        fontWeight: 'bold',
        color: colors.black,
      }}
      text2Style={{
        fontSize: typography.body,
        color: colors.textSecondary,
      }}
      text2NumberOfLines={2} // in case error messages are long
    />
  ),
  
  // You can add more types like 'info', 'warning', etc.
};
