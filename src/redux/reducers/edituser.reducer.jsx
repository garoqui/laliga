import { EDITUSER, EDITUSER_ASYNC, DELETEUSER, DELETEUSER_ASYNC } from "../types";

const initialState = [];

export default function editReducer(state = initialState, action) {
  switch (action.type) {
    case EDITUSER_ASYNC:
      return [action.payload];

    case EDITUSER:
      return action.payload;

    
    default:
      return state;
  }
}