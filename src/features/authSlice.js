import { createSlice } from "@reduxjs/toolkit";

// creating a redux state for user login
export const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: null,
		user: null,
		message: null,
	},
	reducers: {
		// Token
		setToken: (state, action) => {
			state.token = action.payload;
		},
		// Connected user's  informations
		setUser: (state, action) => {
			state.user = action.payload;
		},
		// Erase connected user's informations
		logout: (state) => {
			state.token = null;
			state.user = null;
			state.message = null;
		},
		// Message returned by the backend
		setMessage: (state, action) => {
			state.message = action.payload;
		},
	},
});

export const { setToken, setUser, logout, setMessage } = authSlice.actions;
export default authSlice.reducer;
