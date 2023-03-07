import React from "react";
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

	return (
		<div className={isModaleOpened ? "openedModale" : "modale"}>
			{!notifMessage ? (
				<img src={Loader} alt="loader" className="loader" />
			) : (
				<>
					{token ? (
						<>
							<div className="greenMessage">{notifMessage}</div>
							<button className="modaleCloseButton" onClick={closeModale}>
								OK
							</button>
						</>
					) : (
						<div className="redMessage">You have been disconnected</div>
					)}
				</>
			)}
			{!token ? (
				<>
					<div className="redMessage">You have been disconnected</div>
					<button className="modaleCloseButton" onClick={closeModale}>
						OK
					</button>
				</>
			) : null}
		</div>
	);
}

export default Modale;
