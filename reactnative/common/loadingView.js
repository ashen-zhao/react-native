/**
 * Created by zhuxuyang on 2017/9/19.
 */
'use strict';

import React, { PropTypes } from 'react';

import {
    StyleSheet,
    Dimensions,
    View,
    ActivityIndicator,
} from 'react-native';

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

export default class LoadingView extends React.Component {
    render() {
        return(
            <View pointerEvents={!!this.props && this.props.pointerEvents ? 'none' : 'auto'} style={styles.container}>
                <View pointerEvents={'none'} style={styles.loadingBg} />
                <View style={styles.loadingBody}>
                    <ActivityIndicator
                        animating={true}
                        color='white'
                        style={styles.centering}
                        size='small'
                    />
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40
    },
    container: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    loadingBg: {
        position: 'absolute',
        top: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    loadingBody: {
        width: 100,
        height: 80,
        position: 'absolute',
        top: SCREEN_HEIGHT / 2,
        left: SCREEN_WIDTH / 2,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        color: 'white',
        backgroundColor: 'transparent'
    }
});