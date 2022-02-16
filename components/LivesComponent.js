import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import heart from "../assets/heart_icon.png";
import emptyheart from '../assets/emptyheart.png'
import { generateArray } from '../utils/commonUtils';

const LivesComponent = ({
}) => {
    const [lives, setLives] = useState([]);
    const chancesLeft = useSelector((state) => state.score.chancesLeft);

    useEffect(() => {
        let arr = generateArray(chancesLeft);
        setLives(arr);
    }, [chancesLeft]);

    return (
        <View style={styles.container}>
            {lives && lives.length > 0 ?
                <FlatList
                    data={lives}
                    renderItem={({ item, index }) => (
                        <View>
                            <Image key={String(index)} source={heart} style={styles.imageContainer} />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    contentContainerStyle={styles.lives}
                />
                :
                <View style={styles.imageContainer}>

                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: 100,
        alignSelf: "flex-end",
        marginVertical: 20
    },
    lives: {
        flexDirection: "row",
    },
    imageContainer: {
        width: 30,
        height: 30,
    }
});

export default LivesComponent;