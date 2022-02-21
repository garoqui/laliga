import { URLUSERS } from "../../constants/users.constants";

const requestOptionsPut = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };

  const requestOptionsDelete = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

// get all of users from api
export const getUsers = async () => {
  const resu = await fetch(URLUSERS)
    .then((users) => users)
    .catch((err) => console.log(err));
  if (!resu.ok) {
    throw Error(resu.status);
  }
  return resu.json();
};

// get user by id
export const getUserDetail = async (id) => {
  const resu = await fetch(`${URLUSERS}/${id}`)
    .then((users) => users)
    .catch((err) => console.log(err));
  if (!resu.ok) {
    throw Error(resu.status);
  }
  return resu.json();
};

// delete user by id
export const deleteUser = async (id) => {
  const temp = {
    ...requestOptionsDelete,
    // body: JSON.stringify(id),
  };

  const resu = await fetch(`${URLUSERS}/${id}`, temp)
    .then((users) => users)
    .catch((err) => console.log(err));
  if (!resu.ok) {
    throw Error(resu.status);
  }
  return resu.status;
};

//edit user by id
export const editUser = async (user) => {
    const temp = {
        ...requestOptionsPut,
        body: JSON.stringify(user),
      };

    const resu = await fetch(`${URLUSERS}/${user.id}`, temp)
      .then((users) => users)
      .catch((err) => console.log(err));
    if (!resu.ok) {
      throw Error(resu.status);
    }
    return resu.json();
  };
