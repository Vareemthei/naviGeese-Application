import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Root from './src/navigation/Root';

function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
export default App;
