import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Hidden = ({
    handleFlip,
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleFlip}>
            <Text style={styles.text}>Tap</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212858',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        width: 100,
        height: 100,
    },
    text:{
        color:"white"
    }
});

export default Hidden;