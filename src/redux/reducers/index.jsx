import { combineReducers } from "redux";
import sesionReducer from "./sesion.reducer";
import editReducer from "./edituser.reducer";
import deleteReducer from "./deleteuser.reducer";

const reducer = combineReducers({
    token : sesionReducer,
    editUser : editReducer,
    deleteUser : deleteReducer
})

export default reducer