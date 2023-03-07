import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: null,
		user: null,
		message: null,
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state, action) => {
			state.token = null;
			state.user = null;
			state.message = null;
		},
		setMessage: (state, action) => {
			state.message = action.payload;
		},
	},
});

export const { setToken, login, logout, setMessage } = authSlice.actions;
export default authSlice.reducer;
