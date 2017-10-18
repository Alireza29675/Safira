import React from 'react';

import { StackNavigator } from 'react-navigation';

import MainScreen from './src/MainScreen'

export default StackNavigator({
    Home: { screen: MainScreen },
});