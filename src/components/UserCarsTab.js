import React, {Component} from 'react';

import {
    ScrollView,
    StyleSheet,
    FlatList,
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
            <ScrollView>
                <FlatList
                    data={[
                        {key: 1, title: 'پژو 405 نقره ای', number: '10ج315 | ایران 20'},
                        {key: 2, title: 'پژو 405 نقره ای', number: '10ج315 | ایران 20'},
                        {key: 3, title: 'پژو 405 نقره ای', number: '10ج315 | ایران 20'},
                        {key: 4, title: 'پژو 405 نقره ای', number: '10ج315 | ایران 20'},
                        {key: 5, title: 'پژو 405 نقره ای', number: '10ج315 | ایران 20'},
                    ]}
                    renderItem={({item}) =>
                        <CarListItem
                            key={item.key}
                            title={item.title}
                            number={item.number} />
                    }
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({});

export default UserCarsTab;