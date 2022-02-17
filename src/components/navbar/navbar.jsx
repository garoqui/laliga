
import { Link } from "react-router-dom";

//styles
import "./navbar.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//services
import { closeSesion } from "../../redux/actions/sesion.actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const endSesion = () => {
    dispatch(closeSesion());
    sessionStorage.removeItem("token")
    navigate("/login");
  };

  return (
    <div className="navbar-container">
      <div className="container-logo">LaLiga</div>

      <div className="container-links">
        <Link to="/users">Users</Link>
      </div>

      <div
        className="container-sesion"
        onClick={() => {
          endSesion();
        }}
      >
        Cerrar sesion
      </div>
    </div>
  );
};

export default NavBar;
