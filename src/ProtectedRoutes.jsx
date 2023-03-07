import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ token }) => {
	return token ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
