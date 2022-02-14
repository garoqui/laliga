import { combineReducers } from "redux";
import sesionReducer from "./sesion.reducer";

const reducer = combineReducers({
    token : sesionReducer
})

export default reducer