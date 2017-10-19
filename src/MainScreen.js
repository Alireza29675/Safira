import React, {Component} from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import QuickShowItem from './components/QuickShowItem'
import UserDataTabNavigator from './components/UserDataTabNavigator'

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };

    goToProfile () {
        console.log('Profile')
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.headerImage} source={require('../assets/images/tehran.jpg')} />
                    <TouchableOpacity activeOpacity={0.8} style={styles.userImageContainer}>
                        <Image style={styles.userImage} source={require('../assets/images/user/avatar.jpg')} onPress={this.goToProfile.bind(this)} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.8} >
                        <Text style={styles.detailsContainer}>
                            <Text style={styles.detailsName}>علیرضا شیخ الملوکی </Text>
                            <FontAwesome style={styles.arrowLeft}>{Icons.chevronLeft}</FontAwesome>
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.quickShow}>
                    <QuickShowItem amount={120} first title="badge" />
                    <QuickShowItem amount={1125} title="rank" />
                    <QuickShowItem amount={250} last title="score" />
                </View>
                <View style={styles.tabsContainer}>
                    <UserDataTabNavigator style={styles.tabs} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flexDirection: 'column'
    },

    // Header styles
    header: {
        width: '100%',
        height: 170
    },
    headerImage: {
        width: '100%',
        height: 170
    },
    userImageContainer: {
        position: 'absolute',
        left: '50%',
        bottom: -40,
        zIndex: 99,
        transform: [{ translateX: -70 }]
    },
    userImage: {
        width: 140,
        height: 140,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
    },

    // Profile details styles
    detailsContainer: {
        marginTop: 60,
        textAlign: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    detailsName: {
        fontFamily: 'iransans',
        fontWeight: 'bold',
        fontSize: 20
    },
    quickShow: {
        borderWidth: 1,
        borderColor: '#CCC',
        width: '85%',
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 12,
        flexDirection: 'row',
        backgroundColor: '#BBB',
        overflow: 'hidden'
    },

    // Tabs
    tabsContainer: {
        height: 200,
        marginTop: 30
    },
    tabs: {
        flex: 1
    }
});

export default MainScreen;