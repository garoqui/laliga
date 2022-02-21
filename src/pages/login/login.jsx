import { useState, useEffect } from "react";
import ButtonCustom from "../../utils/buttonCustom/buttonCustom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toastr from "../../utils/toastr/toastr";

//services
import { closeSesion, createSesion } from "../../redux/actions/sesion.actions";

//styles
import "./login.scss";
import { InputText } from "../../componentsStyled/inputText";

//hooks
import { useMessage } from "../../hooks/useMessage";

const Login = () => {
  const [user, setUser] = useState({email:"", password:""});
  const [token, setToken] = useState("");
  const state = useSelector((state) => state);
  const [messageCore, setMessageCore] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // setting the message from custom hook
  let { messageType, messageText, messageTitle, messageDisplay } =
    useMessage(messageCore);

  useEffect(() => {
    setToken(state.token);
    checkIsLogued(sessionStorage.getItem("token"));
  }, [
    state.token,
    messageCore,
    token,
  ]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    await dispatch(createSesion(user));
    await setToken(sessionStorage.getItem("token"));
  };

  const checkIsLogued = async (checkToken) => {
    if (checkToken) {
      navigate("/users");
    } else {
      dispatch(closeSesion());
      sessionStorage.removeItem("token")
    }
  };



  return (
    <div className="container-login">
      <h1>Login</h1>
      <div className="container-login-body">
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <InputText
            type="text"
            onChange={handleChange}
            value={user.email}
            name="email"
            id="email"
          ></InputText>
        </div>

        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <InputText
          type="password"
          onChange={handleChange}
          value={user.password}
          name="password"
          id="password">
          
          </InputText>
        
        </div>

        <div className="container-modalcustom-footer">
          <div onClick={onSubmit}>
            <ButtonCustom color="green" buttonText="Aceptar"></ButtonCustom>
          </div>
        </div>
      </div>
      <Toastr
        type={messageType}
        text={messageText}
        title={messageTitle}
        display={messageDisplay}
      ></Toastr>
    </div>
  );
};

export default Login;
