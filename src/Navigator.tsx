import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { Home } from '@screens';

type AuthStackParamList = {};

type AppStackParamList = {
  Home: undefined;
};

export type RootStackParamList = AuthStackParamList & AppStackParamList;

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

const SCREEN_OPTIONS = { headerShown: false };

function Navigator() {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default Navigator;
