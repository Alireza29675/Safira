import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>سلام بر شما</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontFamily: 'iransans'
    }
});

export default MainScreen;