import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@components';
import styles from './PasswordItem.styles';

interface PasswordItemProps {
  item: PasswordRecord;
}

function PasswordItem({ item }: PasswordItemProps) {
  const lastUpdate = Math.floor(
    (Date.now() - new Date(item.date).getTime()) / (1000 * 86400)
  );

  return (
    <View style={[styles.wrapper, { backgroundColor: '#fafafa' }]}>
      <Text>{item.label}</Text>
      <Text font="small">{`Last update: ${lastUpdate} days ago`}</Text>
    </View>
  );
}

export default PasswordItem;
