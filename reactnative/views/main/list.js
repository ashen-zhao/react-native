/**
 * Created by ashen on 17/2/28.
 */
import React, { Component , PropTypes} from 'react';
import {AppRegistry,StyleSheet,Text,View,ListView,TouchableOpacity,Dimensions ,NativeModules} from 'react-native';

var deviceScreen = Dimensions.get('window');
var RNModules = NativeModules.RTModule;

export default class List extends Component {

    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                ['hello','Hello World'], ['props','Props（属性）'], ['state','State（状态）'], ['style','样式'], ['wh','高度与宽度'], ['flexbox','使用Flexbox布局'], ['text','处理文本输入'], ['scroll','如何使用ScrollView']
            ]),
        };
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    style={[styles.listview]}
                    renderRow={(rowData) =>
                        <View style={[styles.cellView]}>
                            <TouchableOpacity  onPress={ () => RNModules.RNOpenOneVC(rowData[0])} style={[styles.btn]}>
                                <Text style={[styles.list]}>{rowData[1]}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listview:{
        flex: 1,
        height: deviceScreen.height - 60,
        width:deviceScreen.width,
    },
    cellView:{

    },
    btn:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent: 'center',

    },
     list: {
        color: 'black',
        fontSize: 20,
        marginTop: 20,
        height:40,
        textAlign:'center',
     },
});