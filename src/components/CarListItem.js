import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class CarListItem extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.number}>{this.props.number}</Text>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '94%',
        height: 60,
        marginLeft: '3%',
        marginTop: 13,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'iransans',
        fontSize: 16,
        color: '#208993'
    },
    number: {
        fontFamily: 'iransans',
        color: '#ed5900'
    }
});

export default CarListItem;