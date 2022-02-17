import { STARTSESION, CLOSESESION } from "../types";

export const createSesion = ( token ) => ({
  type: STARTSESION, payload : token
});

export const closeSesion = (  ) => ({
    type: CLOSESESION
  });
