import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//components
import ModalCustom from "../../utils/modalCustom/modalCustom";
import Toastr from "../../utils/toastr/toastr";
import { useDispatch, useSelector } from "react-redux";

//styles
import "./userDetail.scss";

//services
import { getUserDetail} from "../../services/users/users.service";
import ButtonCustom from "../../utils/buttonCustom/buttonCustom";
import { deleteUser } from "../../redux/actions/sesion.actions";


const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [userInfo, setUserInfo] = useState({first_name: "", last_name:"", email:""});
  const [modalVisible, setModalVisible] = useState("novisible");
  const [toastrVisible, setToastrVisible] = useState("novisible")

  useEffect(() => {
    const resu = async () => {
      const userData = await getUser();
      setUser(userData);
    };
    resu();
  }, [id]);

  const getUser = async () => {
    const resu = await getUserDetail(id);
    return resu.data;
  };

  const setUser = (user) => {
    setUserInfo(user);
  };

  const goToUsers = () => {
    navigate("/users");
  };

  const deleteCurrentUser = async () => {
    dispatch(deleteUser(id))
  };

  const openModal = (status) => {
    setModalVisible(status);
  };

  const openToastr = (status) => {
    setToastrVisible(status);
  };

  return (
    <div className="container-user-detail">
      <h1>Información del Usuario</h1>
      <div className="container-user-detail-image">
        <img src={userInfo.avatar} alt={userInfo.first_name} />
        <div className="container-user-detail-image-text">
          <div>Name : {userInfo.first_name}</div>
          <div>Lastname : {userInfo.last_name}</div>
          <div>email : {userInfo.email}</div>

          <div className="container-user-detail-image-controls">
            <div onClick={() => goToUsers()}>
              <ButtonCustom buttonText="Back" name="back" color="green"></ButtonCustom>
            </div>
            <div onClick={() => openModal("visible")}>
              <ButtonCustom buttonText="Edit" color="orange" name="edit"></ButtonCustom>
            </div>
            <div onClick={() => deleteCurrentUser()}>
              <ButtonCustom buttonText="Delete" color="red" name="delete"></ButtonCustom>
            </div>
          </div>
        </div>
      </div>
      <ModalCustom
        title="Edit User"
        data={userInfo}
        display={modalVisible}
        openModal={openModal}
        openToastr={openToastr}
      ></ModalCustom>

<Toastr type="success" text="User Edited!" title="Success" display={toastrVisible}></Toastr>
    </div>
  );
};

export default UserDetail;
