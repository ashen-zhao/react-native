/**
 * Created by ashen on 17/2/23.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image,ListView,Touchable,TouchableHighlight,Dimensions
} from 'react-native';

var deviceScreen = Dimensions.get('window');

class RN extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'Hello World', 'Props（属性）', 'State（状态）', '样式', '高度与宽度', '使用Flexbox布局', '处理文本输入', '如何使用ScrollView'
            ])
        };
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                <View style={[styles.cellView]}>
                     <TouchableHighlight onPress={this._onPressButton} style = {[styles.btn]}>
                        <Text style={[styles.list]}>{rowData}</Text>
                     </TouchableHighlight>
                </View>
                }
                style = {[styles.listview]}
            />
     );
    }
}

const styles = StyleSheet.create({
    listview:{
        flex: 1,
        height: deviceScreen.height - 60,
        width:deviceScreen.width
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
        textAlign:'center'
     },
});

AppRegistry.registerComponent('RN', () => RN);
