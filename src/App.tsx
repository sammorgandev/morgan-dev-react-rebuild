import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/OldWork";
import Contact from "./pages/Contact";
import BackgroundPattern from "./components/backgroundPattern";
function App() {
	return (
		<div className="flex flex-col mb-5 mr-2">
			<Router>
				<Header />
				<BackgroundPattern />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/work" element={<Work />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
