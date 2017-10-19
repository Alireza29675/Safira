import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

class UserCarsTab extends Component {
    static navigationOptions = {
        title: 'ماشین های شما',
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Car Tab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default UserCarsTab;