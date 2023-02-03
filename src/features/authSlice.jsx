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
		setLogout: (state, action) => {
			state.token = null;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setToken, setLogout, setResponseCode } = authSlice.actions;
export default authSlice.reducer;
