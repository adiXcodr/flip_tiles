import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Constants from 'expo-constants';

const Header = ({
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TILERR</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212858',
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: '5%',
        paddingVertical: 10
    },
    text: {
        color: "white",
        fontSize:25,
        fontWeight:'bold'
    }
});

export default Header;