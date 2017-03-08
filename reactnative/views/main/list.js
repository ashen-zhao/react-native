/**
 * Created by ashen on 17/2/28.
 */
import React, { Component , PropTypes} from 'react';
import {AppRegistry,StyleSheet,Text,View,ListView,TouchableOpacity,Dimensions ,NativeModules} from 'react-native';

import Hello from '../hello';

var deviceScreen = Dimensions.get('window');
var RNModules = NativeModules.RTModule;

export default class List extends Component {
    static props = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
    }

    _pressButton(row) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'Hello',
                component: Hello,
                params:{
                    title:'Hello World'
                }
            })
        }
    }


    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'Hello World', 'Props（属性）', 'State（状态）', '样式', '高度与宽度', '使用Flexbox布局', '处理文本输入', '如何使用ScrollView'
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
                            <TouchableOpacity  onPress={ () => RNModules.RNOpenOneVC('push')} style={[styles.btn]}>
                                <Text style={[styles.list]}>{rowData}</Text>
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