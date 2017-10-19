import React from 'react';

import { StackNavigator } from 'react-navigation';

import LoginScreen from './src/LoginScreen'
import MainScreen from "./src/MainScreen";
import CarScreen from "./src/CarScreen";

export default StackNavigator({
    Car: { screen: CarScreen },
    Main: { screen: MainScreen },
    Login: { screen: LoginScreen },
});