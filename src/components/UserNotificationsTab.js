import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';

class UserNotificationsTab extends Component {
    static navigationOptions = {
        title: 'اعلان های شما',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Noty Tab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default UserNotificationsTab;