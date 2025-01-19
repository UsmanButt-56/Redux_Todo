import { combineReducers } from "redux";
import { Add_Reducer } from "./AddReducer";

const reducers = combineReducers({
    Add : Add_Reducer,
});

export default reducers;