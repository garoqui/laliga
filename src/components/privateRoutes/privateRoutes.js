import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const state = useSelector((state) => state);

  return state.token.length > 0 ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
