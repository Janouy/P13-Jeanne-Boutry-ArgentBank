import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

// redux store configuration
export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});
