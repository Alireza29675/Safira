import React, {Component} from 'react';

import {
    ScrollView,
    StyleSheet,
    FlatList,
    Text,
} from 'react-native';

import NotificationListItem from './NotificationListItem'

class UserCarsTab extends Component {
    static navigationOptions = {
        title: 'اعلان های شما',
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <FlatList
                    data={[
                        {key: 1, status: 'danger', message: 'این یک اعلان است', date: '20 خرداد 96'},
                        {key: 2, status: 'warning', message: 'این یک اعلان است', date: '20 خرداد 96'},
                        {key: 3, status: 'warning', message: 'این یک اعلان است', date: '20 خرداد 96'},
                        {key: 4, status: 'success', message: 'این یک اعلان است', date: '20 خرداد 96'},
                        {key: 5, status: 'danger', message: 'این یک اعلان است', date: '20 خرداد 96'},
                    ]}
                    renderItem={({item}) =>
                        <NotificationListItem
                            key={item.key}
                            status={item.status}
                            date={item.date}
                            message={item.message} />
                    }
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({});

export default UserCarsTab;