import * as React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

interface ExtendedTextProps extends TextProps {
  font?: 'regular' | 'light' | 'black' | 'bold' | 'small';
}

const styles = StyleSheet.create({
  small: {
    fontSize: 12
  },
  regular: {
    fontSize: 16
  },
  light: {
    fontSize: 16,
    fontWeight: '100'
  },
  black: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

function Text({ font = 'regular', children, ...props }: ExtendedTextProps) {
  const textStyles = () => {
    switch (font) {
      case 'regular':
        return styles.regular;
      case 'small':
        return styles.small;
      case 'light':
        return styles.light;
      case 'black':
        return styles.black;
      case 'bold':
        return styles.bold;
      default:
        return styles.regular;
    }
  };

  return (
    <RNText {...props} style={[props.style, textStyles()]}>
      {children}
    </RNText>
  );
}

export default Text;
