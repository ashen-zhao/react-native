/**
 * Created by ashen on 17/2/23.
 */
import React, { Component } from 'react';
import { AppRegistry,Navigator,Text,View,Dimensions,StyleSheet } from 'react-native';

import List from './list';

var deviceScreen = Dimensions.get('window');
class RN extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'List', component: List}}
                style={[styles.nav]}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
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
