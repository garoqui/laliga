import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
  // const state = useSelector((state) => state);
  const token = sessionStorage.getItem("token")

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
