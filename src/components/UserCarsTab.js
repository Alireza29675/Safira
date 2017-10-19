import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import CarListItem from './CarListItem'

class UserCarsTab extends Component {
    static navigationOptions = {
        title: 'ماشین های شما',
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <CarListItem title='پژو 405 نقره ای' number="10ج315 | ایران 20" />
                <CarListItem title='پژو 405 نقره ای' number="10ج315 | ایران 20" />
                <CarListItem title='پژو 405 نقره ای' number="10ج315 | ایران 20" />
                <CarListItem title='پژو 405 نقره ای' number="10ج315 | ایران 20" />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default UserCarsTab;