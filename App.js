import React from 'react';

import { StackNavigator } from 'react-navigation';

import LoginScreen from './src/LoginScreen'
import MainScreen from "./src/MainScreen";

export default StackNavigator({
    Main: { screen: MainScreen },
    Login: { screen: LoginScreen },
});