import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Error() {
	return (
		<div className="error">
			<div>Désolé, cette page n'existe pas</div>
			<Link className="link" to="/">
				Retour à la page d'accueil
			</Link>
		</div>
	);
}

export default Error;
