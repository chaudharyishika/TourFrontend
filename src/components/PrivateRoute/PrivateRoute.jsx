import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ role }) => {
  const token = localStorage.getItem("token"); // Check if token exists
  const userRole = localStorage.getItem("role"); // Check user role

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role && role !== userRole) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
