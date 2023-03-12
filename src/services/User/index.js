import axios from "../axiosInstance";
import { login, setMessage, logout } from "../../features/authSlice";
const { REACT_APP_API_URL } = process.env;
const { REACT_APP_STATUS_BAD_REQUEST } = process.env;

//Get user's bank informations with secure token
export const getUser = () => {
	return (dispatch) =>
		axios
			.post(`${REACT_APP_API_URL}/user/profile`, null, {
				headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
			})
			.then((response) => {
				dispatch(login(response.data.body));
			})
			.catch(function (error) {
				if (error.response?.status === REACT_APP_STATUS_BAD_REQUEST) {
					sessionStorage.removeItem("token");
					dispatch(logout());
				} else if (error) {
					sessionStorage.removeItem("token");
					dispatch(logout());
				}
			});
};

//Update user's bank informations with secure token
export const updateUser = (input) => {
	return (dispatch) =>
		axios
			.put(`${REACT_APP_API_URL}/user/profile`, input, {
				headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
			})
			.then((response) => {
				dispatch(setMessage(response.data.message));
				dispatch(login(response.data.body));
			})
			.catch(function (error) {
				if (error) {
					dispatch(setMessage("An error occurs, you have been disconnected"));
					sessionStorage.removeItem("token");
					dispatch(logout());
				}
			});
};
