import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
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
            <View>
                <View style={styles.header}>
                    <Image style={styles.headerImage} source={require('../assets/images/tehran.jpg')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 140
    },
    headerImage: {
        width: '100%',
        height: 140
    }
});

export default MainScreen;