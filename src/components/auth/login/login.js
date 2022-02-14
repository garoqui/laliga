import { useState, useEffect } from "react";
import ButtonCustom from "../../../utils/buttonCustom/buttonCustom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toastr from "../../../utils/toastr/toastr";

//services
import { closeSesion, createSesion } from "../../../actions/sesion.actions";

//styles
import "./login.scss";

const Login = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [toastrStatus, setToastrStatus] = useState({type: "" , text: "", title :"", display: "novisible"})
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setToken(state.token);
    checkIsLogued(state.token);
  }, [state.token]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleBlur = () => {};

  const onSubmit = async () => {
    await dispatch(createSesion(user));
    setToken(state.token);
    if (!state.token.length) {
      openToastr()
    }
    
  };

  const checkIsLogued = async (checkToken) => {
    if (checkToken.length) {
      navigate("/users");
    } else {
      dispatch(closeSesion());      
    }
  };

  const openToastr = () => {
    setToastrStatus({type: "error" , text: "user incorrect", title :"Error", display: "visible"});
  };

  return (
    <div className="container-login">
      <h1>Login</h1>
      <div className="container-login-body">
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={user.email}
            name="email"
            id="email"
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="password"
            onChange={handleChange}
            value={user.password}
            name="password"
            id="password"
          ></input>
        </div>

        <div className="container-modalcustom-footer">
          <div onClick={() => onSubmit()}>
            <ButtonCustom color="green" buttonText="Aceptar"></ButtonCustom>
          </div>
        </div>
      </div>
      <Toastr type={toastrStatus.type} text={toastrStatus.text} title={toastrStatus.title} display={toastrStatus.display}></Toastr>
    </div>
  );
};

export default Login;
