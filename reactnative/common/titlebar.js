'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

export let titleBarHeight = 50;

export default class TitleBar extends React.Component {
    static defaultProps = {
        title: "no title",
        navigation: null,
    };

    lClick = () => {
        if (this.props.navigation) {
            this.props.navigation.goBack();
        }
    }

    render() {
        let left;
        if (this.props.navigation) {
            left = <TouchableOpacity style={styles.leftTouchable} onPress={this.lClick}>
                <Image source={require('./img/ic_back.png')}/>
            </TouchableOpacity>
        } else {
            left = <View style={styles.leftTouchable}/>
        }
        return <View style={styles.titlebar}>
            {left}
            <Text style={styles.title}>{this.props.title}</Text>
            <View style={styles.right}/>
        </View>
    }
}

var styles = StyleSheet.create({
    leftTouchable: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        width: 50,
        height: 50,
    },
    titlebar: {
        height: titleBarHeight,
        backgroundColor: '#282536',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
    },
});