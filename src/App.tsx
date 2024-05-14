import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<HomeContent />} />
					<Route path="/about" element={<About />} />
					<Route path="/work" element={<Work />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/blog" element={<Blog />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
