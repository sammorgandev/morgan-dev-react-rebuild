import Header from "./Header";
// import Footer from "./components/Footer"; // if you have a Footer component
import BackgroundPattern from "./backgroundPattern";
import React from "react";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="relative min-h-screen flex flex-col">
			<div className="fixed inset-0 z-0">
				<BackgroundPattern />
			</div>
			<div className="z-10">
				<Header />
			</div>
			<main className="flex-grow overflow-auto px-8 py-4 lg:py-8 flex justify-center">
				<div className="mx-auto max-w-full text-base leading-7 text-gray-700">
					{/* Here goes the main content */}
					{children}
				</div>
			</main>
			<div className="z-10">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
