import { useSelector } from "react-redux";

//components
import Login from "./components/auth/login/login";
import Users from "./components/users/users";
import UserDetail from "./components/userDetail/userDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/privateRoutes/privateRoutes";
import { useEffect } from "react";

const RouterLiga = () => {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log("cambio");
  }, [state.token]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Users />
            </PrivateRoutes>
          }
        />
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/users"
          element={
            <PrivateRoutes>
              <Users />
            </PrivateRoutes>
          }
        />

        <Route
          path="/userdetail/:id"
          element={
            <PrivateRoutes>
              <UserDetail />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterLiga;
