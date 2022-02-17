import { STARTSESION, CLOSESESION, EDITUSER } from "../types";

export const createSesion = ( token ) => ({
  type: STARTSESION, payload : token
});

export const closeSesion = (  ) => ({
    type: CLOSESESION
  });

  export const editUser = ( user ) => ({
    type: EDITUSER, payload : user
  });


