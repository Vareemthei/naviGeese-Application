import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { homeStyles } from '../styles';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={homeStyles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
