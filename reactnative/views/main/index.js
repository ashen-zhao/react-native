/**
 * Created by ashen on 17/2/23.
 */
import React, { Component } from 'react';
import { AppRegistry,Navigator,Text,View,Dimensions,StyleSheet } from 'react-native';

import List from './list';
import Hello from '../hello';

var deviceScreen = Dimensions.get('window');
class RN extends Component {
    render() {
        var page = <List/>
        var url = this.props["urlRouter"]
        if (url == "hello") {
            page = <Hello/>
        } else if (url == 'state') {
            page = <List/>
        }
        return (
            page
        )
    }
}

const styles = StyleSheet.create({
    nav:{
        flex: 1,
        height: deviceScreen.height - 60,
        width:deviceScreen.width
    },
});

AppRegistry.registerComponent('RN', () => RN);
