import { useSelector } from "react-redux";

//components
import Login from "./pages/login/login";
import Users from "./pages/users/users";
import UserDetail from "./pages/userDetail/userDetail";
import NavBar from "./components/navbar/navbar";  


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/privateRoutes/privateRoutes";
import { useEffect } from "react";

const RouterLiga = () => {
  const state = useSelector((state) => state);

  useEffect(() => {
  }, [state.token]);

  return (
    <Router>
      <NavBar></NavBar>
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
