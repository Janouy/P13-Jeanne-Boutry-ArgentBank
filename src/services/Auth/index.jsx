import axios from "../axiosInstance";
import { setToken, setResponseCode } from "../../features/authSlice";

export const getToken = (input) => {
	return (dispatch) =>
		axios
			.post(`/user/login`, input)
			.then((response) => {
				dispatch(setToken(response.data.body.token));
				localStorage.setItem("token", response.data.body.token);
			})
			.catch(function (error) {
				if (error.response?.status === 400) {
					dispatch(setResponseCode(error.response.status));
					localStorage.removeItem("token");
				} else if (error) {
					dispatch(setResponseCode(500));
					localStorage.removeItem("token");
				}
			});
};
