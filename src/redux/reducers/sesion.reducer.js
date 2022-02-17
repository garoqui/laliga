import { STARTSESION, STARTSESION_ASYNC, CLOSESESION } from "../types";

const initialState = [];

export default function sesionReducer(state = initialState, action) {
  switch (action.type) {
    case STARTSESION_ASYNC:
      return [action.user.token];

    case STARTSESION:
      return state;

    case CLOSESESION:
      return initialState;
    default:
      return state;
  }
}
