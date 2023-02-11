import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import "./style.css";
import ImgFileLog from "../../assets/argentBankLogo.png";

function NavBar() {
	const token = localStorage.getItem("token");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const signOut = () => {
		dispatch(logout());
		localStorage.removeItem("token");
		navigate("/");
	};
	return (
		<div className="main-nav">
			<Link to={"/"} className="main-nav-logo">
				<img className="main-nav-logo-image" src={ImgFileLog} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{token === null ? (
					<Link to={"/sign-in"} className="main-nav-item sign">
						<i className="fa fa-user-circle"></i>
						Sign In
					</Link>
				) : (
					<div className="sign" onClick={signOut}>
						<i className="fa fa-sign-out"></i> Sign Out
					</div>
				)}
			</div>
		</div>
	);
}

export default NavBar;
