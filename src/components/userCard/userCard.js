import { React, useState, useEffect } from "react";

//styles
import './userCard.scss'

//components
import Avatar from '../../components/avatar/avatar'
import ButtonCustom from '../../utils/buttonCustom/buttonCustom'


const UserCard = ({ user }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(async() => {
    await setUserInfo(user);
  }, [user]);
  return (
    <div className="container-usercard">
      <Avatar avatar={userInfo.avatar}></Avatar>
      <div class="container-usercard-text">{` ${userInfo.first_name} , ${userInfo.last_name}`}</div>
      <ButtonCustom buttonText="Ver detalle"></ButtonCustom>
    </div>
  );
};

export default UserCard;
