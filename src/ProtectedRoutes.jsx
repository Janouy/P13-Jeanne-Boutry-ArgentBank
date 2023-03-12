import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// Verify token when the user wants to display bank's informations
const ProtectedRoutes = ({ token }) => {
	return token ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
