import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		{/* wraps the application in a provider to use the Redux store*/}
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
);
