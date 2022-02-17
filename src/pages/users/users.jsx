import { react, useState, useEffect } from "react";

//styles
import "./users.scss";

//services
import { getUsers } from "../../services/users/users.service";

//components
import UserCard from "../../components/userCard/userCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    await fecthUsers();
  }, []);

  const fecthUsers = async () => {
    try {
      const resu = await getUsers();
      await setUsers(resu.data);
    } catch (err) {
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
