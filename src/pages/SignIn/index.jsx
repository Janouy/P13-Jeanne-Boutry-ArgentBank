import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setResponseCode } from "../../features/authSlice";
import { selectCode, selectToken } from "../../selectors";
import { getToken } from "../../services/Auth";
const serverError = 500;
const badRequest = 400;

function SignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState("");
	const token = useSelector(selectToken);
	const code = useSelector(selectCode);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const sendForm = (event) => {
		dispatch(setResponseCode(null));
		event.preventDefault();
		const asyncProcess = async () => {
			await dispatch(getToken({ email: email, password: password }));
		};
		asyncProcess();
	};
	useEffect(() => {
		if (code === badRequest) {
			setErrorMessage("Invalid Fields");
		} else if (code === serverError) {
			setErrorMessage("Internal Server Error");
		} else if (token !== null) {
			navigate("/profile");
			dispatch(setResponseCode(null));
		}
	}, [dispatch, navigate, code, token]);
	return (
		<div className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={sendForm}>
					<div className="input-wrapper">
						<label htmlFor="userEmail">UserEmail</label>
						<input
							type="text"
							id="userEmail"
							name="email"
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button className="sign-in-button">Sign In</button>
				</form>
				<div className="errorMessage">{errorMessage}</div>
			</section>
		</div>
	);
}

export default SignIn;
