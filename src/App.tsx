import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./Layouts/Layout";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="login" element={<Login />}></Route>
					<Route path="register" element={<Register />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
