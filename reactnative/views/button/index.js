/**
 * Created by ashen on 17/2/23.
 */
import React, {
    TextInput,
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
export default class Button extends React.Component {
    render(){
        return(
            <TouchableHighlight
                style={styles.exit}
                underlayColor="#d9d9d9"
                onPress={() => {
                    console.log('Press Basic Button!');
                }}>
                <Text style={styles.exittext}>
                    Basic Button
                </Text>
            </TouchableHighlight>
        );
    }
}