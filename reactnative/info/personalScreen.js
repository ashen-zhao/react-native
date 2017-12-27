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
} from 'react-native';
import Dimensions from 'Dimensions';
import TitleBar, {titleBarHeight} from '../common/titlebar';
// import {titleBarHeight} from './titlebar';
import CommonLine from '../common/commonLine';
import Picker from 'react-native-wheel-picker'
// import areaJson from '../area.json'
var PickerItem = Picker.Item;

let contentWidth = Dimensions.get('window').width;
let contentHeight = Dimensions.get('window').height - titleBarHeight;

export default class PersonalScreen extends React.Component {
    static navigationOptions = {
        header: ({navigation}) => {
            return <TitleBar title="个人信息" navigation={navigation}/>
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
            <View>
                <Text style={{marginLeft: 16, marginTop: 8, marginBottom: 8}}>提交个人信息后一个月内不允许修改</Text>
                <CommonLine/>
                <View style={styles.infoLayout}>
                    <Text style={styles.tag}>现居地址</Text>
                    <Text style={styles.content}>{area}</Text>
                    <Image style={styles.arrowRight} source={require('../common/img/ic_right.png')}/>
                </View>
                <CommonLine/>
                <View style={styles.infoLayout}>
                    <TextInput style={[styles.enter, {marginLeft: 96, marginRight: 16}]} placeholder="请输入详细地址"
                               maxLength={40} underlineColorAndroid="transparent"/>
                </View>
                <CommonLine/>
                <TouchableNativeFeedback onPress={this.toggleMarriageDialog.bind(this)}>
                    <View style={styles.infoLayout}>
                        <Text style={styles.tag}>婚姻状况</Text>
                        <Text style={styles.content}>{marriage}</Text>
                        <Image style={styles.arrowRight} source={require('../common/img/ic_right.png')}/>
                    </View>
                </TouchableNativeFeedback>
                <CommonLine/>
                {this.state.showMarriageDialog ?
                    <View style={styles.dialog}>
                        <View style={styles.dialogContent}>
                            <View style={{height: 50, flexDirection: 'row-reverse', alignItems: 'center'}}>
                                <Text style={{
                                    position: 'absolute',
                                    width: contentWidth,
                                    height: 50,
                                    textAlign: 'center',
                                    textAlignVertical: "center",
                                }}>请选择婚姻状况</Text>
                                <Text style={{
                                    width: 60,
                                    height: 50,
                                    textAlign: 'center',
                                    textAlignVertical: "center",
                                    color: '#2dc490'
                                }} onPress={this.toggleMarriageDialog.bind(this)}>确认</Text>
                            </View>
                            <CommonLine/>
                            <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                                <Picker style={{width: 150, height: 180}}
                                        selectedValue={0}
                                        itemStyle={{color: "#2dc490", fontSize: 16}}
                                        onValueChange={(value, index) => {
                                            this.setState(
                                                {marriage: value}
                                            )
                                        }}>
                                    <PickerItem label="未婚" value={0} key={"0"}/>
                                    <PickerItem label="已婚" value={1} key={"1"}/>
                                </Picker>
                            </View>
                        </View>
                    </View>
                    : null
                }

            </View>
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