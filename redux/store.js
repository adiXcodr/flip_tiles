import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import scoreReducer from "./reducers/scoreReducer";

const rootReducer = combineReducers({
  score: scoreReducer
});

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;