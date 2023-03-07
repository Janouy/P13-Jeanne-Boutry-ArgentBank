import React, { useState, useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../services/User";
import { selectMessage } from "../../selectors";

function Profile({ user, setIsModaleOpened, setNotifMessage }) {
	const dispatch = useDispatch();
	const message = useSelector(selectMessage);
	const [isNameEdit, setIsNameEdit] = useState(false);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();

	useEffect(() => {
		setFirstName(user?.firstName);
		setLastName(user?.lastName);
	}, [user]);

	useEffect(() => {
		setNotifMessage(message);
	}, [message, setNotifMessage]);

	const sendForm = (event) => {
		event.preventDefault();
		dispatch(updateUser({ firstName: firstName, lastName: lastName }));
		setIsNameEdit(false);
		setIsModaleOpened(true);
	};

	return (
		<main className="mainAccount bg-dark">
			<div className="header">
				{!isNameEdit ? (
					<h1>
						Welcome back <br /> {user?.firstName} {user?.lastName} !
					</h1>
				) : (
					<div className="updateInfos-rapper">
						<div className="updateInfos-name">Modify your informations</div>
						<form className="updateForm" onSubmit={sendForm}>
							<div className="input-wrapper">
								<label htmlFor="userEmail">FirstName</label>
								<input
									type="text"
									required="required"
									id="userFirstName"
									name="firstName"
									onChange={(event) => setFirstName(event.target.value)}
									value={firstName}
									pattern="[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}]{2,30}"
									title="pas de chiffres ni charactères spéciaux, minimum 2 charactères"
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="password">LastName</label>
								<input
									type="text"
									required="required"
									id="userLastName"
									name="lastName"
									onChange={(event) => setLastName(event.target.value)}
									value={lastName}
									pattern="[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}]{2,30}"
									title="pas de chiffres ni charactères spéciaux, minimum 2 charactères"
								/>
							</div>
							<button className="update-button">Send Modification</button>
						</form>
					</div>
				)}
				{!isNameEdit ? (
					<button className="edit-button" onClick={() => setIsNameEdit(true)}>
						Edit Name
					</button>
				) : null}
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	);
}

export default Profile;
