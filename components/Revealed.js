import { StyleSheet, Text, View, ScrollView, FlatList, } from 'react-native';

const Revealed = ({
    item
}) => {
    return (
        <View style={styles.container}>
            <Text>{item}</Text>
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
});

export default Revealed;