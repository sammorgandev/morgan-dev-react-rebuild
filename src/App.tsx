import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import WorkRoute from "./pages/Work";
function App() {
	return (
		<div className="flex flex-col mb-5 mr-2">
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<WorkRoute />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
