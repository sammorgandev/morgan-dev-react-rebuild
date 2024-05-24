import Header from "./Header";
// import Footer from "./components/Footer"; // if you have a Footer component
import BackgroundPattern from "./backgroundPattern";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="relative min-h-screen max-h-screen overflow-auto">
			<div className="fixed inset-0 z-0">
				<BackgroundPattern />
			</div>
			<div className="relative">
				<div className="z-20">
					<Header />
				</div>
				<div className="flex bg-transparent px-8 py-4 lg:py-8 justify-center z-10 overflow-auto">
					<div className="mx-auto max-w-full text-base leading-7 text-gray-700">
						{/* Here goes the main content */}
						{children}
					</div>
				</div>
			</div>
			{/* <Footer /> Uncomment this if you have a Footer component */}
		</div>
	);
};

export default Layout;
