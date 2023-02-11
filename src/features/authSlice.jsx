import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: null,
		user: null,
		code: null,
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setResponseCode: (state, action) => {
			state.code = action.payload;
		},
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state, action) => {
			state.token = null;
			state.user = null;
			state.code = null;
		},
	},
});

export const { setToken, setResponseCode, login, logout } = authSlice.actions;
export default authSlice.reducer;
