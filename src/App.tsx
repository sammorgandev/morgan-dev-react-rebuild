import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import WorkUI from "./pages/Work";
import WorkPost from "./pages/WorkPost";
function App() {
	return (
		<div>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<WorkUI />} />
						<Route path="/work/categories/:category" element={<WorkUI />} />
						<Route path="/work/tags/:tag" element={<WorkUI />} />
						<Route
							path="/work/categories/:category/:slug"
							element={<WorkPost />}
						/>
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
