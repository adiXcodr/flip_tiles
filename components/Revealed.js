import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import bomb from '../assets/bomb_icon.png';

const Revealed = ({
    item
}) => {

    return (
        <View style={{ ...styles.container, backgroundColor: item ? "#447c4d" : "white" }}>
            {
                item ?
                    <Text style={styles.text}>{String(item)}</Text>
                    :
                    <Image source={bomb} style={styles.imageContainer} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        width: 100,
        height: 100,
    },
    imageContainer: {
        width: "40%",
        height: "40%",
    },
    text: {
        color: "white"
    }
});

export default Revealed;