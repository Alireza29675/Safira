import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };

    goToProfile () {
        console.log('Profile')
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.header}>
                    <Image style={styles.headerImage} source={require('../assets/images/tehran.jpg')} />
                    <TouchableOpacity activeOpacity={0.8} style={styles.userImageContainer}>
                        <Image style={styles.userImage} source={require('../assets/images/user/avatar.jpg')} onPress={this.goToProfile.bind(this)} />
                    </TouchableOpacity>
                </View>
                <View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 170
    },
    headerImage: {
        width: '100%',
        height: 170
    },
    userImageContainer: {
        position: 'absolute',
        left: '50%',
        bottom: -40,
        transform: [{ translateX: -70 }]
    },
    userImage: {
        width: 140,
        height: 140,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
    }
});

export default MainScreen;