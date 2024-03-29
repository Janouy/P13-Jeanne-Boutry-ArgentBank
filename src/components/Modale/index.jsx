import React, { useEffect } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { setMessage } from "../../features/authSlice";
import Loader from "../../assets/loading-gif.gif";

function Modale({ notifMessage, isModaleOpened, setIsModaleOpened, token }) {
	const dispatch = useDispatch();
	const closeModale = () => {
		setIsModaleOpened(false);
		dispatch(setMessage(null));
	};

	useEffect(() => {
		isModaleOpened ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
	}, [isModaleOpened]);
	return (
		<div className={isModaleOpened ? "openedModale" : "modale"}>
			{!notifMessage ? (
				<img src={Loader} alt="loader" className="loader" />
			) : (
				<>
					{token ? (
						<div className="innerModale">
							<div className="greenMessage">{notifMessage}</div>
							<button className="modaleCloseButton" onClick={closeModale}>
								OK
							</button>
						</div>
					) : (
						<div className="redMessage">You have been disconnected</div>
					)}
				</>
			)}
			{!token ? (
				<div className="innerModale">
					<div className="redMessage">You have been disconnected</div>
					<button className="modaleCloseButton" onClick={closeModale}>
						OK
					</button>
				</div>
			) : null}
		</div>
	);
}

export default Modale;
