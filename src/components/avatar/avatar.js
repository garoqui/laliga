import { react, useState, useEffect } from "react";

//styles
import "./avatar.scss";

const Avatar = ({ avatar }) => {
  const [avatarImg, setAvatarImg] = useState("");

  useEffect(() => {
    setAvatarImg(avatar);
    console.log(avatar);
  }, [avatar]);

  return (
    <div class="container-avatar">
      <img src={avatarImg} />
    </div>
  );
};

export default Avatar;
