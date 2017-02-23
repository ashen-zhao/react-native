/**
 * Created by ashen on 17/2/23.
 */
class BasicButton extends Component {
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