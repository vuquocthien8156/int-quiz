import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './Navigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
