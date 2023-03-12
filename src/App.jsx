import React, { useEffect, useState } from "react";
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
import Modale from "./components/Modale";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const token = useSelector(selectToken) || sessionStorage.getItem("token");
	const [isModaleOpened, setIsModaleOpened] = useState(false);
	const [notifMessage, setNotifMessage] = useState();

	// Verify token when the application is displayed
	useEffect(() => {
		if (token) dispatch(getUser());
	}, [dispatch, token]);

	return (
		<div className="App">
			<Modale
				isModaleOpened={isModaleOpened}
				notifMessage={notifMessage}
				setIsModaleOpened={setIsModaleOpened}
				token={token}
			/>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<SignIn />} />
				<Route element={<ProtectedRoutes token={token} />}>
					<Route
						path="/profile"
						element={
							<Profile
								user={user}
								setIsModaleOpened={setIsModaleOpened}
								setNotifMessage={setNotifMessage}
							/>
						}
						exact
					/>
				</Route>
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
