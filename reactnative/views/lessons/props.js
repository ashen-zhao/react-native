/**
 * Created by ashen on 17/3/9.
 */
import  React, {Component} from 'react';
import {View, Text, Image} from  'react-native';

export default class Props extends Component {

    render() {
        let picurl = {
            uri: 'http://img06.tooopen.com/images/20161123/tooopen_sl_187628819897.jpg'
        }
        return(
            <View style = {{marginTop:100,marginLeft:100}}>
                <Image source={picurl} style={{width:200,height:100}}></Image>
            </View>
        )
    }
}