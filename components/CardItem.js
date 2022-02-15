import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, } from 'react-native';
import CardFlip from 'react-native-card-flip';
import Hidden from './Hidden';
import Revealed from './Revealed';
import { selectRandom } from '../utils/commonUtils';

const rotateModes = ['x', 'y'];

const CardItem = ({
    item
}) => {
    let flipCard = useRef();

    return (
        <View style={styles.container}>
            <CardFlip
                style={styles.cardContainer}
                ref={(card) => flipCard = card}
                flipDirection={selectRandom(rotateModes)}
            >
                <Hidden handleFlip={() => flipCard.flip()} />
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