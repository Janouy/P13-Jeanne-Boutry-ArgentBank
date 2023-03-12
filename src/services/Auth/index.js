import axios from "../axiosInstance";
import { setToken, setMessage } from "../../features/authSlice";

//send user connection informations and get token from backend
export const getToken = (input) => {
	return (dispatch) =>
		axios
			.post(`/user/login`, input)
			.then((response) => {
				dispatch(setToken(response.data.body.token));
				sessionStorage.setItem("token", response.data.body.token);
			})
			.catch(function (error) {
				dispatch(setMessage("An error occurs, please try again"));
				setTimeout(() => {
					dispatch(setMessage(null));
				}, 3000);
				sessionStorage.removeItem("token");
			});
};
