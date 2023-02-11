import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export default axios.create({
	baseURL: REACT_APP_API_URL,
	headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});
