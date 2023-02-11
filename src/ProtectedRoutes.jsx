import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import { selectUser } from "./selectors";

const useAuth = () => {
	const isConnected = useSelector(selectUser);
	return isConnected ? true : false;
};

const ProtectedRoutes = () => {
	const isAuth = useAuth();
	return isAuth ? <Outlet /> : <Home />;
};

export default ProtectedRoutes;
