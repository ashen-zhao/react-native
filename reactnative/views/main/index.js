/**
 * Created by ashen on 17/2/23.
 */
import React, { Component } from 'react';
import { AppRegistry,Navigator,Text,View,Dimensions,StyleSheet } from 'react-native';

import List from './list';
import Hello from '../lessons/hello';
import Props from  '../lessons/props';
import State from  '../lessons/state';
import Style from '../lessons/style'

var deviceScreen = Dimensions.get('window');
class RN extends Component {
    render() {
        var page = <List/>
        var url = this.props["urlRouter"]
        if (url == "hello") {
            page = <Hello/>
        } else if (url == 'props') {
            page = <Props/>
        } else if (url == 'state') {
            page = <State/>
        } else if (url == 'style') {
            page = <Style/>
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
