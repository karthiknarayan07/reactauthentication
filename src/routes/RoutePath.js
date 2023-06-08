import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Authentication from "./Authentication";
import Authorization from "./Authorization";
import PERMISSIONS from "../permissions/Permissions";
import Extra from "../components/Extra";
const RoutePath = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_ABOUT]} />}
      >
        <Route path='about' element={<About />} />
      </Route>
      <Route
        path='profile'
        element={
          <Authentication>
            <Profile />
          </Authentication>
        }
      />
      <Route
        element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_EXTRA]} />}
      >
        <Route path='extra' element={<Extra />} />
      </Route>
      <Route path='login' element={<Login />} />
    </Routes>
  );
};

export default RoutePath;
