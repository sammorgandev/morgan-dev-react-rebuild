import Header from "./Header";
// import Footer from "./components/Footer"; // if you have a Footer component

import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="flex flex-col mb-5 mr-2">
			<Header />
			{/* Here goes the main content */}
			{children}
			{/* <Footer /> Uncomment this if you have a Footer component */}
		</div>
	);
};

export default Layout;
