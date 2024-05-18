import Header from "./Header";
// import Footer from "./components/Footer"; // if you have a Footer component
import BackgroundPattern from "./backgroundPattern";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="flex flex-col mb-5 mr-2">
			<Header />
			<BackgroundPattern />
			<div className="flex bg-transparent px-8 py-4 lg:py-8 justify-center">
				<div className="mx-auto max-w-2xl text-base leading-7 text-gray-700">
					{/* Here goes the main content */}
					{children}
				</div>
			</div>
			{/* <Footer /> Uncomment this if you have a Footer component */}
		</div>
	);
};

export default Layout;
