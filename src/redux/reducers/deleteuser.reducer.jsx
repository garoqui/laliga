import { DELETEUSER, DELETEUSER_ASYNC } from "../types";

const initialState = [];

export default function deleteReducer(state = initialState, action) {
  switch (action.type) {
    case DELETEUSER_ASYNC:
      return action.payload;

    case DELETEUSER:
      return action.payload;

    default:
      return state;
  }
}
