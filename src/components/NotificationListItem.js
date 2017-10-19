import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const colors = {
    success: 'green',
    warning: 'orange',
    danger: 'red'
};

const statusInPersian = {
    success: 'خبر خوب!',
    warning: 'هشدار',
    danger: 'اعلام خطر!'
};

class NotificationListItem extends Component {

    render() {
        const containerStyle = [styles.container, { borderRightColor: colors[this.props.status] }];
        return (
            <TouchableOpacity activeOpacity={0.8} style={containerStyle}>
                <View style={styles.header}>
                    <Text style={styles.date}>{this.props.date}</Text>
                    <Text style={styles.status}>{statusInPersian[this.props.status]}</Text>
                </View>
                <Text style={styles.message}>{this.props.message}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '94%',
        marginLeft: '3%',
        marginTop: 13,
        borderRightWidth: 10,
        borderRightColor: 'red',
        alignItems: 'center',
        padding: 20,
        paddingTop: 15,
        paddingBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    status: {
        fontFamily: 'iransans',
        fontSize: 13
    },
    date: {
        fontFamily: 'iransans',
        fontSize: 13
    },
    message: {
        fontFamily: 'iransans',
        fontSize: 15,
        color: '#333',
        textAlign: 'right',
        width: '100%',
        marginTop: 8,
        marginBottom: 2
    },
});

export default NotificationListItem;