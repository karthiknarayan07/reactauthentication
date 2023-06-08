import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
export const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      {user.username && <NavLink to="/profile">Profile</NavLink>}
      {!user.username && <NavLink to="/login">Login</NavLink>}
      <NavLink to="/extra">Extra</NavLink>
    </nav>
  );
};
