import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
	return (
		<div className="flex flex-col mb-5 mr-2">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
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
