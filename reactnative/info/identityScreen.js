'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    View,
    TouchableNativeFeedback,
    ActivityIndicator,
} from 'react-native';
import Dimensions from 'Dimensions';
import TitleBar, {titleBarHeight} from '../common/titlebar';
import CommonLine from '../common/commonLine';
import LoadingView from '../common/loadingView';

let contentWidth = Dimensions.get('window').width;
let contentHeight = Dimensions.get('window').height - titleBarHeight;

export default class IdentityScreen extends React.Component {
    static navigationOptions = {
        header: ({navigation}) => {
            return <TitleBar title="身份认证" navigation={navigation}/>
        },
    };

    constructor() {
        super();
        this.state = {
            area: "",
            marriage: -1,
            showMarriageDialog: false,
        }
    }

    toggleMarriageDialog() {
        this.setState(previousState => {
            return {showMarriageDialog: !previousState.showMarriageDialog}
        })
    }

    render() {
        let area = this.state.area.length == 0 ? "请点击选择" : this.state.area;
        let marriage = "请点击选择";
        if(this.state.marriage == 0){
            marriage = "未婚";
        }else if(this.state.marriage == 1){
            marriage = "已婚";
        }

        return (
            <LoadingView/>
        )
    }
}

var styles = StyleSheet.create({
    root: {
        backgroundColor: "#f3f3f3",
    },
    infoLayout: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
    },
    tag: {
        width: 80,
        color: "#000",
        fontSize: 16,
        marginLeft: 16,
    },
    content: {
        flex: 1,
        color: "#666",
        fontSize: 14,
    },
    enter: {
        flex: 1,
        padding: 0,
        fontSize: 14,
    },
    arrowRight: {
        marginRight: 16
    },
    dialog: {
        position: 'absolute',
        flexDirection: 'column-reverse',
        width: contentWidth,
        height: contentHeight,
        backgroundColor: '#0006'
    },
    dialogContent: {
        width: contentWidth,
        height: contentHeight / 2,
        backgroundColor: '#fff'
    },
});