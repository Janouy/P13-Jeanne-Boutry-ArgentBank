import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMessage, selectToken } from "../../selectors";
import { getToken } from "../../services/Auth";

function SignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState("");
	const token = useSelector(selectToken);
	const message = useSelector(selectMessage);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const sendForm = (event) => {
		setErrorMessage("");
		event.preventDefault();
		dispatch(getToken({ email: email, password: password }));
	};
	useEffect(() => {
		if (message !== null) {
			setErrorMessage(message);
		} else if (token) {
			navigate("/profile");
		}
	}, [dispatch, navigate, message, token]);

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
			</section>
			{errorMessage ? <div className="errorMessage">{errorMessage}</div> : null}
		</div>
	);
}

export default SignIn;
