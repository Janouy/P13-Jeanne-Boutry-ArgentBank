import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { getUser } from "./services/User";
import { selectUser, selectToken } from "./selectors";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const token = useSelector(selectToken) || localStorage.getItem("token");

	useEffect(() => {
		if (token) dispatch(getUser());
	}, [dispatch, token]);

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/profile" element={<Profile user={user} />} />
				</Route>
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
