import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Text } from 'react-native';

import styles from './Title.styles';

interface TitleProps {
  title: string;
  style: StyleProp<ViewStyle>;
}

function Title({ title, style }: TitleProps) {
  return <Text style={[styles.title, style]}>{title}</Text>;
}

export default Title;
