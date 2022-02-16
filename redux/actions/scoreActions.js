
import {
    SET_CHANCES_LEFT,
    REDUCE_CHANCES_LEFT,
    INCREASE_CHANCES_LEFT,
    SET_GAME_STATUS
} from "../reduxConstants";

const setChances = (val) => ({
    type: SET_CHANCES_LEFT,
    payload: val
});

const reduceChances = () => ({
    type: REDUCE_CHANCES_LEFT
});

const increaseChances = () => ({
    type: INCREASE_CHANCES_LEFT
});

const setGameStatus = (val) => ({
    type: SET_GAME_STATUS,
    payload: val
});

export {
    setChances,
    reduceChances,
    increaseChances,
    setGameStatus
};

