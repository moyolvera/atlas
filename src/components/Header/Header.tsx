import * as React from 'react';
import { View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import CommonStyles from '@theme/common';
import { Text } from '@components';

interface HeaderProps {
  name?: string;
}

function Header({ name = '' }: HeaderProps) {
  return (
    <View style={CommonStyles.marginTopLarge}>
      <View
        style={[
          CommonStyles.flexRow,
          CommonStyles.spaceBetween,
          CommonStyles.marginTop
        ]}>
        <Feather name="lock" size={20} color="#000" />
        <Feather name="settings" size={18} color="#000" />
      </View>
      <View style={CommonStyles.marginTopLarge}>
        <Text>{`Hola! 🙂`}</Text>
        <Text font="bold">Welcome</Text>
        <Text>to your password manager</Text>
        {name && <Text>{name}</Text>}
      </View>
    </View>
  );
}

export default Header;
