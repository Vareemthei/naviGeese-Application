import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'your-icon-library'; // Make sure to import the appropriate Icon component

const NavigationButton = ({icon, navigation, screen}) => {
  return (
    <TouchableOpacity onPress={navigation.navigate({screen})}>
      <Icon name={icon} size={30} />
    </TouchableOpacity>
  );
};

export default NavigationButton;
