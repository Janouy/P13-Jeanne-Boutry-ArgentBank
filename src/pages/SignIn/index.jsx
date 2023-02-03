import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setResponseCode } from "../../features/authSlice";
import { selectCode, selectToken } from "../../selectors";
import { getToken } from "../../services/Auth";

function SignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector(selectToken);
	const code = useSelector(selectCode);
	const [input, setInput] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setInput({ ...input, [event.target.name]: event.target.value });
	};

	const sendForm = (event) => {
		event.preventDefault();
		const asyncProcess = async () => {
			await dispatch(getToken(input));
		};
		asyncProcess();
	};
	useEffect(() => {
		if (code === 400) {
			alert("Invalid Fields");
		} else if (code === 500) {
			alert("Internal Server Error");
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
						<input type="text" id="userEmail" name="email" onChange={handleChange} />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" onChange={handleChange} />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button className="sign-in-button">Sign In</button>
				</form>
			</section>
		</div>
	);
}

export default SignIn;
