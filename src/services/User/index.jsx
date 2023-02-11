import axios from "../axiosInstance";
import { login, setResponseCode } from "../../features/authSlice";
const { REACT_APP_API_URL } = process.env;
const { REACT_APP_STATUS_BAD_REQUEST } = process.env;
const { REACT_APP_STATUS_INTERNAL_SERVER_ERROR } = process.env;

export const getUser = () => {
	return (dispatch) =>
		axios
			.post(`${REACT_APP_API_URL}/user/profile`, null, {
				headers: { Authorization: "Bearer " + localStorage.getItem("token") },
			})
			.then((response) => {
				dispatch(login(response.data.body));
			})
			.catch(function (error) {
				console.log(error);
				if (error.response?.status === REACT_APP_STATUS_BAD_REQUEST) {
					dispatch(setResponseCode(error.response.status));
					localStorage.removeItem("token");
				} else if (error) {
					dispatch(setResponseCode(REACT_APP_STATUS_INTERNAL_SERVER_ERROR));
					localStorage.removeItem("token");
				}
			});
};
