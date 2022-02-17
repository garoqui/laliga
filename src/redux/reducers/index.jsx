import { combineReducers } from "redux";
import sesionReducer from "./sesion.reducer";
import editReducer from "./edituser.reducer";

const reducer = combineReducers({
    token : sesionReducer,
    editUser : editReducer
})

export default reducer