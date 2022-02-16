import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, FlatList, ActivityIndicator, } from 'react-native';
import CardItem from './CardItem';
import { getRandomLayout, getRandomInt } from '../utils/commonUtils';
import LivesComponent from './LivesComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setChances, reduceChances, increaseChances, setGameStatus } from '../redux/actions/scoreActions';
import { TextInput, Button, Text, IconButton } from 'react-native-paper';
import ConfettiCannon from 'react-native-confetti-cannon';

const dimension = 3;

const GameScreen = () => {

    const dispatch = useDispatch();

    const [number, setNumber] = useState(String(getRandomInt()));

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
        await delay(10);
        let rand_lay = getRandomLayout(dimension, number);
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
            <View style={{ ...styles.container, justifyContent: 'center', alignItems: 'center' }}>
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
                            gameStatus={gameStatus}
                            reset={reset}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={dimension}
                    contentContainerStyle={styles.grid}
                    columnWrapperStyle={styles.columnWrapperStyle}
                    ListHeaderComponent={
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => setNumber(text)}
                                value={number}
                                label="Enter the number"
                                keyboardType="numeric"
                                mode='outlined'
                                right={<TextInput.Icon name="chevron-right" onPress={reset} />}
                            />
                            <LivesComponent />
                        </View>
                    }
                    ListFooterComponent={
                        <View style={{
                            alignItems: "center"
                        }}>
                            {gameStatus == "Won" || gameStatus == "Lost" ?
                                <Text style={{ ...styles.text, color: gameStatus == "Won" ? "green" : "red" }}>Game {gameStatus}</Text>
                                :
                                null}
                            <View
                                style={styles.button}>
                                <Button
                                    icon="refresh"
                                    mode="contained"
                                    onPress={reset}
                                    color="#be4a6f"
                                >
                                    {gameStatus == "Won" || gameStatus == "Lost" ? "Play Again" : "Reset Board"}
                                </Button>
                            </View>
                        </View>
                    }
                />

                {gameStatus == "Won" ?
                    <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
                    :
                    null}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        width: '100%',
        paddingHorizontal: '5%',
    },
    text: {
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: '700',
        marginTop: 10
    },
    button: {
        elevation: 5,
        marginVertical: 20,
        width: "90%",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        marginHorizontal: '5%',
    },
    input: {
        width: '50%',
    },
    grid: {
        width: '100%',
    },
    columnWrapperStyle: { justifyContent: 'center' },
});

export default GameScreen;