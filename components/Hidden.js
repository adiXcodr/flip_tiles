import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Hidden = ({
    handleFlip
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleFlip}>
            <Text>Tap</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        width: 100,
        height: 100,
    },
});

export default Hidden;