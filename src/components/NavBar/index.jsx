import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import "./style.css";
import ImgFileLog from "../../assets/argentBankLogo.png";
import { selectUser } from "../../selectors";

function NavBar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	const signOut = () => {
		dispatch(logout());
		sessionStorage.removeItem("token");
		navigate("/");
	};
	return (
		<div className="main-nav">
			<Link to={"/"} className="main-nav-logo">
				<img className="main-nav-logo-image" src={ImgFileLog} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{user === null ? (
					<Link to={"/login"} className="main-nav-item sign">
						<i className="fa fa-user-circle"></i>
						Sign In
					</Link>
				) : (
					<div className="sign-out-wrapper">
						<div>
							<Link className="connected-name" to="/profile">
								<i className="fa fa-user-circle"></i>
								{user?.firstName}
							</Link>
						</div>
						<div className="sign" onClick={signOut}>
							<i className="fa fa-sign-out"></i> Sign Out
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default NavBar;
