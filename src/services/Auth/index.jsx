import axios from "axios";
import { setToken, setResponseCode } from "../../features/authSlice";
const { REACT_APP_API_URL } = process.env;

export const getToken = (input) => {
	return (dispatch) =>
		axios
			.post(`${REACT_APP_API_URL}/user/login`, input)
			.then((response) => {
				dispatch(setToken(response.data.body.token));
				sessionStorage.setItem("token", response.data.body.token);
			})
			.catch(function (error) {
				if (error.response?.status === 400) {
					dispatch(setResponseCode(error.response.status));
				} else if (error) {
					dispatch(setResponseCode(500));
				}
			});
};
