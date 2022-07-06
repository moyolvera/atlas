import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CommonStyles from '@theme/common';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './src/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={CommonStyles.flexOne}>
        <StatusBar style="auto" />
        <Navigator />
      </View>
    </NavigationContainer>
  );
}
