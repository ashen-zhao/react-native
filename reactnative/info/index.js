'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import TitleBar from '../common/titlebar';
import CommonLine from '../common/commonLine';
import CompatTouchable from '../common/compatTouchable';
import IdentityScreen from './identityScreen';
import PersonalScreen from './personalScreen';

class MainScreen extends React.Component {
    static navigationOptions = {
        header: ({navigation}) => {
            return <TitleBar title="我的资料" navigation={navigation}/>
        },
    };

    render() {
        return (
            <View style={styles.root}>
                <CompatTouchable onPress={()=>{this.props.navigation.navigate("Identity")}}>
                    <View style={styles.infoLayout}>
                        <View style={[styles.outImage, {backgroundColor:'#829b3d'}]}>
                            <Image style={styles.image} source={require('./img/ic_info_identity.png')} />
                        </View>
                        <Text style={styles.text}>身份认证</Text>
                    </View>
                </CompatTouchable>
                <CommonLine/>
                <CompatTouchable onPress={()=>{this.props.navigation.navigate("Personal")}}>
                    <View style={styles.infoLayout}>
                        <View style={[styles.outImage, {backgroundColor:'#42bb8e'}]}>
                            <Image style={styles.image} source={require('./img/ic_info_personal.png')} />
                        </View>
                        <Text style={styles.text}>个人信息</Text>
                    </View>
                </CompatTouchable>
                <CommonLine/>
                <CompatTouchable>
                    <View style={styles.infoLayout}>
                        <View style={[styles.outImage, {backgroundColor:'#339f90'}]}>
                            <Image style={styles.image} source={require('./img/ic_info_job.png')} />
                        </View>
                        <Text style={styles.text}>职业信息</Text>
                    </View>
                </CompatTouchable>
                <CommonLine/>
                <CompatTouchable>
                    <View style={styles.infoLayout}>
                        <View style={[styles.outImage, {backgroundColor:'#326f9c'}]}>
                            <Image style={styles.image} source={require('./img/ic_info_school.png')} />
                        </View>
                        <Text style={styles.text}>学校信息</Text>
                    </View>
                </CompatTouchable>
                <CommonLine/>
                <CompatTouchable>
                    <View style={styles.infoLayout}>
                        <View style={[styles.outImage, {backgroundColor:'#829b3d'}]}>
                            <Image style={styles.image} source={require('./img/ic_info_family.png')} />
                        </View>
                        <Text style={styles.text}>亲友信息</Text>
                    </View>
                </CompatTouchable>
                <CommonLine/>
                <CompatTouchable>
                    <View style={styles.infoLayout}>
                        <View style={[styles.outImage, {backgroundColor:'#42bb8e'}]}>
                            <Image style={styles.image} source={require('./img/ic_info_zhima.png')} />
                        </View>
                        <Text style={styles.text}>芝麻分授权</Text>
                    </View>
                </CompatTouchable>
                <CommonLine/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor:"#fff",
    },
    infoLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
    },
    outImage:{
        width: 31,
        height: 31,
        marginLeft: 16,
    },
    image:{
        width: 31,
        height: 31,
    },
    text:{
        marginLeft: 16,
        flex: 1,
    },
});

export default StackNavigator({
    Main: {screen: MainScreen},
    Identity: {screen: IdentityScreen},
    Personal: {screen: PersonalScreen},
});