/**
 * Created by ashen on 17/2/23.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image,ListView,Touchable,TouchableHighlight
} from 'react-native';
import Button from '../../button/BasicButton';
class RN extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                '1、Hello World', '2、Props（属性）', '3、State（状态）', '4、样式', '5、高度与宽度', '6、使用Flexbox布局', '7、处理文本输入', '8、如何使用ScrollView'
            ])
        };
    }
    render() {
        return (
            <View style={{flex: 0, paddingTop: 10}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                     <TouchableHighlight onPress={this._onPressButton} style = {[styles.btn]}>
                        <Text style={[styles.list]}>{rowData}</Text>
                     </TouchableHighlight>
                }
            />
            </View>
     );
    }
}

const styles = StyleSheet.create({
    list: {
        color: 'black',
        fontSize: 20,
        height:50,
        alignItems:'center'
    },
    btn:{

    },
});

AppRegistry.registerComponent('RN', () => RN);
