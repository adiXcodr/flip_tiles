import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, } from 'react-native';
import CardItem from './CardItem';
import { getRandomLayout } from '../utils/commonUtils';

const dimension = 3;

const GameScreen = () => {
    const [layout, setLayout] = useState();

    useEffect(() => {
        let rand_lay = getRandomLayout(dimension);
        console.log("Random Layout is", rand_lay);
        setLayout(rand_lay);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={layout}
                renderItem={({ item, index }) => (
                    <CardItem
                        key={index}
                        item={item}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={dimension}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
    },
});

export default GameScreen;