import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import heart from "../assets/heart_icon.png";
import emptyheart from '../assets/emptyheart.png'
import { generateArray } from '../utils/commonUtils';

const LivesComponent = ({
    style = {}
}) => {
    const [lives, setLives] = useState([]);
    const chancesLeft = useSelector((state) => state.score.chancesLeft);

    useEffect(() => {
        let arr = generateArray(chancesLeft);
        setLives(arr);
    }, [chancesLeft]);

    return (
        <View>
            {lives && lives.length > 0 ?
                <View style={styles.lives}>
                    {lives.map((item, index) => <Image key={String(index)} source={heart} style={styles.imageContainer} />)}
                </View>
                :
                <View style={styles.imageContainer}>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    lives: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-end',
    },
    imageContainer: {
        width: 30,
        height: 30,
    }
});

export default LivesComponent;