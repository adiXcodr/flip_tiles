import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Vibration } from 'react-native';
import CardFlip from 'react-native-card-flip';
import Hidden from './Hidden';
import Revealed from './Revealed';
import { selectRandom } from '../utils/commonUtils';
import { useDispatch, useSelector } from 'react-redux';
import { setChances, reduceChances, increaseChances, setGameStatus } from '../redux/actions/scoreActions';

const rotateModes = ['x', 'y'];

const CardItem = ({
    item,
    layout,
    index,
    chancesLeft,
    reset
}) => {

    const dispatch = useDispatch();

    const handleFlip = () => {
        if (chancesLeft > 0) {
            flipCard.flip();
            dispatch(reduceChances());
            if (layout[index]) {
                console.log('Game Won')
                dispatch(setGameStatus("Won"));
            }
            else {
                Vibration.vibrate();
            }
        }
    };

    let flipCard = useRef();

    return (
        <View style={styles.container}>
            <CardFlip
                style={styles.cardContainer}
                ref={(card) => flipCard = card}
                flipDirection={selectRandom(rotateModes)}
            >
                <Hidden handleFlip={handleFlip} />
                <Revealed item={item} />
            </CardFlip>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    cardContainer: {
        minWidth: 100,
        minHeight: 100,
    },
});

export default CardItem;