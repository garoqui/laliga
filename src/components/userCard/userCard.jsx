import { React, useState, useEffect } from "react";

//styles
import "./userCard.scss";

//components
import Avatar from "../avatar/avatar";
import ButtonCustom from "../../utils/buttonCustom/buttonCustom";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {

  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({});

  useEffect(async () => {
    await setUserInfo(user);
  }, [user]);

  const goToDetail = () => {
    navigate(`/userdetail/${user.id}`);
  };

  return (
    <div className="container-usercard">
      <Avatar avatar={userInfo.avatar}></Avatar>
      <div className="container-usercard-text">{` ${userInfo.first_name} , ${userInfo.last_name}`}</div>
      <div onClick={()=>goToDetail()}><ButtonCustom buttonText="Ver detalle" data={userInfo}></ButtonCustom></div>
    </div>
  );
};

export default UserCard;
