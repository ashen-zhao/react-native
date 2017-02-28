/**
 * Created by ashen on 17/2/28.
 */

import  React, {Component} from 'react';
import {View, Text} from  'react-native';

export default class Hello extends Component {
    static defaultProps = {
        title:'Hello RN'
    };

    render() {
        return(
            <View style = {{marginTop:100,marginLeft:100}}>
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}