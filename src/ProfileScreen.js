import React, {Component} from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>

            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default ProfileScreen;