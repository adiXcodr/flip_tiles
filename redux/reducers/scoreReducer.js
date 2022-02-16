import {
  SET_CHANCES_LEFT,
  REDUCE_CHANCES_LEFT,
  INCREASE_CHANCES_LEFT,
  SET_GAME_STATUS
} from "../reduxConstants";

const initialState = {
  chancesLeft: 3,
  status: "Playing" //W,L,P
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANCES_LEFT:
      return { ...state, chancesLeft: action.payload }
    case REDUCE_CHANCES_LEFT:
      return { ...state, chancesLeft: state.chancesLeft - 1 }
    case INCREASE_CHANCES_LEFT:
      return { ...state, chancesLeft: state.chancesLeft + 1 }
    case SET_GAME_STATUS:
      return { ...state, status: action.payload }
    default:
      return state;
  }
};
