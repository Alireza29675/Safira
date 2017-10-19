import React, {Component} from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import UserDataTabNavigator from './components/UserDataTabNavigator'
import BackButton from './components/BackButton'
import GoogleMaps from './components/GoogleMaps'

class CarScreen extends Component {
    static navigationOptions = {
        title: 'پژو پارس نقره ای',
        headerLeft: <BackButton onPress={() => console.log('Hey')} />,
        headerTitleStyle: {
            alignSelf: 'center',
            fontFamily: 'iransans',
            fontSize: 17,
            left: -24
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <GoogleMaps />
                <View style={styles.tabsContainer}>
                    <UserDataTabNavigator resizeToContent={true} style={styles.tabs} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    // App
    container: {
        alignItems: 'stretch',
        flexDirection: 'column'
    },
    // Tabs
    tabsContainer: {
        height: 200
    },
    tabs: {
        flex: 1
    }
});

export default CarScreen;