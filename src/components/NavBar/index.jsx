import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ImgFileLog from "../../assets/argentBankLogo.png";

function NavBar() {
	return (
		<div className="main-nav">
			<Link to={"/"} className="main-nav-logo">
				<img className="main-nav-logo-image" src={ImgFileLog} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				<Link to={"/sign-in"} className="main-nav-item">
					<i className="fa fa-user-circle"></i>
					Sign In
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
