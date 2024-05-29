import React from "react";
import "./styles/App.css";
import {
	useLocation,
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import WorkUI from "./pages/Work";
import WorkPost from "./pages/WorkPost";
import { ThemeProvider } from "./components/ThemeProvider";
import Admin from "./pages/Admin";

function App() {
	return (
		<ThemeProvider>
			<div className="h-full bg-gray-50">
				<Router>
					<RoutesWithLayout />
				</Router>
			</div>
		</ThemeProvider>
	);
}

function RoutesWithLayout() {
	const location = useLocation();

	const isNotAdmin = location.pathname !== "/admin";

	return isNotAdmin ? (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<WorkUI />} />
				<Route path="/work/categories/:category" element={<WorkUI />} />
				<Route path="/work/tags/:tag" element={<WorkUI />} />
				<Route path="/work/categories/:category/:slug" element={<WorkPost />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Layout>
	) : (
		<div className="h-full">
			<Routes>
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
