import { STARTSESION, CLOSESESION, EDITUSER, DELETEUSER } from "../types";

export const createSesion = ( token ) => ({
  type: STARTSESION, payload : token
});

export const closeSesion = (  ) => ({
    type: CLOSESESION
  });

  export const editUser = ( user ) => ({
    type: EDITUSER, payload : user
  });

  export const deleteUser = ( user ) => ({
    type: DELETEUSER, payload : user
  });


