import { StyleSheet, Text, View, Image} from 'react-native';
import bomb from '../assets/bomb_icon.png'; 

const Revealed = ({
    item
}) => {
    return (
        <View style={styles.container}>
            {
                item?
                <Text>W</Text>
                :
                <Image source={bomb} style={styles.imageContainer}/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        width: 100,
        height: 100,
    },
    imageContainer:{
        width: 50,
        height: 50,
    }
});

export default Revealed;