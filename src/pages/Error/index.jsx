import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Error() {
	return (
		<div className="error">
			<div>Sorry this page does not exist</div>
			<Link className="link" to="/">
				Return to home page
			</Link>
		</div>
	);
}

export default Error;
