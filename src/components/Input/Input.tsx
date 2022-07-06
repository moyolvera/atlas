import * as React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import CommonStyles from '@theme/common';

import styles from './Input.styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  iconLeft: React.ReactNode;
}

function Input({ placeholder, iconLeft, ...props }: InputProps) {
  return (
    <View
      style={[
        CommonStyles.marginTopLarge,
        CommonStyles.flexRow,
        CommonStyles.alignItemsCenter
      ]}>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.input,
          CommonStyles.fullWidth,
          iconLeft && CommonStyles.paddingLeftLarge
        ]}
        {...props}
      />
      {iconLeft && (
        <View style={[CommonStyles.absolute, CommonStyles.paddingLeftNano]}>
          {iconLeft}
        </View>
      )}
    </View>
  );
}

export default Input;
