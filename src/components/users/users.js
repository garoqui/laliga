import { react, useState, useEffect } from "react";

//styles
import "./users.scss";

//services
import { getUsers } from "../../services/users/users.service";

//components
import UserCard from "../userCard/userCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    await fecthUsers();
    console.log(users);
  }, []);

  const fecthUsers = async () => {
    try {
      const resu = await getUsers();
      console.log(resu)
      await setUsers(resu.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Usuarios</h1>
      <div className="container-user" data-testid="container-user">
        {users.map((user, key) => (
          <div key={user.id}>
            <UserCard user={user}></UserCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
