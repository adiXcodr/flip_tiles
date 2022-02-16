import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button, ActivityIndicator } from 'react-native';
import CardItem from './CardItem';
import { getRandomLayout } from '../utils/commonUtils';
import LivesComponent from './LivesComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setChances, reduceChances, increaseChances, setGameStatus } from '../redux/actions/scoreActions';

const dimension = 3;

const GameScreen = () => {

    const dispatch = useDispatch();

    const [layout, setLayout] = useState();

    const [resetting, setResetting] = useState(true);

    const chancesLeft = useSelector((state) => state.score.chancesLeft);
    const gameStatus = useSelector((state) => state.score.status);

    const delay = millis => new Promise((resolve, reject) => {
        setTimeout(_ => resolve(), millis)
    });

    const reset = () => {
        dispatch(setChances(3));
        dispatch(setGameStatus("Playing"))
        startSetLayout();
    };


    const startSetLayout = async () => {
        setResetting(true);
        await delay(500);
        let rand_lay = getRandomLayout(dimension);
        console.log("Random Layout is", rand_lay);
        setLayout(rand_lay);
        setResetting(false);
    };

    useEffect(() => {
        reset();
    }, []);

    useEffect(() => {
        if (chancesLeft == 0 && gameStatus == "Playing") {
            dispatch(setGameStatus("Lost"))
        }
    }, [chancesLeft, gameStatus])

    if (resetting) {
        return (
            <View style={{ ...styles.container, marginTop: '100%' }}>
                <ActivityIndicator size="large" color={'black'} />
                <Text>Setting Up...</Text>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>

                <FlatList
                    data={layout}
                    renderItem={({ item, index }) => (
                        <CardItem
                            key={index}
                            item={item}
                            layout={layout}
                            index={index}
                            chancesLeft={chancesLeft}
                            reset={reset}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={dimension}
                    ListHeaderComponent={
                        <View>
                            <LivesComponent />
                        </View>
                    }
                    ListFooterComponent={
                        <View style={{
                            alignItems: "center"
                        }}>
                            {gameStatus == "Won" || gameStatus == "Lost" ?
                                <Text style={styles.text}>Game {gameStatus}</Text>
                                :
                                null}
                            <View
                                style={styles.button}>
                                <Button
                                    onPress={reset}
                                    title={gameStatus == "Won" || gameStatus == "Lost" ? "Play Again" : "Reset Board"}
                                    color="#be4a6f"
                                />
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 10
    },
    button: {
        elevation: 5,
        marginVertical: 10,
        width: "50%",
    }
});

export default GameScreen;