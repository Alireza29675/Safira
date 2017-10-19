import React, {Component} from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import {
    TabNavigator,
} from 'react-navigation';

import UserCarsTab from './UserCarsTab'
import UserNotificationsTab from './UserNotificationsTab'

const UserDataTabNavigator = TabNavigator({
    Cars: {
        screen: UserCarsTab,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <FontAwesome style={{ color: tintColor, fontSize: 20 }}>{Icons.car}</FontAwesome>
        },
    },
    Notifications: {
        screen: UserNotificationsTab,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <FontAwesome style={{ color: tintColor, fontSize: 20 }}>{Icons.bellO}</FontAwesome>
        },
    },
}, {
    headerMode: 'none',
    tabBarOptions: {
        activeTintColor: '#5fb5be',
        inactiveTintColor: '#999',
        showIcon: 'true',
        showLabel: false,
        style: {
            backgroundColor: '#F5F5F5'
        }
    },
});

export default UserDataTabNavigator;